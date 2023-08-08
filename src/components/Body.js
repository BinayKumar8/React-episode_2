import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimer from "./Shimer";


const Body = () => {
  // React Hook
  const [listOfResturants,setListOfResturants] = useState([]); 

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    const API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2841955&lng=85.8204646&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const data = await fetch(API);
    const jsonResponse = await data.json();
    //console.log(jsonResponse.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setListOfResturants(jsonResponse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // Conditional Rendering
  // if(listOfResturants.length === 0) {
  //    return <Shimer />
  // }


    return listOfResturants.length === 0 ? <Shimer /> : (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
              onClick={() => {
                const filteredList = listOfResturants.filter((list) => list.info.avgRatingString > 4);
                setListOfResturants(filteredList);
              }}>
                  Top Rated Restaurant
              </button>
              <button className="clear-btn">
                  Clear
              </button>
            </div>
            <div className="rest-container">
              {
                listOfResturants.map(restrurant => <ResturantCard key={restrurant.info.id} resData = {restrurant}/>)
              }
            </div>
        </div>
    )
}

export default Body;