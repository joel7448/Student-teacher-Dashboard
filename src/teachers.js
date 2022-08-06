import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Link, useNavigate, useParams } from "react-router-dom";

import userContext from "./usercontext";
import { useContext } from "react";
import { config } from "./config";
function Teachers (){
    let data = useContext(userContext); 


    const [teachers,setteachers]=useState([]);
    useEffect(()=>{



        fetchdata();
     
        },[])
     let fetchdata =async ()=>{ let data=await axios.get(`${config.api}/displaystudents`);
      
     setteachers(data.data)
      
    
    }
     
     let handledelete=async(id)=>{
     
     alert("Do you want to delete ?");
     
     await axios.delete(`${config.api}/deletestudent/${id}`)
     fetchdata();
     }
     let nav = useNavigate();
         
let [student,setstudent]=useState([]);
let students=[];
let classname=[];




return (
    <> 
         <div id="wrapper">
      <Sidebar ></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
         <Navbar a={`${data.username}`}></Navbar>
            <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>

        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p>

<p><Link to="/Dashboard/tables/studentregister"><button  type="button" className="btn btn-primary">Create User</button></Link></p>

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Age</th>
                                 <th>Action</th>
                               
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Age</th>
                              
                             
                               
                            </tr>
                        </tfoot>
                        <tbody>
                          {teachers.map((usermap)=> <tr>
                                <td>{usermap.Name}</td>
                                <td>{usermap.class}</td>
                                <td>{usermap.Section}</td>
                                <td>{usermap.Age}</td>
                             
                                <td><button className="btn btn-danger"  onClick={()=>handledelete(usermap._id)}>Delete</button></td>
                              
                            </tr>) }
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div></div></div></div></div>
       
        </>)
}

export default Teachers