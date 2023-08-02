import React from "react";
import ReactDOM from "react-dom";

// response to be come from API

const resObj = {
    "info": {
      "id": "75280",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Nandankanan Road",
      "areaName": "Jayadev Vihar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "75280",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2300
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 00:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-nandankanan-road-jayadev-vihar-bhubaneswar-75280",
      "type": "WEBLINK"
    }
  }

const Header = () => {
    return (
        <div className="header">
            <div className="log-container">
                <img className="app-logo" src="https://gitlab.com/uploads/-/system/project/avatar/5133220/order.png" alt="logo" />
            </div>
            <div className="nav-items">
                    <ul>
                        <li className="list">Home</li>
                        <li className="list">Contact Us</li>
                        <li className="list">About Us</li>
                        <li className="list">Cart</li>
                    </ul>
            </div>
        </div>
    )
}

const ResturantCard = (props) => {
    const resData = props;
    return (
        <div className="res-card">
            <img className="res-img" src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.resData.info.cloudinaryImageId
            } alt="res-image" />
            <h3>{resData.resData.info.name}</h3>
            <h4>{resData.resData.info.cuisines.join(",")}</h4>
            <h4>{resData.resData.info.avgRatingString} Star</h4>
            <h4>{resData.resData.info.sla.deliveryTime} Minutes</h4>
            <h4>{resData.resData.info.costForTwo} For Twp</h4>
    </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-box">Search</div>
            <div className="rest-container">
                <ResturantCard resData={resObj}/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app-layout"> 
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);