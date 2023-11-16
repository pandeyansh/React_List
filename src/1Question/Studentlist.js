function Studentslist()
{
    const students=[{id:"a",name:"Ansh"},
    {id:"b",name:"Pragya"},
    {id:"c",name:"Shubham"}
];
return(
    <div>
        <h1>List of students of my company</h1>
        <ul>
            {students.map((s)=>(
                <li k={s.id}>{s.name}</li>
            ))}
        </ul>
    </div>
);
};
export default Studentslist;