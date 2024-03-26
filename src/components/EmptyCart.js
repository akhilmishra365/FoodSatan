

// const EmptyCart = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
//             <h2 className="text-3xl font-semibold p-5 bg-amber-200">Your Cart is Empty</h2>
//             <img src="path/to/image.jpg" alt="Empty Cart" className="w-64 h-64 mt-5" />
//             <button className="px-4 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-600">Return to Shop</button>
//         </div>
//     )
// }
import Emptycartimg from "../Images/Emptycartimg.png"
const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h2 className="text-3xl font-semibold p-5 bg-amber-200">Your Cart is Empty</h2>
            <img src={Emptycartimg} alt="Empty Cart" className=" mt-5 w-[50%] h-[50%]" />
            <button className="px-4 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={ () => {
                window.location.href = "/";
            }}>Return to Shop</button>
        </div>
    )
}

export default EmptyCart;