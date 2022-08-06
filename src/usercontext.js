
import { useState } from "react";
import { createContext } from "react";
import { Provider } from "react";

let userContext = createContext();

export const UserProvider = ({children})=>{
   
    const[teacheredit,setteacheredit]=useState();
    const [viewteacher,setviewteacher] = useState();
return (
    <userContext.Provider value={{teacheredit,setteacheredit,viewteacher,setviewteacher}}>
        {children}
    </userContext.Provider>
);

};

export default userContext