# _plugins/email_obfuscator_base64.rb
require "openssl"
require "securerandom"
require "base64"

module Jekyll
  module EmailObfuscatorFilter
    KEY_TEXT = "YmU-uiZeKvTJ7qxKfPfntfXoe9AlfaMWDu59FgQyoFo".freeze
    NONCE_BYTES = 8
    BLOCK_BYTES = 16

    def encrypt_email(email)
      key_bytes = decode_js_key(KEY_TEXT)
      nonce = SecureRandom.random_bytes(NONCE_BYTES)
      counter = nonce + "\x00" * (BLOCK_BYTES - NONCE_BYTES)

      cipher = OpenSSL::Cipher.new("aes-256-ctr")
      cipher.encrypt
      cipher.key = key_bytes
      cipher.iv = counter
      encrypted = cipher.update(email) + cipher.final

      out_bytes = nonce + encrypted

      # Standard Base64 URL-safe encoding without padding
      Base64.urlsafe_encode64(out_bytes).delete("=")
    end

    private

    # Decode the JS custom key text to raw bytes
    def decode_js_key(key_text)
      bytes = []
      key_text.each_char do |c|
        bytes << case c
        when "-" then 63
        when "_" then 62
        when /[0-9]/ then c.ord - 48
        when /[A-Z]/ then c.ord - 29
        when /[a-z]/ then c.ord - 87
        else 0
        end
      end

      out = []
      bytes.each_with_index do |v, i|
        r = 2 * (i % 4)
        if r != 0
          out << (((bytes[i - 1] << r) & 0xff) | (v >> (6 - r)))
        end
      end
      out.pack("C*")
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmailObfuscatorFilter)
