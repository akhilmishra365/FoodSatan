// import ReactDOM from "react-dom/client" 
// import React from "react" ;
// import HeaderComponent from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
// import About from "./components/AboutUs";
// import Error from "./components/Error";


// //Our app layout is a component
// //and react says that dont create a componenet insde a component 
// //you can call though for ex header footer are also component but are called not created inside app component


// const AppLayout = ()=> {
//     return(

//         // <React.Fragment>
//         //     <HeaderComponent />
//         //     <body />
//         //     <Footer />
//         // </React.Fragment>

//          // OR 
//         <>
//             <HeaderComponent />
//             <Body />
//             <Footer />
//         </>

//     ) ; 
// } ; 




// /**
//  * today we are creating r outs for different section of our page 
//  * for ex ==> foodvilla.com/about us 
//  * for this we will create a route for about us
//  * we will importsomething called {createBrowserRouter} from "react-router-dom"
//  * 
//  */


// //this appRouter is a component it uses createBrowserRouter to create a router aur  createBrowserRouter ke andr hm routes define krte hain 
// //i.w ye btate hai ki path kya hoga kispe click kroge toh kha jaoge ; 
// //this createBroweserRouter is a component which is used to create a router it takes some configuration which is array of objects in  which each object defines a route 

// //we need to provide this app router to our app for this wewill use router provider from react router dom

// const appRouter = createBrowserRouter([


//     {
//         //jb hm / pe ho toh appLayout dikha do element me vo jata hai jo dikhana hai 
//         path:"/",
//         element : <AppLayout/>, 


//         //INCASE OF SOME ERROR SHOW THIS 
//         errorElement : <Error />
//     },
//     {
//         //aur element me vo jata hai jo dikhana hai
//         path:"/AboutUs",
//         element : <About />

//     }

// ]) ; 



//Ab hmari dikkat kya hai ki hm about us pe gye toh sala header veader chla gya hai 
//but hme vo chahiye taki navigate back kr skennn 

import ReactDOM from "react-dom/client" 
import React , {lazy , Suspense ,useState} from "react" ;
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider  , Outlet} from "react-router-dom";

import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import Quickmart from "./components/QuickMart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart.js";
import SignUp from "./components/SignUp.js";

import Login from "./components/userIn.js";
/**
 * 1. Lazy Loading
 * 2. chunking 
 * 3. code splitting
 * 4. on demand loading
 * 5. dynamic import
 * 
 * ABOVE ALL ARE SAME THING YE HOTA HAI HMARA KI JB REACT BUNDLING KRTA HAI TO PARCEL ME SIRF EK INDEX.JS FILE BNTI HAI USI ME SARE COMPONENTS 
 * BUT AGR HMARI APP BHOT BDI HO JAYEGI TOH USI ME 1000 COMPONENT HO JAYENGE FIR VO JO PARCEL BUNDEL KREGA INSEX.JS VO BHOT BDA HO JAYEGA
 * JISSE PERFORMANCE SLOW HO JAYEGA IS LIYE HM COMPONENTS KO LAZY LOAD KRTE HAI TAAKI ARE BUNDLE SIZE KAM HO JAYE AUR PERFORMANCE ACHI HO
 * AUR JIS COMPONENT KI JARURAT HO VO VHI PE LOAD HO JAYE 
 * FOR EXAMPLE ABHI HM about us ko lazy load krenge 
 */

 // import About from "./components/AboutUs"; ==> ab ye line hta denge iski jagah 
//  react se suspense aur lazy ko import krayenge


const About = lazy(() => import("./components/AboutUs")) ;

//Suspense in React is a feature that allows you to defer rendering some components until their data dependencies are fulfilled. 
//It helps you create a smoother user experience by avoiding loading states and showing fallback UIs while waiting for data to be fetched

// what is Suspense in lazy loaading ==> jb hm kisi component ko lazy load krte hai toh uske liye suspense ka use krte hai

//why to use suspense ==> jb hm kisi component ko lazy load krte hai toh uske liye suspense ka use krte hai taki jb vo load ho rha ho toh  us time ke dauran uska kuch loading ka animation dikha ske  ; jiske liye hm fall back use krte hain ;
// suspense about copmonent ke agl bgl hoga neeche jha about hai vo dekho 
 




//!NOTE NEVEWR LAZY LOAD INSIDE A COMPONENT VRNA JB JB RENDER HOGA TB TB LOAD HOGA BUT HM CHAHTE HAIN KI JB USPE CLICK KRE TOH HI LOAD HO ONLY ONCE .


















