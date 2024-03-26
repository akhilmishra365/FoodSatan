//in functional component we dont use this keyword to access props we can directly access it 

import React , {useState , useEffect} from "react" ;
import { useFetcher } from "react-router-dom";

const Profile = (props) =>{


    //state in functional component 

    const [count , setCount] = useState(0) ; //default value we put 0 in the useState
    const [count2 , setCount2] = useState(0) ;  //another state variable can be created easily
    //useeffect is called after render it  is a great place to do api call
    //we first render default value and then we update ;
    
    useEffect(() => {
        //api call done
        const timer  = setInterval(() => {
            console.log("hello") ;``
        } , 1000) ;


        //ab iski cleanup kaise krenge
        //to clean up we will use return

        return () => {
            clearInterval(timer) ;
            console.log("clean up done") ;
        }








        console.log("api call done") ; 
    }, [count]) ; //ye jo hmne  dpenedency array de daali hai ab react track krenga change aur update krega


    
    
    return (
        <div>
            <h1>MADE WITH HUNGER BY AKHIL MISHRA</h1>
            <h2> name is {props.name}</h2>
            <h3>{count} , {count2}</h3>

            {/* //setCount is a function which is used to update the state variable
            //it is a setstate variable like before  */}
            <button onClick ={()=> {
                 setCount(count+1)  ; 
                 setCount2(count2+1)  ; 
            }
        }>Increment</button>
                
                

                
        </div>
    );

};


export default Profile ;

