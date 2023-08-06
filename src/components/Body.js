import ResturantCard from "./ResturantCard";
import resList from "../commonUtil/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="search-box">Search</div>
            <div className="rest-container">
              {
                resList.map(restrurant => <ResturantCard key={restrurant.info.id} resData = {restrurant}/>)
              }
            </div>
        </div>
    )
}

export default Body;