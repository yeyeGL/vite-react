export const Iten = ({ productos }) => {
    return (
        <div className="producto">

            <img src={productos.image} />
            <div>
                <h1 className="producto-title">{productos.title}</h1>
                <h2>{productos.price}</h2>
                <a href={`/iten/${productos.id}`} className="ver-mas">Ver mas</a>
            </div>


        </div>
    )
}