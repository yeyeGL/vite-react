import data from '../../data/datos.json';

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)

    });
};