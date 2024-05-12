//Alexandre
import api from "./api";

/*
Estrutura do employee
o id é colocado automaticamente pelo Firebase
const employee= {
    name: "Chuck Norris",
    email: "chucknorrisdocodigo@gmail.com",
    senha: "123"
}
*/

async function registerEmployee(employee, token){
    try {
        const res = await api.post(`/employees.json?auth=${token}`, employee)
        console.log("Registrando usuário, resposta: ", res.status)
    } catch (error) {
        console.log("Registrando usuário, erro: ", error);
    }
}

async function deleteEmployee(id, token){
    try{
        const res = await api.delete(`/employees/${id}.json?auth=${token}`)
        console.log(`Deletando o funcionaio de id: ${id}, status: ${res.status}`)
    }catch(err){
        console.log("Error ao deletar funcionário:" + err);
    }
}

async function updateEmployee(id, token, employee){
    try {
        const res = await api.patch(`/employees/${id}.json?auth=${token}`, employee)
        console.log("Atualizando usuário, resposta: ", res.status)
    } catch (error) {
        console.log("Atualizando usuário, erro: ", error);
    }
}

async function getAllEmployess(token){
    const registeredEmployees = [];
    try {
        const res = await api.get(`employees.json?auth=${token}`);
        
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

export {registerEmployee, getAllEmployess, deleteEmployee, updateEmployee};