//NESTED ROUTING ==> jb hm kisi page pe jate hai toh uske andr bhi kuch pages hote hai
const AppLayout = ()=> {

//SUPPOSE THERE IS A USER INFO AND HERE IS A LOGGED IN USER ==>
const [user , setUser] = useState({
    name : "AKHIL",
    email : "Akhilmishra1676@gmail.com",
})
//AND NOW I WANT THIS USER INFO TO BE AVAILABLE TO ME ALLOWER MY APP SO FIRST THING IS TO DO PROPS DRILLING BUT SUPPOSE THERE ARE 100 COMPONENTS THEN I HAVE TO DO PROPS DRILLING IN ALL THE COMPONENTS
//but that is a bad approach as (we want it all across app) so we will staore it in a central space not in locale storage bcz local space is a bad approach bcz it is not secure and can be accessed by anyone + it is a costly operation ;
//so we will use context api to store this user info in a central space and then we can access it anywhere in our app we know this central space as react context; 
//it is like a shared storage space where we can store our data and then we can access it anywhere in our app
//on thing is we can do a global variable but that is a bad approach and react wont trigger reconciliation for it

//NOW WE WILL CREATE A CONTEXT FOR THIS USER INFO as it is shared we will create that contrext in our utils folder fir use jha jha use krna hai usko import kr lenge;   


//!below reading the code first jo upr khakaise import kiya hai vo dekh lena
//dekho abhi tk hmare pass hr jagah dummy data aara jo kihmne hardcode kiya tha but ab hm chahte hai ki hm usme real use kre data for this we will use provider and will pass a value inside it ; 

    return(
 
       //if you want to create nested routes you should use outlet component provide by react-router-dom
       //i want my header footer always intact and middle portion changeing according to the routes  that is outlet render according to the routes
        // <>
        //     <HeaderComponent />
        //     <About /> 
        //     <Body /> 
        //     <Contact/>
        //     <Footer />
        // </>
        //!IMPORTANT all the children should go inside my outlet according to the route
        <>

       

        <Provider store = {store}> {/*ThiS STORE IS PASSED AS A PROP*/}
        {/* // basically  neeche wala this provider is overwriting  the value of user in the user context;  */}
        <UserContext.Provider value = {{
            user : user,
            setUser : setUser , 
             }}>
        {/* //ab hmne valueme jo user pass kiya vo hmara user state variable hai aur vo hr jagah chahiye isliye usko as a wraaper daal diya maan lo hme sirf ivo header me chahiye hota hai hm aisa likhte     react.provider {user}  </header <React.provider> mtlb jo pure ke liyakiya vo exact same syntax daal diya hmne header k liye sirf*/}
            {/* //dekho set user bhi isi liye pass kiya hai ki maanlo hme khi value change krne ki jarurat pde toh hm setuser use kr skte haiSEE THE BODY.JS ME INPUT FUNCTION AFTER SEARCH AND UNCOOMENT THAT YOU WILL UNDERSTANFD */}
        <HeaderComponent />
        <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>
    </>

    ) ; 
} ; 





const appRouter = createBrowserRouter([
//are in children ka mtlb ye ho gya ki jb rout / hai toh outlet me body chla JAYEGA
//JB /ABOUT HAI TOH OUTKE ME ABOUT CHLA JAYEGA...


    {   
        path:"/",
        element : <AppLayout />, 
        errorElement : <Error /> , 
        //for making we use children ==>
        //now my about us is a child of app layout
        children :[
            {
                path : "/",
                element : <Body />
            } ,

            {
                path : "/AboutUs",
                element : <Suspense fallback = {<h1>LOADING HAVE PAITENCE</h1>}> <About />  </Suspense>,

//Ab hme nested routing krni hia ki about us oe jaye toh profile page khule toh uske liye hm kya krenge hm children me ek children bnayenge 
//aur usme path define krenge ki jb /aboutus/profile pe jaye toh kya khul



//This will not work bcz children is always rendered in outlet and outlet is created in parent so we will create an outlet in 
//its parent  (About us )and then we will render children in that outlet
            children : [
                {
                    path : "profile", //here path ke aage slash ni lgayenge bcz ye already /aboutus ke andr hai 
                    //iska meaning hai parentpath/{currentpath}==> localhost:3000/aboutus/profile

                    element :<ProfileClass/>

                }]

            } ,

            {
                path : "/contact",
                element : <Contact/>
            },
            //DOING DYNAMIC ROUTING ==> FOR EXAMPLE WE WANT TO SHOW A PARTICULAR RESTRAUNT ON CLICKING ON IT AUR USKA ROUTE DYNAMICALLY CHANGE HO FOR EXAMPLE MY ROUT IS 
            //FOODVILLA.COM/RESTRAUNT/ID TOH YE ID DYANMICALLY CHANGE HOGA Hr restaurant ki alg id toh uske hisab se uska route bhi change hoga
            //agr we click on restaurant card it should take us to that restaurant page

            {
                //ye jo /:id hai yhi hai dynamic routing ka cause mainly
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            },
            {
                
                path : "/Quickmart",
                element : <Quickmart/>
            },
            {
              
                path : "/Cart",
                element : <Cart/>
            },
            { 
                path : "/SignUp",
                element : <SignUp/>
                
            },
           
        ]



    },
    { 
        path : "/Login",
        element : <Login/>
        
    },
   

]) ; 




































const root = ReactDOM.createRoot(document.getElementById("root"));
//dekho hr baar hm log app layout ko render kr re the
// root.render(<AppLayout/>);

//but ab hm jb router bna chuke hai toh hm path ke according chixon ko render krenge is liye

root.render(<RouterProvider router ={appRouter} />) ;
//NOW ABOVE LINE KA YE MTLB HAI KI JO BHI ROOT RENDER KREGA VO ACCRODING TO appRouter Render Krega;