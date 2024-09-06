export const Item=({products})=>{
    return(
        <div>
        <h3>{products.title}</h3>
        <img src={products.image} />
        <h3>{products.price}</h3>
        <h3>{products.description}</h3>
    </div>
    )
}