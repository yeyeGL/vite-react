import data from '../data/datos.json';

export const pedirProductos = () => {

    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(data)
        },2000)

    })

}

