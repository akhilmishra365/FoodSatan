
import RestrauntCard from "./RestrauntCard.js";
import {useState , useEffect ,useContext} from "react"; //named variable import
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import {swiggy_api_URL} from "../constants.js"
import useOnline from "../utils/useOnline.js";
// import UserContext from "../utils/UserContext.js";



// ==> What is state  why ?
//wehat is hook  why ? ==>It is just a normal function (which has a specific functionality ) that starts with use and it is used to create state variables
//what is usestate why ? 


//why do we needthis starte variable ==> to maintain the state of the variable and to re render the component when the value of the variable changes;
//react doews not know about our variables and their updation so when we want our variables to be sync ewith ui we use state variabbles and usestate hook to create them
// for example hmare pass ek a = 10 hai aur koi component use chnage krke 11 kr de ra toh agr nrmal variablehai toh reavct ko ptani chlega so time to time re render krta rhega but agr state variable hai toh react ko pta chlta hai ki ye variable change hua hai toh re render krta hai 

// function filterData (searchText , restaurant){
//   // const filtereddata =  restaurant.filter((restaurant) => restaurant.data.name.includes(searchText));
//   //we want that ki jo search text hai vo bhi lowercase me aur jo restaurant name hai vo bhi lower case me toh we will use tolowercase function
//   searchText = searchText.toLowerCase() ;
//   const filtereddata =  restaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
//   //we also want to filter the data on the basis of cuisines
//   const filtereddata2 =  restaurant.filter((restaurant) => restaurant.data.cuisines.join(",").toLowerCase().includes(searchText));
//   //how can we merge so filter data and filterdaqta so that a user if type cuisine can also get answer
//   //we can use spread operator to merge two arrays
//   // WE WANT A FUNCTION THAT IF THAT SEARCH TEXT IS NOT PRESENT in then we should return "not found"; 

  

//   return [...filtereddata , ...filtereddata2] ;



  //what is data type of filtereddata ==> array of objects


//}
//!dekho bro abhi hmne kya kiya tha pichle lecture me jo data tha restaurant list vhi uthaya  usme se restaurant fikter kiya aur restaurants me vhi filter restauranyt pass kr diya isse ye issue aa ra  tha ki jb ek baar search krne ke baad dobasra search ni kr ra tha 
//!so usko solve krne ke liye ki  hr baar fresh data load ho we will use api calls 
//!in java script we can use fetch function to make api calls but agr usko body component ke andr use krenge toh hr baar jab body component re render hoga (on every key press)toh hr baar api call hoga toh isse performance issue aa skta hai
//!so best way to make api calls is to use useeffect hook in react 
//?The feature we are going to built is ==>as in our page loads call an api and fill the data ==>
//!better way to do this in react 
//!1)way  ==> as pages loads do api calll and render the data  total time ==> api call 500ms and rendering 200ms
//?2)way ==> when user lods thr psge show him initial page and then do api call and then update the ui total time ==> api call 500ms and rendering 200ms

//!so we will use the second way to do this BCZ IT IS A BETTER WAY AS IT INCREASES UI PERFORMANCE

//!to do this react has given us our second most important hook ==> useeffect hook

//useeffect ka kyun use hai ? ==> use effect is a hook that is used to make api calls and to do some side effects like updating the ui or updating the state of the component


// const Body = () => {
//   // let searchText = "KFC"; //local variable in java script  aur isi me react me usestate("kfc") krte hain 

//    //searchtxt is a local state variable 
//     // new way of creating state variables  //this is how you create a local state variable in react 
// //usestate function returns an array and first element of the array is the variable name (searchtxt) arraylooks like ==> [variableName , function to change the value of the variable]
//    const  [restaurants , setRestaurantList] = useState([]); //by default restraunt list rhega 
//    const [searchTxt , setSearchTxt ] = useState("");

//     /**
//  * use effect is a hook 
//  * useEffect syntax ==> useEffect(call back function , dependency array [] )
//  * 
//  * we call use effect by passing another function to it also known as call back function
//  * what is a call back function ==> a function that is passed as an argument to another function is called a call back function it is called whenever use effect wants to call it 
//  * and reacts make surre thatit calls at a specific time 
//  * whwenever it is called after every render function inside is called after every render when it will render  either sttae changes or props changes
//  * but thats a bad way to do it so we use dependency array to tell react when to call the use effect function
//  */
// /**
//  * For example ==> we want to call this use effect whenever my search text changes so we will pass search text in the dependency array
//  * and if we want to change it on every render we will pass an empty array
//  * ex ==> useEffect(() => {console.log("use effect called")},[searchtext]) //this will be called only when the searxh texyt changes
//  * now this means our use effect is dependent on search text
//  * if it is not dependent on anything we will pass an empty array nad then it will be caleed only once
//  *if we dont pass any dependency array it will not pe dependedn on anything and will be called after each reneder
//  * 
//  */
  
