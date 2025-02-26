import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Display  = ()=>{
    const [data, setData] = useState([])

    const loadData =()=>{
       const api = "http://localhost:8000/author/display";
       axios.get(api)
       .then(response => {
        console.log(response.data)
        setData(response.data)
        })
    }
    const navigate = useNavigate()
    useEffect(() => {
        loadData();
    },[])
    const showForm = (id)=>{
        navigate(`/addbook/${id}`)
    }

    const ans = data.map((key,index)=>{
        return(
            <>
            <tr>
                <td>{index+1}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.city}</td>
                <td><button onClick={() =>{showForm(key._id)}}>Add book</button></td>
        
            </tr>
            </>
        )
    })
    return (
        <>
        <h1>Display Author Details</h1>

        <table>
            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Add book</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </table>
        </>
    )
}
export default Display