
import { useRouteError } from "react-router-dom";
const Error =  () =>
{

//at the end of the day hook is a function so we can call it and get the value
//ye hme  error ke baare me dega bhut sari chize just by call 

  const err = useRouteError();

    //we can also destructure this hook
    //const err = useRouteError();
    // const {status , statusText} = err;

    return (
        <div>
            <h1>404</h1>
            <p>
               
               {err.status + " " + err.statusText}
            </p>
        </div>
    );
} ;


export default Error;

//what is a component  in react ==> component is a function which returns a jsx 
//WE WANT SOME MORE INFORMATION ABOUT THIS ERROR SO WE WILL IMPORT A HOOK  USErOUTEeRROR HOOKS START WITH USE 
