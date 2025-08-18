"use strict";

const EmailObfuscator = (() => {
  const KEY_TEXT = "YmU-uiZeKvTJ7qxKfPfntfXoe9AlfaMWDu59FgQyoFo";
  const NONCE_BYTES = 8;
  const BLOCK_BYTES = 16;
  const BITS_PER_BYTE = 8;

  // ---------- AES helpers ----------
  async function newKey() {
    const key = await crypto.subtle.generateKey(
      { name: "AES-CTR", length: 256 },
      true,
      ["encrypt", "decrypt"],
    );
    const raw = await crypto.subtle.exportKey("raw", key);
    return Base64.text(new Uint8Array(raw));
  }

  async function getKey(keyText) {
    const bytes = Base64.bytes(keyText);
    return crypto.subtle.importKey("raw", bytes, { name: "AES-CTR" }, false, [
      "encrypt",
      "decrypt",
    ]);
  }

  function newNonce() {
    const nonce = new Uint8Array(NONCE_BYTES);
    crypto.getRandomValues(nonce);
    return nonce;
  }

  function newCounter(nonce) {
    const counter = new Uint8Array(BLOCK_BYTES);
    counter.set(nonce);
    return counter;
  }

  function newOptions(counter) {
    return {
      name: "AES-CTR",
      counter,
      length: (BLOCK_BYTES - NONCE_BYTES) * BITS_PER_BYTE,
    };
  }

  async function encrypt(plainText) {
    const key = await getKey(KEY_TEXT);
    const nonce = newNonce();
    const counter = newCounter(nonce);
    const options = newOptions(counter);
    const plain = new TextEncoder().encode(plainText);
    const buffer = await crypto.subtle.encrypt(options, key, plain);
    const code = new Uint8Array(buffer);
    const output = new Uint8Array(nonce.length + code.length);
    output.set(nonce);
    output.set(code, nonce.length);
    return Base64.text(output);
  }

  async function decrypt(inputText) {
    const key = await getKey(KEY_TEXT);
    const bytes = Base64.bytes(inputText);
    const nonce = bytes.slice(0, NONCE_BYTES);
    const code = bytes.slice(NONCE_BYTES);
    const counter = newCounter(nonce);
    const options = newOptions(counter);
    const plain = await crypto.subtle.decrypt(options, key, code);
    return new TextDecoder().decode(plain);
  }

  // ---------- Base64 helpers ----------
  const Base64 = {
    bytes(text) {
      const values = new Uint8Array(text.length);
      for (let i = 0; i < text.length; i++) {
        const c = text.charCodeAt(i);
        if (c === 45) values[i] = 63;
        else if (c < 58) values[i] = c - 48;
        else if (c < 91) values[i] = c - 29;
        else if (c === 95) values[i] = 62;
        else values[i] = c - 87;
      }
      const len = Math.floor((3 * values.length) / 4);
      const out = new Uint8Array(len);
      for (let i = 0, j = 0; i < values.length; ++i) {
        const r = 2 * (i % 4);
        if (r !== 0) {
          out[j++] = ((values[i - 1] << r) & 0xff) | (values[i] >> (6 - r));
        }
      }
      return out;
    },
    text(bytes) {
      let text = "";
      for (let i = 0; i < bytes.length; ++i) {
        const r = i % 3;
        if (r === 0) {
          text +=
            sym(bytes[i] >> 2) +
            sym(((bytes[i] << 4) & 63) | (bytes[i + 1] >> 4));
        } else if (r === 1) {
          text += sym(((bytes[i] << 2) & 63) | (bytes[i + 1] >> 6));
        } else {
          text += sym(bytes[i] & 63);
        }
      }
      return text;
      function sym(v) {
        if (v < 10) return String.fromCharCode(48 + v);
        if (v < 36) return String.fromCharCode(87 + v);
        if (v < 62) return String.fromCharCode(29 + v);
        if (v === 62) return "_";
        return "-";
      }
    },
  };

  // ---------- Public API ----------
  return {
    async newKey() {
      console.log("keyText:", await newKey());
    },
    async encrypt(email) {
      return encrypt(email);
    },
    async decrypt(encrypted) {
      return decrypt(encrypted);
    },
    async setup() {
      const els = document.querySelectorAll("[Dhs1ewcqvT='1']");

      // Decrypt on **any user interaction on the page**
      const revealAll = async () => {
        const key = await getKey(KEY_TEXT);
        els.forEach(async (el) => {
          try {
            const decrypted = await decrypt(el.textContent.trim());
            // Optional mild obfuscation: insert a few HTML comments
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
              el.innerHTML = withComments; // or el.textContent = decrypted; to skip comments
            } else {
              el.innerHTML = withComments; // or el.textContent = decrypted; to skip comments
            }
          } catch (err) {
            console.error("Decryption failed", err);
          }
        });

        document.removeEventListener("mouseenter", revealAll, true);
        document.removeEventListener("focus", revealAll, true);
        document.removeEventListener("scroll", revealAll, true);
      };

      document.addEventListener("mouseenter", revealAll, {
        capture: true,
        once: true,
      });
      document.addEventListener("focus", revealAll, {
        capture: true,
        once: true,
      });
      document.addEventListener("click", revealAll, {
        capture: true,
        once: true,
      });
      document.addEventListener("scroll", revealAll, {
        capture: true,
        once: true,
      });
    },
  };
})();

// Auto-setup
document.addEventListener("DOMContentLoaded", () => {
  if (location.protocol === "https:" || location.hostname === "localhost") {
    EmailObfuscator.setup();
  } else {
    console.warn("AES obfuscation requires HTTPS or localhost.");
  }
});