// //i want to make an api call as soon as my page loads and only once
//   useEffect(()=>  {
//     getRestaurants() ;
//   }, [])

//   async function getRestaurants () {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json()
//     //now we have made an api call now we will put this data instead of restaurant list; 


//     // setRestaurantList(json.data.cards[2].data.data.cards) this is bad way to do it best way is to do optional chaining 
//     setRestaurantList(json?.data?.cards[2]?.data?.data?.cards ) //this is the best way to do it
//   }

// //shimmer effect ==> whwere should we put it ==>for this we should do Conditional rendering
// //initially restaurant is empty then it should load shimmer ui if restaurant has data load actual data 

// // before we can return something we can do condiational raendering
// //using ternary opertaor 
//     return (restaurants.length === 0 ) ?<Shimmer/> :  (
//       <>
//       <div className = "search-container">
//       <input type="text" className="search-input" placeholder="Search for restraunts" value = {searchTxt}
       //onchange is a function that is called when the value of the input field is changed ye update krne ke liye hota hai 
//       onChange={(e) =>{
          // searchText = e.target.value  //Ye bhi work ni krega "e.target.value  ==> e stands for event and .target ==> ye vo data hai jo ki hmare search feild me type kiya jaa ra hai " }
          //How will it work ==> to make it work we cant use local variable let searchText = "KFC" we have to use React kind of variable ==> state variable to make it work
//bcz this statechage will re render the component and will change the value of searchtext and for maintaiining the state we have to use usestate hook

 //Every componnent maintains its state and we can put  variables in the state and Every time you have to create a local variable we use state inside react. what is state ==> 
 //suppose i have to create a local variable that maintains it state we will use state hook that can be imported from react using ==> import React, {useState} from "react" and then we can use it in our component
 //useState is a function that returns an array and first element of the array is the variable name and second element is the function that is used to change the value of the variable     
     // searchTxt = e.target.value ; we cannot directly change this for this we have to use the function  "setSearchTxt" that is returned by usestate hook
//     setSearchTxt(e.target.value) ;


    //jo bhi setSeacrch me ayega vo searchTxt me automatically update ho jayega
//   }}
         
//       />
//       <button className="search-button"
//       onClick={() => {
       //when on click need to filter the search FROM DATA  (restaurantList) aur filter krne ke baad we want to update the restaurants variable and we cant do it dorectly we have to use a state variable 
         //to mainrtain retaurnat list we use state variable


        //WHAT WE NEED TO FILTER ==> RESTAURANTs  USING SEARCH TEXT 
//         const data = filterData(searchTxt , restaurants)   // this is a function that uses search text to filter data in restaurants and whatever we will get stored in data varaible and with that data variable is used to update my restaurant 
       //update the state ==> retaurants 
//         setRestaurantList(data) ;
 

//       }}

//       >Search</button>
//       </div>
      

// {/* React uses one way data binding == > MEANS JO LET SEARCHTEXT HAI USME HMNE KFC DALA AUR VALUE = {SEARCH TEXT } IISSE YE IDHR SE TOH CHANGE HOKE SEARCH BOX ME KFC DIKHAYEG
// BUT USKO JB delete krenge backspace se toh vo ni hoga isi ko kehte hai one waay data binding isi ko tackle krneke liye hm onchange function lgayneg lgayenge ki */ }
//       <div className="restraunt-list">
//       {restaurants.map((restaurant) => {
//         return <RestrauntCard {...restaurant?.data } key = {restaurant.data.id}/>;
     
//       })}
// </div>
// </>
// ) ; 

// } ; 

// export default Body;

//WHY IS REACT FAST REACT IS FAST BECAUSE OF FASTER DOME MANUPILARTION AND VIRTUAL DOM AND DUE TO VIRTUAL DOM  USES RECONCLIATION AND DIFF ALGORITHMIT IS ABLE TO MANAGE THE STATE OF THE COMPONENTS AND RE RENDER THE COMPONENTS WHEN THE STATE OF THE COMPONENTS CHANGES




function filterData (searchText , restaurants){
  
  searchText = searchText.toLowerCase() ;
  const filtereddata =  restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText));
  
  const filtereddata2 =  restaurants.filter((restaurant) => restaurant?.info?.cuisines.join(",").toLowerCase().includes(searchText));
  
  

  return [...filtereddata , ...filtereddata2] ;
}


