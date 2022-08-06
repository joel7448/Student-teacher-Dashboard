import { useParams, useSearchParams } from "react-router-dom"
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { config } from "./config";
function UserInfo(props){
let {id}= useParams();

    const [users,setdata]=useState([]);

   useEffect(()=>{
fetchdata();
   },[])

   const [teacher,setteacher] = useState("")
   const [student,setstudent] = useState([]);
  let fetchdata = async()=> {
    let data= await axios.get(`${config.api}/displayteachers/${id}`);
  setdata(data.data);
    

  }




    return ( <>
    <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
         <Navbar></Navbar>
            <div className="container-fluid"></div>

    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{teacher}</h6>
        
    </div>
    
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Teachername Name</th>
                       <th>position</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Students</th>
                      
                        
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>Teachername Name</th>
                       <th>position</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Students</th>
                        
                       
                    </tr>
                </tfoot>
                <tbody>
                <tr>
                                <td>{users.Name}</td>
                                <td>{users.Position}</td>
                                <td>{users.Salary}</td>
                                <td>{users.Age}</td>
                               <td>{users.Office}</td>
                               <td>{users.students}</td>
                                </tr>
                                </tbody>
                    </table>
                </div>
            </div>
        </div></div></div></div></>)
}

export default UserInfo