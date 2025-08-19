"use strict";

const EmailObfuscator = (() => {
  const KEY_TEXT = "YmU-uiZeKvTJ7qxKfPfntfXoe9AlfaMWDu59FgQyoFo";
  const NONCE_BYTES = 8;
  const BLOCK_BYTES = 16;

  // Interaction events to trigger decrypting the emails
  const EVENTS = [
    "click",
    "contextmenu",
    "mousemove",
    "mousedown",
    "mouseup",
    "keydown",
    "keyup",
    "scroll",
    "touchmove",
    "touchstart",
    "wheel",
  ];

  // ---------- AES helpers ----------
  async function getKey(keyText) {
    const bytes = decodeJsKey(keyText);
    return crypto.subtle.importKey("raw", bytes, { name: "AES-CTR" }, false, [
      "encrypt",
      "decrypt",
    ]);
  }

  function decodeJsKey(keyText) {
    const bytes = [];
    for (let i = 0; i < keyText.length; i++) {
      const c = keyText[i];
      if (c === "-") bytes.push(63);
      else if (c === "_") bytes.push(62);
      else if (c >= "0" && c <= "9") bytes.push(c.charCodeAt(0) - 48);
      else if (c >= "A" && c <= "Z") bytes.push(c.charCodeAt(0) - 29);
      else bytes.push(c.charCodeAt(0) - 87);
    }

    const out = [];
    for (let i = 0; i < bytes.length; i++) {
      const r = 2 * (i % 4);
      if (r !== 0) {
        out.push(((bytes[i - 1] << r) & 0xff) | (bytes[i] >> (6 - r)));
      }
    }
    return new Uint8Array(out);
  }

  function newCounter(nonce) {
    const counter = new Uint8Array(BLOCK_BYTES);
    counter.set(nonce);
    return counter;
  }

  // ---------- Base64 helpers ----------
  function base64Encode(bytes) {
    return btoa(String.fromCharCode(...bytes))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  function base64Decode(text) {
    const padded = text
      .padEnd(Math.ceil(text.length / 4) * 4, "=")
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const binaryStr = atob(padded);
    return new Uint8Array([...binaryStr].map((c) => c.charCodeAt(0)));
  }

  // ---------- Encryption / Decryption ----------
  async function encrypt(email, keyText = KEY_TEXT) {
    const key = await getKey(keyText);
    const nonce = crypto.getRandomValues(new Uint8Array(NONCE_BYTES));
    const counter = newCounter(nonce);

    const cipher = await crypto.subtle.encrypt(
      { name: "AES-CTR", counter, length: (BLOCK_BYTES - NONCE_BYTES) * 8 },
      key,
      new TextEncoder().encode(email),
    );

    const bytes = new Uint8Array(cipher);
    const output = new Uint8Array(NONCE_BYTES + bytes.length);
    output.set(nonce);
    output.set(bytes, NONCE_BYTES);

    return base64Encode(output);
  }

  async function decrypt(inputText, keyText = KEY_TEXT) {
    const key = await getKey(keyText);
    const bytes = base64Decode(inputText);
    const nonce = bytes.slice(0, NONCE_BYTES);
    const code = bytes.slice(NONCE_BYTES);
    const counter = newCounter(nonce);

    const plain = await crypto.subtle.decrypt(
      { name: "AES-CTR", counter, length: (BLOCK_BYTES - NONCE_BYTES) * 8 },
      key,
      code,
    );
    return new TextDecoder().decode(plain);
  }

  async function newKey() {
    const key = await crypto.subtle.generateKey(
      { name: "AES-CTR", length: 256 },
      true,
      ["encrypt", "decrypt"],
    );
    const raw = new Uint8Array(await crypto.subtle.exportKey("raw", key));
    return base64Encode(raw);
  }

  // ---------- Reveal on user interaction ----------
  async function setup() {
    const els = document.querySelectorAll("[Dhs1ewcqvT='1']");

    const revealAll = async () => {
      els.forEach(async (el) => {
        try {
          const decrypted = await decrypt(el.textContent.trim());
          const withComments = decrypted
            .split("")
            .map((c) =>
              Math.random() < 0.1
                ? `<!--${Math.floor(Math.random() * 1000)}-->${c}`
                : c,
            )
            .join("");

          if (el.tagName === "A") {
            el.href = "mailto:" + decrypted;
            el.innerHTML = withComments;
          } else {
            el.innerHTML = withComments;
          }
        } catch (err) {
          console.error("Decryption failed", err);
        }
      });

      EVENTS.forEach((evt) =>
        document.removeEventListener(evt, revealAll, true),
      );
    };

    EVENTS.forEach((evt) =>
      document.addEventListener(evt, revealAll, { capture: true, once: true }),
    );
  }

  // ---------- Public API ----------
  return {
    encrypt,
    decrypt,
    newKey,
    setup,
  };
})();

// Auto-setup on page load
document.addEventListener("DOMContentLoaded", () => {
  if (location.protocol === "https:" || location.hostname === "localhost") {
    EmailObfuscator.setup();
  } else {
    console.warn("AES obfuscation requires HTTPS or localhost.");
  }
});
