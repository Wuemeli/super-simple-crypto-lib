import crypto from 'crypto';

export function encrypt(text, secretKey, algorithm) {
    const cipher = crypto.createCipher(algorithm, secretKey);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

export function decrypt(encryptedText, secretKey, algorithm) {
    const decipher = crypto.createDecipher(algorithm, secretKey);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
