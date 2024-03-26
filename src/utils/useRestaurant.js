import { useState  , useEffect} from "react";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../constants";







const useRestaurant = (id) => {
    const [restraunt , setRestraunt] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    //use effect hook ==> to fetch the data from the api

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
         


    async function getRestaurantInfo()
    {
        try{

          const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);
          const json = await data.json();
          const restaurantData = json?.data?.cards?.map(x => x.card)?.
                                find(x => x && x.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
          setRestraunt(restaurantData);
          const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                              groupedCard?.cardGroupMap?.REGULAR?.
                              cards?.map(x => x.card?.card)?.
                              filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                              map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        
          const uniqueMenuItems = [];
          menuItemsData.forEach((item) => {

            if (!uniqueMenuItems.find(x => x.id === item.id))
            {
              uniqueMenuItems.push(item);
            }
          });
          setMenuItems(uniqueMenuItems);
         }
         catch (error) {   
          setRestraunt(null);
          console.log(error);
          setMenuItems([]);  
          }
        }












return {restraunt, menuItems};

};
export default useRestaurant;

