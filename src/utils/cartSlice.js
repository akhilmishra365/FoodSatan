import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState : {
        items: [],
    },
    //reducer fumction to modify our cart and these reduceer is called when we dispatch an action.
    //what can be our possible actions ? add item to cart, remove item from cart, clear cart, increase quantity, decrease quantity. etc .
    // so we will write a reducer function for each of these actions. we will write what action caall for wehich reducer functionss
    //here is the mapping bwtween resucer funstion and actiom  
    reducers : {

        //add item is the action and ;() => {} is the reducer function that will be called when we dispatch the add item action.
        //how do i modify my store is this reducer function takes two argument one is the state and other is the actionpayload.
        //state is the current state of the store and action is the payload that we are dispatching.
        //action is the place where we will get items which we have to add my cart.i.e it is used when we dispatch the action.
        //action contains the payload that we are dispatching. or data we are getting from the action.
        addItem : (state , action) => {
            //now i have to add the item to the cart so i will get the item from the action.payload
            //and i will add it to the state.items array.
            state.items.push(action.payload);
            //state is the current state of the store and i will add the item to the state.items array.
            //!NOTE ==> REDUCER THE STATE DIRECTLY. WE DONT HAVE TO RETURN ANYTHING FROM THE REDUCER FUNCTION.

        },
        clearCart : (state) => {
            //here i will clear the cart so i will set the state.items to an empty array.
            state.items = [];
            //also we have not used action in the clear cart reducer function because we dont need any payload to clear the cart.

        },
        removeItem : (state , action) => {
            //here i will remove the item from the cart so i will filter the items array and remove the item with the id that i have got from the action.payload.
            state.items = state.items.filter(item => item.id !== action.payload.id);
            //here i have used action.payload.id because i am getting the id of the item that i have to remove from the action.payload.
        },
        
    }, 
});

//we have created a slice now we have to export something from it ;
//see my cpmpnernt needs to use this slice so i will export action and reducer from the slice 

//exporting the action and reducer from the slice.
//NEECHE WALE SYNTAX KO DIGEST KRLO ;

export const { addItem , clearCart , removeItem } = cartSlice.actions;

export default cartSlice.reducer;

//above is the redux recommended way howe i will export  it will combine all the reducers and export it as a single reducer.

// now i will have to put this sliec  in my store so that my store can use it.
//so i will go to store.js and import this slice and put it in the store.
//this is default exporting reducers so i will put in it learn the syntax.