//!DEKHO ABHI TK BHI HMARI CODE ME DO ISSUES HAI EK TOH SEARCH FUNCTIONALITY KAAM NI KR RI 
//!AUR DUSRA VO MAP WALA CHKKR HAI 

//!SEARCH WAS NOT WORKINHG BECAUSE OUR RESTAURANT GOT FILTERED OUT AND WE WERE NOT ABLE TO GET THE ORIGINAL RESTAURANT LIST SO ISI LIYE SECOND TIME VO SEARCH HI NI HO RA THA JB FIRST TIME ME FILTER HO GYA TOH RESTAURLIST UPDATE HO GYI AB USME SIRF VHI RESTAURANT BCHE JO KI FILTER HO GYE THE
//!ORIGINAL TOH SEARCH HI NI HUA ; 

//!?Dekho ek particular state pe hme list of all restaurant vhi chahiy aur filtered bhi toh
//!toh iske liye hm do state variables maintain krenge ek original restaurant list aur ek filtered restaurant list





//never use usestate inside a hook conditions bcz it will break the rules of hooks bcz it leads to inconsistemcy
//also never writeit inside a loop bcz it will create a new state variable on every loop



//usestate is a hook that react gives us to create local state variables inside functional component ; so never use state outside your functional compnent
//can i use more than 1 useeefct in an application






const Body = () => {
  // let searchText = "KFC"; //local variable in java script  aur isi me react me usestate("kfc") krte hain
  


  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
   //the above holds the data of all the restaurants 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //  const {user , setUser} = useContext(UserContext) ;

  useEffect(()=>  {
    getRestaurants() ;
  },[]) ;

  async function getRestaurants () {
    try{
    const data = await fetch(swiggy_api_URL);
    const json = await data.json()
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

        //initially hmne set all restaurants  aur filtered resturants dono me data populate kr diya hai 
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
  }
  catch (error) {
    console.log(error);
  }
}

const searchData = (searchText, restaurants) => {
  if (searchText !== "") {
    const filteredData = filterData(searchText, restaurants);
    setFilteredRestaurants(filteredData);
    setErrorMessage("");
    if (filteredData?.length === 0) {
      setErrorMessage("No matches restaurant found");
    }
  } else {
    setErrorMessage("");
    setFilteredRestaurants(restaurants);
  }
};


const isonline = useOnline();

if(!isonline){
  return <h1 color="red"> offline, please check your internet connection</h1>
}





//just below is done known as early return 
//also known as gard clause or conditional rendering
//ye is liye kiya hai kyunki intially allrestaurants me kch hai nitoh vo neeche length wali property check krega aur vo error dega isliye hmne early return kiya hai
  if(!allRestaurants) return null; 

  //!Adding no restaurns found functionality
  






    return (allRestaurants.length === 0) ? (<Shimmer/>) :  (
      <>
      <div className = "text-center mx-auto my-auto pt-2 pb-2">
      <input type="text" className="border-4 border-sky-800 px-2 rounded-md focus:bg-green-100" placeholder="Search for restraunts" value = {searchText}
      //onchange is a function that is called when the value of the input field is changed ye update krne ke liye hota hai 
      onChange={(e) =>{

    setSearchText(e.target.value) ;
  }}
         
      />
      <button className="search-button mx-2 bg-sky-800 text-white px-2 py-1 rounded-md shadow-md"
      onClick={() => {

        //to mainrtain retaurnat list we use state variable


        //WHAT WE NEED TO FILTER ==> RESTAURANTs  USING SEARCH TEXT 
        // const data = filterData(searchTxt , allRestaurants)   
        // setFilteredRestaurantList(data) ;
        //jaise hi click ho toh search data function call ho jayega aur usme search text aur all restaurants pass hoga
        searchData(searchText, allRestaurants);
 

      }}

      >Search</button>
      {/* <input value = {user.name} onChange = {
        (e) => setUser(
          {
            name : e.target.value, 
            //email ke liye jaise value ke liye input box hai vaisa email k liy ebhi bna do SIMPLE ; 
          })
        } ></input> */}















      </div>



      {errorMessage && <div className="error-container">{errorMessage}</div>}  

       {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
       {(allRestaurants?.length === 0 ) ? (  <Shimmer/>
      )
       : (
        <div className="flex flex-wrap justify-center  ">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (

              <Link to = { "/restaurant/" + restaurant?.info?.id}  key = {restaurant?.info?.id}>  
               <RestrauntCard  {...restaurant?.info} />  </Link>
              
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;












