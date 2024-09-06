import { useEffect, useState } from "react"
import { ItemFakeList } from "./ItemFakeList";

export const FakeStore = () => {
    const [fake, setFake] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setFake(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <ItemFakeList fake={fake}/>
        </div>
    );
};
