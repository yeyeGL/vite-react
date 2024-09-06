import { ItemFake } from "./ItemFake";

export const ItemFakeList = ({ fake }) => {

    return (
        <div>
            {fake.length > 0 && (
                fake.map((product, id) => {
                    return(
                        <ItemFake key={product.id} fake={product} />
                    )
                })
            )}
        </div>
    );
}
