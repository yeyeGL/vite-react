import { Iten } from "./Iten"

export const ItemL = ({productos}) => {

    return(
        <div className="container">
            <h2 className="main-title">Productos</h2>
            <div className="productos">
                {productos.map((prod)=> <Iten key={prod} productos={prod} /> )}
            </div>

        </div>
    )


}