import { Item } from "./Item";

export const ItemList = ({products}) => {
    return (
        <div>
            {products.length > 0 &&
                products.map((products) => {
                    return (
                        <Item key={products.id} products={products}/>
                    )
                })
            }
        </div>
    );
}
