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

async function registerEmployee(employee){
    try {
        const res = await api.post('/employees.json', employee)
        console.log("Registrando usuário, resposta: ", res.status)
    } catch (error) {
        console.log("Registrando usuário, erro: ", error);
    }
}

async function deleteEmployee(id){
    try{
        const res = await api.delete(`/employees/${id}.json`)

        console.log(`Deletando o funcionaio de id: ${id}, status: ${res.status}`)
    }catch(err){
        console.log("Error ao deletar funcionário:" + err);
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

export {registerEmployee, getAllEmployess};