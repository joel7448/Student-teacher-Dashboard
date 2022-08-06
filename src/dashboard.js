import Card from './card';
import Revenuesources from './revenuesources';
import Earningsoverview from './earningsoverview';
import Projects from './projects';
import Colors from './colors';
import Illustrations from './illustrations';
import Developmentapproach from './Developmentapproach';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useContext } from 'react';
import userContext from './usercontext';

function Dashboard(){
let data = useContext(userContext);


    let dashboardcards = [{
        id : 1,
        name : "EARNINGS (MONTHLY)",
        AMOUNT: "$ 40,000",
        colour:"primary",
        symbol:"fas fa-calendar"
      
      },
      {
        id : 2,
        name : "EARNINGS (ANNUAL)",
        AMOUNT: "$215,000",
        colour:"success",
        symbol:"fas fa-dollar-sign"
      
      },{
        id : 3,
        name : "TASKS",
        AMOUNT: "50%",
        colour:"info",
        symbol:"fas fa-clipboard-list"
      
      },{
        id : 3,
        name : "PENDING REQUESTS",
        AMOUNT: "18",
        colour : "warning",
        symbol:"fas fa-comments"
      
      }]
    return (
    <>
  
      <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
         <Navbar a={`${data.username}`}></Navbar>
            <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
       
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>

                    </div>
                    <div className="row">
  {dashboardcards.map((x)=><Card data={x}></Card>)}
</div>

<div className="row">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    <Earningsoverview></Earningsoverview>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    <Revenuesources></Revenuesources>
                   
                  </div>
                </div>
              </div>
              
 <div className="row">
 <div className="col-lg-6 mb-4">
 <div className="card shadow mb-4">

            <Projects></Projects>        

 </div>
 <div className="row">
   <Colors></Colors>                         
   </div>
 </div>
 <div className="col-lg-6 mb-4">
 <Illustrations></Illustrations>
 <Developmentapproach></Developmentapproach>
</div>
    </div> 

    </div></div></div></div>

  
   

                  


  
    

                    </>

);

}

export default Dashboard