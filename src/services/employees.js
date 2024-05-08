//Alexandre
import api from "./api";


/*
Estrutura do employee
const employee= {
    name: "Chuck Norris",
    email: "chucknorrisdocodigo@gmail.com",
    senha: "123"
}
*/

async function registerEmployee(employee){
    try {
        const res = await api.post('/employees.json', employee)
        console.log("Registrando Usuário, resposta: ", res.status)
    } catch (error) {
        console.log("Erro registrando usuário: ", error);
    }
}

async function getAllEmployess(){
    const registeredEmployees = [];
    try {
        const res = await api.get('employees.json');
        
        for(let objKey in res.data){
            const employee = {
                id: objKey,
                name: res.data[objKey].name,
                email: res.data[objKey].email,
                password:res.data[objKey].password
            }

            registeredEmployees.push(employee);
        }

        return registeredEmployees
    } catch (error) {
        console.log("Erro ao selecionar todos os funcionários: ", error);
    }
}

async function isEmailAlreadyRegistered(inputEmail){
    const employees = await getAllEmployess();
    
    for( let {email} of employees){
        if(email == inputEmail) return true;
    }

    return false;
}

export {registerEmployee, isEmailAlreadyRegistered};