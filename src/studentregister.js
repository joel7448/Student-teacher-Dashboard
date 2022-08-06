import Navbar from "./navbar"
import Sidebar from "./sidebar"
import {useFormik} from 'formik' 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "./config";
function  Studentregister(){
let pattern = new RegExp(/^[a-zA-Z\-]+$/);
let passwordpattern = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
let navigation=useNavigate();
  var formik = useFormik({
    initialValues:{
        Name:"",
      class:"",
        Section:"",
        Age:"",
        isabled:false
            
       
    
},
validate : (values)=>{
let errors={};

if(!values.Name){
  errors.Name="please enter Name"
}
if(!values.class){
  errors.class="please enter Class"
}
if(!values.Section){
  errors.Section="please enter Section"
}
if(!values.Age){
  errors.Age="please enter Age"
}
return errors
}
,
onSubmit:async (values)=>{
  try{

   const data = await axios.post(`${config.api}/addstudent`,values)
   alert(data.data.message)
   navigation ("/Dashboard/students")
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
          <label for="exampleInputEmail1" className="form-label" a>Student Name</label>
          <input type="text" className="form-control" name="Name" onChange={formik.handleChange} value={formik.values.Name} id="exampleInputEmail1" aria-describedby="emailHelp" />
         {formik.errors.Name ? <div id="emailHelp" className="form-text text-danger">{formik.errors.Name}</div>:null}
        </div>
        <div className="col-lg-6">
          <label for="exampleInputPassword1" className="form-label">Class</label>
          <input type="text" className="form-control" name="class" onChange={formik.handleChange} value={formik.values.class} id="exampleInputPassword1"/>
          {formik.errors.class ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.class}</div>:null}
        </div>
         <div className="col-lg-6 mt-2">
          <label for="exampleInputPassword1" className="form-label">Section</label>
          <input type="text" className="form-control" name="Section" onChange={formik.handleChange} value={formik.values.Section} id="exampleInputPassword1"/>
          {formik.errors.Section ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Section}</div>:null}
        </div>
        <div className="col-lg-6 mt-2">
          <label for="exampleInputPassword1" className="form-label">Age</label>
          <input type="text" className="form-control" name="Age" onChange={formik.handleChange} value={formik.values.Age} id="exampleInputPassword1"/>
          {formik.errors.Age ? <div id="emailHelp" className="form-text text-danger"> {formik.errors.Age}</div>:null}
        </div>
       
      
        </div>
        
        <input type={'submit'} value={'submit'} className="btn btn-primary mt-4 ml-3" disabled={!formik.isValid?true:false}/>
      </form></div></div></div></div></>)
}

export default Studentregister