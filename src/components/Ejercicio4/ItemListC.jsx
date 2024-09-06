import { useEffect, useState } from "react"
import { pedirProductos } from "../../helpers/PedirProductos";
import { ItemL } from "./ItemL";

export const ItemListC = () => {

    const [productos, setproductos] = useState([]);

    

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setproductos(res);
            })
    }, [])

    return (
        <div>
           
           <ItemL productos={productos}/>

        </div>
    )

}