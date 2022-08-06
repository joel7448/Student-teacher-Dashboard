import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; 
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios"
import userContext from "./usercontext";
import { config } from "./config";


function Table(){

let  data=useContext(userContext);


const [users,setdata]=useState([]);

  



  

  
let fetchdata =async ()=>{ let data=await axios.get(`${config.api}/displayteachers`);

setdata(data.data)}

let handledelete=async(id)=>{

alert("Do you want to delete ?");

await axios.delete(`${config.api}/deleteteacher/${id}`)
fetchdata();
}

fetchdata();
var navigation=useNavigate();
  


let display = async(id)=>{
   navigation(`/Dashboard/tables/${id}/addstudents`);

}



    return (
        <> 
         <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
         <Navbar a={`${data.username}`}></Navbar>
            <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>

        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p>

<p><Link to="/Dashboard/tables/createuser"><button  type="button" className="btn btn-primary">Create User</button></Link></p>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Teacher Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                               
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                
                                <th>Salary</th>
                                <th>Action </th>
                            </tr>
                        </tfoot>
                        <tbody>
                          {users.map((usermap)=> <tr>
                                <td>{usermap.Name}</td>
                                <td>{usermap.Position}</td>
                                <td>{usermap.Office}</td>
                                <td>{usermap.Age}</td>
                                <td>{usermap.Salary}</td>
                                <td ><Link  to ={`/Dashboard/tables/view/${usermap._id}`}  className="btn btn-primary">View</Link> <Link to={`/Dashboard/tables/edit/${usermap._id}`} className="btn btn-info">Edit</Link> <button onClick={()=>handledelete(usermap._id)} className="btn btn-danger">Delete</button>      <button onClick={()=>{display(usermap._id)}} className="btn btn-outline-secondary">Add Student+</button>
                          
                                  </td>

                            </tr>) }
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div></div></div></div></div>
       
        </>)
    }
export default Table