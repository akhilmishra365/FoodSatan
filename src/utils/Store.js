import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


// const store = configureStore({
    
//          });

// export default store;


//now this store is different and my app is different so we will need a provider to tell my app that this is the store that we are using.

//who uses our store a single component or the whole app? its our choice basically here we are giving acess to the whole app. so we will go to app.js 
//now i have to provide it here so now what is the root component of my app it is the app layout component so i will provide it here.
//what we will do to provide ? we will use a provider component from react-redux and we will wrap our app layout component with it.
// and in provider componenet we will provide a store like <Provider store={store}> <AppLayout /> </Provider>

//USKE BAD SLICE BNAYENGE CARTSLICE.JS MEIN


// cart slice bnane ke bad store.js mei import karenge and use karenge. like below 

const store = configureStore({
    reducer : {
        cart : cartSlice,
    },
});

export default store;

/**
 * Create Store 
 *      -configureStore -  rtk 
 * Provide my Store to my app
 *  -<Provider store = {store}> - import from react -redux 
 * 
 * slice 
 * * - RTK - createSlice ({
 *       name : "";
 *      initialState : {};
 *     reducers : {
 *         addItem : (state , action) => {state.items.push(action.payload)}
 *      clearCart : (state) => {state.items = []})
 * 
 * 
*      * export const { addItem , clearCart } = cartSlice.actions;
*     * export default cartSlice.reducer;
 * 
 * 
 * })
 * 
 * 
 * *Put the slice in the store
 *   -{reducer :
 *     
 *            {cart : cartSlice},
 *  }
 * }

 */

//now we want subscribing for our store so i.e hme vart ke agge kitte items hai vo dekhna hai toh hme subscribe krna hoga. uskr liye pehle header.js me jaaiye 
//and use selector and use selector to get the state from the store.
//we will use useSelector hook from react-redux to get the state from the store. ==> go to header.js and see the use there 


//now go we have to dispatch an action that is we have to add functionality of add button ki jb hm add button pe click kre toh vo item add ho jaye cart mei.
// uske liye hme dispatch krna hoga action. so we will use useDispatch hook from react-redux to dispatch an action. go to restaurant menu  and see the use there.