import { getAllEmployess } from "../services/employees";

async function createAccount(
    inputEmail,
    inputPassword,
    inputName,
    navigation,
    setCreationStatus,
    setIsCreating,
    token
) {
    if (inputEmail == "" || inputPassword == "" || inputName == "") {
        setCreationStatus("Campos inválidos");
        return;
    }

    setIsCreating(true);
    const isEmailAvailable = !(await isEmailAlreadyRegistered(inputEmail));
    const hashedPassword = await sha256(inputPassword);

    if (isEmailAvailable) {
        const resAuth = await signUp(inputEmail, inputPassword);
        
        if (!resAuth) {
            setCreationStatus("Insira um email válido e uma senha de no mínimo 6 caracteres\n");
            setIsCreating(false);
            return;
        }

        const employee = {
            name: inputName,
            email: inputEmail,
            password: hashedPassword,
        };
        await registerEmployee(employee,token);

        setCreationStatus("");
        setIsCreating(false);

        navigation.navigate("HomeLoginScreen");
    } else {
        setIsCreating(false);
        setCreationStatus("Email já cadastrado");
    }
}

async function isEmailAlreadyRegistered(inputEmail) {
    const employees = await getAllEmployess();

    for (let { email } of employees) {
        if (email == inputEmail) return true;
    }

    return false;
}

export default createAccount;