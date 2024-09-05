import { useEffect, useState } from 'react';
import { pedirProductos } from './pedirProductos';
import { ItemList } from './ItemList';


export const ListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProducts(res);
            })
    }, []);

    return (
        <div>
            <ItemList products={products}/>
        </div>
    );
};
