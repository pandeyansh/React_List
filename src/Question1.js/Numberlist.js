function Numberlist()
{
    const number=[{id:"a",number:"1"},
    {id:"b",number:"2"},
    {id:"c",number:"3"},
    {id:"d",number:"4"},
    {id:"e",number:"5"}
];
return(
    <div>
        <h1>List of Numbers from array</h1>
        <ul>
            {number.map((n)=>(
                <li k={n.id}>{n.number}</li>
            ))}
        </ul>
    </div>
);
};
export default Numberlist;