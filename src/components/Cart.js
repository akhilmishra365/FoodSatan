import { useSelector } from "react-redux";
import Fooditems from "./Fooditems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";


const Cart = () => {
    const cartitems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearcart = () => {
        dispatch(clearCart());
    }

    const totalCartPrice = cartitems.reduce((acc, item) => acc + (item.price) / 100, 0);

    const formattedTotalPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
    }).format(totalCartPrice);
    
    return (
        <div className="cart flex flex-col">
            
            {cartitems.length == 0  ? <EmptyCart/> : (<div>
                <h2 className="cart-title text-3xl font-semibold  flex justify-center p-5 bg-amber-200">Your Cart</h2>
            <div className="cart-items flex flex-col">
            {/* //ye cartitems ek array hai aur usme fooditems hai toh hmne usko map krke uske hr item ko pass kr diya fooditems component me */}
                {cartitems.map((item) => (
                    <Fooditems
                        key={item.id}
                        //hm aise destructure kr skte hai isko ; 
                        // name={item.name}
                        // description={item.description}
                        // price={item.price}
                        // cloudinaryImageId={item.cloudinaryImageId}
                       //YA FIR DIRECTLY SPREAD OPERATOR KA USE KR SKTE HAI 
                        {...item}
                        //dekh basically item ek object hai aur usme name , description , price , cloudinaryImageId hai toh humne usko spread operator se direct pass kr diya  sari properties chlui gyi hai uske pass; jo use krni hai krlo ;
                        
                    />
                    
                ))}
                
            </div>
            <div className="cart-summary flex justify-between p-5">
                <h3 className="cart-total text-2xl font-semibold bg-fuchsia-200 p-1 m-2 rounded-md">Total</h3>
                <h3 className="cart-total-amount text-2xl font-semibold  m-2 p-1 rounded-md bg-teal-300">
                    {/**format this total to two round digits  */}
                

                    { /**
                     * n JavaScript, the reduce() function is used to reduce an array to a single value. It executes a provided function for each value of the array,
                     * resulting in a single output value.This function can be used for various operations like summing up values, finding the maximum or minimum value, etc. 
                     *  
                     * In Javascript, the reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
                     * reduce method is takes a  callback function here ==> (acc,item) => acc + item.price , 0 ye  jo 0 hai vo initial vaalue hia 
                     * aur ye jo acc hai vo accumulator hai sbse pehle ye zero se assign hota hai aur phir item array ke hr item.price ke sath add hota jata hai toh hme total mil gya 
                     */
                    
                    
                    
                    
                    }
                    
                    {formattedTotalPrice}
                </h3>
            </div>
            <div className="cart-checkout flex justify-center p-5">
                <button className="btn-checkout bg-orange-300 m-1 p-2 rounded-sm font-semibold">Checkout</button>
                <button className="btn-clear bg-red-300 m-1 p-2 rounded-sm font-semibold " onClick={()=>handleClearcart()}>Clear Cart</button>
                
            </div>
            </div>
            )}
            
        </div>
    );
};
   


// const Cart = () => {
//     const cartItems = useSelector((store)=> store.cart.items);

//     return (
//         <div>
//         <h1 className="font-bold">cart - {cartItems.length}</h1>
//         <button></button>
//         {cartItems.map((item) =>  <Fooditems key = {item.id} {...item}/>)}

//     </div>
//     );  
// };

 













export default Cart;