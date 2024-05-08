import * as Crypto from "expo-crypto";

async function sha256(password) {
    const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
    );

    return hashedPassword
}

export default sha256;
