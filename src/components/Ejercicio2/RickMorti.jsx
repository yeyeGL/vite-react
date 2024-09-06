import { useEffect, useState } from "react"

export const RickMorti = () => {
    const [RickMorti, setRickMorti] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                setRickMorti(data.results);
            })

    }, []);

    return (
        <div>
            {RickMorti.length > 0 && (
                RickMorti.map((RickMorti, id) => (
                    <div key={id}>
                        <h5>{RickMorti.id}</h5>
                        <h3>{RickMorti.name}</h3>
                        <h3>{RickMorti.species}</h3>
                        <img src={RickMorti.image} alt="" />
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}
