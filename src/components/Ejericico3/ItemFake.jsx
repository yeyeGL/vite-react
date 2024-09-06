export const ItemFake = ({ fake }) => {
    return (
        <div>
            <h4>{fake.id}</h4>
            <h5>{fake.title}</h5>
            {fake.images && fake.images.map((imageUrl, id) => (
                <img key={id} src={imageUrl}  width="200" height="150" /> 
            ))}
            <hr />
        </div>
    );
}
