function Arrayofobject()
{
    const details=[{id:1, Name:"Name:Ansh", Age:"Age:22", Email:"Email id:pandeyansh798@gmail.com"},
    {id:2, Name:"Name:Pragya", Age:"Age:20", Email:"Email id:pragyamishra0803@gmail.com"},
    {id:3, Name:"Name:Shubham", Age:"Age:22", Email:"Email id:shubhamgupta1889@gmail.com"}
];
return(
    <div>
        <h1>Details of Jobseekers</h1>
        <ul>
            {details.map((d)=>(
                <li k={d.id} > {d.Name} {d.Age} {d.Email} </li>
            ))}
        </ul>
    </div>
);
};
export default Arrayofobject;