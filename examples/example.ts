import { encrypt, decrypt } from 'super-simple-crypto-lib'; 

const secretKey = 'avery strongsecret key';
const algorithm = 'aes-256-cbc';

const plaintext = 'Hello, World! This is a test message.';

const ciphertext = encrypt(plaintext, secretKey, algorithm);
console.log('Encrypted:', ciphertext);

const decryptedText = decrypt(ciphertext, secretKey, algorithm);
console.log('Decrypted:', decryptedText);