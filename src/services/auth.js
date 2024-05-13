import axios from "axios";
const baseAuthURL = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

//variável mode ou é signIn ou signUp
async function authenticate(mode, email, password) {
    try {
        const authURL = `${baseAuthURL}${mode}?key=${apiKey}`;

        const res = await axios.post(authURL, {
            email: email,
            password: password,
            returnSecureToken: true,
        });

        return res.data.idToken;
    } catch (err) {
        console.log(`Error at ${mode}: ${err}`);
        return null;
    }
}
//LOGAR
async function signIn(email, password) {
    const res = await authenticate("signInWithPassword", email, password);
    return res;
}
//CRIAR CONTA
async function signUp(email, password) {
    const res = await authenticate("signUp", email, password);
    return res;
}

export { signIn, signUp };
