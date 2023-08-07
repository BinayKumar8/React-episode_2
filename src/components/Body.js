import ResturantCard from "./ResturantCard";
import resList from "../commonUtil/mockData";
import { useState } from "react";


const Body = () => {
  // React Hook
  const [listOfResturants,setListOfResturants] = useState(resList); 

    return (
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