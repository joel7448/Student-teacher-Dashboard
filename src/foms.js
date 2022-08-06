import Navbar from "./navbar"
import Sidebar from "./sidebar"
import {useFormik} from 'formik' 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "./config";
function Createuser(){
let pattern = new RegExp(/^[a-zA-Z\-]+$/);
let passwordpattern = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
let navigation=useNavigate();
  var formik = useFormik({
    initialValues:{
        Name:"",
        Position:"",
        Salary:"",
        Age:"",
        Office:"",
       
       
    
},
validate : (values)=>{
let errors={};

if(!values.Position){
  errors.position="please enter position"
}
if(!values.Office){
  errors.office="please enter office"
}
if(!values.Salary){
  errors.salary="please enter salary"
}
if(!values.Age){
  errors.Age="please enter age"
}



if(values.Age<18  ){
  errors.Age="You shoud be above 18";
}
return errors
}
,
onSubmit:async (values)=>{
  try{

   const data = await axios.post(`${config.api}/addteacher`,values)
   alert(data.data.message)
   navigation ("/Dashboard/teachers")
}
catch(error){
console.log(error);
}


}

})





    return (
    <>
      <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
         <Navbar></Navbar>
            <div className="container-fluid">
    <form onSubmit={formik.handleSubmit}>
     
<div className="row">
<div className="col-lg-6">
          <label for="exampleInputEmail1" className="form-label" a>UserName</label>
          <input type="text" className="form-control" name="Name" onChange={formik.handleChange} value={formik.values.Name} id="exampleInputEmail1" aria-describedby="emailHelp" />
         {formik.errors.Name ? <div id="emailHelp" className="form-text text-danger">{formik.errors.Name}</div>:null}
        </div>
        <div className="col-lg-6">
          <label for="exampleInputPassword1" className="form-label">Position</label>
          <input type="text" className="form-control" name="Position" onChange={formik.handleChange} value={formik.values.Position} id="exampleInputPassword1"/>
          {formik.errors.Position ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Position}</div>:null}
        </div>
         <div className="col-lg-6 mt-2">
          <label for="exampleInputPassword1" className="form-label">Office</label>
          <input type="text" className="form-control" name="Office" onChange={formik.handleChange} value={formik.values.Office} id="exampleInputPassword1"/>
          {formik.errors.Office ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Office}</div>:null}
        </div>
        <div className="col-lg-6 mt-2">
          <label for="exampleInputPassword1" className="form-label">Age</label>
          <input type="text" className="form-control" name="Age" onChange={formik.handleChange} value={formik.values.Age} id="exampleInputPassword1"/>
          {formik.errors.Age ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Age}</div>:null}
        </div>
       
        <div className="col-lg-6 mt-2">
          <label for="exampleInputPassword1" className="form-label">Salary</label>
          <input type="text" className="form-control" name="Salary" onChange={formik.handleChange} value={formik.values.Salary} id="exampleInputPassword1"/>
          {formik.errors.Salary ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Salary}</div>:null}
        </div>
        </div>
        
        <input type={'submit'} value={'submit'} className="btn btn-primary mt-4 ml-3" disabled={!formik.isValid?true:false}/>
      </form></div></div></div></div></>)
}

export default Createuser