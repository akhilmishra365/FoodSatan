import { useState , useContext  } from "react";
import  {Link} from "react-router-dom";
import logo from "../Images/logo.jpeg";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import Logout from "./Logout";
const loggedinUser = () => {
   //Api call to authenticate user
    return true ; 
}

//SPA ==> single page application
//THERE ARE TWO TYPES OF ROUTING ==>
//1. CLIENT SIDE ROUTING
//2. SERVER SIDE ROUTING

//what is client side routing ==> when we change the url and the page does not refresh  it does not makes a network call to the server
//what is server side routing ==> here data comes from the server and the page refreshes a network call is made to the server ;


const Title = () => (
    <a href="/">

       {/**IMAGE SIZE HAS A ISSUEE */}
        <img alt = "logo"  className = "h-32 w-32 p-4" src  = {logo}/>
    </a>   
  );
  
  
  const HeaderComponent = () => {
    const [IsLoggedin  , setIsLoggedin] = useState(false); 
    const isOnline = useOnline();



    //using the context here ==>
    //  const {user} = useContext(UserContext); //ye jo bracket me hai vo bta ra ki is context se ana chahiye bcz our can have multiple context;
    // now i can show it anywhwere in my header after login button see login button 

    //also we can have multiple context in my app 


    //!USE SELECTOR HOOK USAGE ==> 
    //useSelector hook is used to get the state from the store.
    //it takes a function as an argument and that function takes the store as an argument and returns the state from the store.
    //directly use selceteor me store ki state aa jayegi ;
    // we want tosubscribe to store.cart.items
    const cartitems = useSelector((store) => store.cart.items);
//dekho store me multiple slices ho skti hia but i am only concderned with cart slice and specifically items so we can directly use it like this, 






    return (
        <div className = "flex justify-between px-6 bg-red-50">
            <Title/>
            <div className = "nav-items">
                <ul className="flex py-10">
                <Link to = "/"><li className="px-2">Home</li></Link>
                
                {/*ab hm chahte hai ki hm jb about us pe click kren toh vo about us page pe jaye uske liye hm anchor tag ka use kr skte hai <a href = "/about"> <li>About</li></a> 
                
                  but isse hoga kya ki pura pagfe refresh hoke reload hoga toh hm ye nhi chahte is liye hm react router ka link component ka  use krte hai
                 link is exactly like anchor tag but it does not refresh the page   instead of href it usest to*/} 
                
                <Link to = "/AboutUs"> <li className="px-2">AboutUs</li></Link>
               
                
                <Link to = "/Contact"><li className="px-2">Contact</li></Link>
                <Link to = "/cart"><li className="px-2">Cart - {cartitems.length}</li></Link>
                
                {/* <Link to ="/Quickmart"> <li className="px-2">QuickMart</li></Link> */}
                
                {/* <Link to = "/SignUp">
                    <li className="px-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
                    </li>
                </Link> */}

                {
                (IsLoggedin) ? (

                <Link to = "/Login">
                    <li className="px-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setIsLoggedin(false)}>LogIn</button>
                    </li>
                </Link>) : (


                
                //  <button className = "btn" onClick={()=>setIsLoggedin(true)}>{Logout}</button>)
                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50" 
                 onClick={
                    ()=>{setIsLoggedin(true),
                        Logout}
                    }>
                   Logout
                    </button>)
                    

                } 
                
                </ul>
  
  
            </div>
            <h1>{isOnline ? "online" : "offline"}</h1>
            
          
            {/* <span className=" p-10 font-bold text-red-700">{user.name}</span> */}

             
                
                
               
            
            
            
        </div>
    );
  };

export default HeaderComponent;