import api from "./api";





export const PostProduct = async (productData) => {
    try {
        const response = await api.post('/Products.json', productData)
         console.log(response.data)
     } catch (err) {
         console.log(err)
     }
 }