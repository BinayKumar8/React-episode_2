import {CDN_URL} from "../commonUtil/constant";

const ResturantCard = (props) => {
    const resData = props;
    const { cloudinaryImageId,name,cuisines,avgRatingString,sla,costForTwo } = resData?.resData.info;
    return (
        <div className="res-card">
            <img className="res-img" src={
                CDN_URL + cloudinaryImageId
            } alt="res-image" />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString} Star</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>{costForTwo} For Twp</h4>
    </div>
    )
}

export default ResturantCard;