import { ref } from "vue";

async function apiBackend(){  
    const apiBK =  await fetch("http://localhost:3000/burgers") 
    const dataAPI = await apiBK.json()
    const par = document.createElement('p')
    par.innerText = 'cu'

    console.log(dataAPI)
}

const products = ref({
    // id: 1,
    // name: 'Produto 1'
        apiBackend
})




// const products = ref({
//     async apiBackend(){  
//         const apiBK =  await fetch("http://localhost:3000/burgers") 
//         const dataAPI = await apiBK.json()
//         const par = document.createElement('p')
//         par.innerText = 'cu'

//         console.log(dataAPI)
// }
// })

export const useCart = () => {
    return {
        products
    }
}