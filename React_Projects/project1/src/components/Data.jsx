


let Data = () =>{

    let students = ["Shafeeq", "John", "James", "Peter", "Ryan"]

    return(
        <>
        <h2>List of Students</h2>
        {students.map((name) =>
        <div>
            {name}
        </div>    
    )}
        </>
    )
}
export default Data