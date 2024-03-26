import { useState , useEffect } from "react";
// const useOnline = () => {
//   const  [isOnline , setIsOnline] = useState(true);
//   useEffect(()=>{
//     window.addEventListener("offline",()=>{
//       setIsOnline(false);
//     });
//     window.addEventListener("online",()=>{
//       setIsOnline(true);
//     });
//   },[]) ; 
  
//   return isOnline;
// };



//Above is Junior developer code  and he doesnt know that event listenerss should be cleared 
//and when it is cleared unmounting phase ;
//so senior developer code ==>


const useOnline = () => {
  const  [isOnline , setIsOnline] = useState(true);
  useEffect(()=>{
    const handleOffline = () => setIsOnline(false);
    const handleOnline = () => setIsOnline(true);


    window.addEventListener("offline",handleOffline);
    window.addEventListener("online",handleOnline);


    //cleaning window object ==>

    return () => {
      window.removeEventListener("offline",handleOffline);
      window.removeEventListener("online",handleOnline);
    }
    },[]) ; 
  
  return isOnline;
};






export default useOnline;