import "./App.css";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./table";
import Createuser from "./foms";
import UserInfo from "./userInfo";
import Login from "./loginpage";
import Useredit from "./Useredit";
import Teachers from "./teachers";
import { UserProvider } from "./usercontext";
import Studentregister from "./studentregister";
import Addstudent from "./addstudent";


function App() {
  return (
   <BrowserRouter>
<UserProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard></Dashboard>}/> 
                <Route path="/Dashboard/teachers" element={<Table />} />
                <Route path="/Dashboard/teachers/students/:id" element={<Table />} />
                <Route path="/Dashboard/tables/createuser" element={<Createuser/>}/>
                <Route path="/Dashboard/tables/studentregister" element={<Studentregister/>}/>
                <Route path="/Dashboard/tables/view/:id" element={<UserInfo></UserInfo>}/>
                <Route path="/Dashboard/tables/edit/:id" element={<Useredit></Useredit>}/>
                <Route path = "/Dashboard/tables/:id/addstudents" element = {<Addstudent/>}/>
                <Route path="/Dashboard/students" element={<Teachers></Teachers>}/>
              </Routes>
              </UserProvider>
      
    </BrowserRouter>
  );
}

export default App;
