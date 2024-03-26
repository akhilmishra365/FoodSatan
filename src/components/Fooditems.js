import {ITEM_IMG_CDN_URL} from "../constants";

const fooditems = ({name , description , price ,imageId }) => {
   return (
         <div className="menu-item flex  justify-between  p-3 border-b-[0.5px] border-black border-solid  bg-pink-50">
              <div className="menu-item-details flex flex-col self-start w-1/2">
                <h3 className="item-title font-serif font-medium ">{name}</h3>
                <p className="item-desc mt-[14px] w-2/5 text-black text-xs">{description || "Restaurant Specials "}</p>
                <p className="item-cost mt-1  text-gray-900 w-2/5 text-sm font-bold">
                    <span className="bg-green-500">
                    {price > 0
                          ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format((price / 100))
                          : " "}
                    </span>
                </p>
              </div>
              <div className="menu-img-wrapper flex flex-col justify-center items-end w-52 overflow-hidden">
                {imageId && (
                     <img
                          className="menu-item-img h-24 w-24 rounded-md"
                          src={ITEM_IMG_CDN_URL + imageId}
                          alt={name}
                     />
                )}
                
              </div>
         </div>



            // <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            //     <img src = {ITEM_IMG_CDN_URL + imageId} alt = "food-item" className = "w-56 h-32"/>
            //     <h3 className="font-bold text-lg">{name}</h3>
            //     <p className="text-sm">{description}</p>
            //     <p className="text-sm font-bold">{Number(price/100)}</p>







            // </div>


   );
};

export default fooditems;