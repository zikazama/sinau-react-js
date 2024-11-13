const List =  ({data}) => {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )

}

export default List