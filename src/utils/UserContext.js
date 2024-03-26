//Creating a context 

import { createContext } from "react";

const UserContext = createContext({ 
    user: {
    name : "dummyu name",
    email : "dummy email",
},
   
});


export default UserContext ;

//now i wnat to use it in my header nesxt to login i want tro show name how willis this we go to header and impost use contxt for using it it is also a hook 