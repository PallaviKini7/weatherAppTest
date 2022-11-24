import "./footer.css";
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";


import Switch from "react-switch";
import { addFavalue, removeValue, showToggleIcon } from "../../redux/weatherSlice";



const HomeTab = (props) => {
  const [favHeart, setFavHeart] = useState(false);
  const Data = useSelector((state) => state.weatherData.value);
  const favData = useSelector((state) => state.weatherData.favalues)

  const homeData = useSelector((state) => state.weatherData.showeather)
  const showIcon = useSelector((state) => state.weatherData.icon)


  const [yellow, setYellow] = useState(false)
  
  console.log("homeData", homeData)


  console.log("data", Data);

  const dispatch = useDispatch();

  let icon = ''
  let homeicon = ''

  const [checked, setChecked] = useState(false);

  const previousData = JSON.parse(localStorage.getItem("fav") || "[]");

  const addFav = () => {
    const arr = [];
    previousData.map((user, i) => {

      if (user.location.woeid === Data.location.woeid) {
        arr.push("exists");
      }
    });

    if (arr.includes("exists")) {
      setFavHeart(true)
     
    } else {
      
      previousData.push(Data);
      dispatch(addFavalue(previousData))
      localStorage.setItem("fav", JSON.stringify(previousData));
      setFavHeart(!favHeart);
    }
  };
  const whiteHeart = () => {
    setFavHeart(true)
    dispatch(addFavalue(Data))
   
    localStorage.setItem("toggleIcon", favHeart)
 
  }

  const yellowHeart = () => {
    setFavHeart(false)
    dispatch(removeValue(Data))
    dispatch(toggleIcon(favHeart))
    dispatch(showToggleIcon(false))
    localStorage.setItem("toggleIcon", favHeart)
  }

  const handleChange = () => {
    setChecked(!checked);
  };

  const onDelete = () => { };

  const toggleIcon = JSON.parse(localStorage.getItem("toggleIcon"));
  console.log(toggleIcon);


  const result = useSelector((state) => state.weatherData.favalues)
  console.log("favData", result);




  switch (
  Data &&
  Data.current_observation && Data.current_observation.condition &&
  Data.current_observation.condition.text
  ) {
    case "Haze":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Mostly Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Sunny":
      icon = "icon_mostly_sunny_small.png";
      break;
    case "Clear":
      icon = "icon_mostly_sunny_small.png";
      break;

    case "Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Partly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;
    case "Mostly Cloudy":
      icon = "icon_mostly_cloudy_small.png";
      break;

    case "Rainy":
      icon = "icon_rain_small.png";
      break;
    case "Sleet":
      icon = "icon_rain_small.png";
      break;
    case " Showers":
      icon = "icon_rain_small.png";
      break;
    default:
      icon = "icon_rain_small.png";
      break;
  }

  switch (
  homeData &&
  homeData.current_observation && homeData.current_observation.condition &&
  homeData.current_observation.condition.text
  ) {
    case "Haze":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Mostly Sunny":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Sunny":
      homeicon = "icon_mostly_sunny_small.png";
      break;
    case "Clear":
      homeicon = "icon_mostly_sunny_small.png";
      break;

    case "Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;
    case "Partly Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;
    case "Mostly Cloudy":
      homeicon = "icon_mostly_cloudy_small.png";
      break;

    case "Rainy":
      homeicon = "icon_rain_small.png";
      break;
    case "Sleet":
      homeicon = "icon_rain_small.png";
      break;
    case " Showers":
      homeicon = "icon_rain_small.png";
      break;
    default:
      homeicon = "icon_rain_small.png";
      break;
  }

  console.log(icon);

  return (
    
    <div className="weatherContainer">
      <div className="homeTabContainer">
        <div className="dateMobile">{props.value}</div>
        <div className="locationName">
      
          {
            homeData ? homeData && homeData.location && homeData.location.city :
              Data && Data.location && Data.location.city
          },
          {" "}
          {
            homeData ? homeData && homeData.location && homeData.location.country :
              Data && Data.location && Data.location.country
          }

        </div>
        {
          !favHeart ? (
            <div
              className="addFav"
              onClick={() => {
                whiteHeart();
              }}
            >
              <div className="favImg">
                <img
                  src={require("../../assets/icon_favourite.png")}
                  alt="img"
                  className="heartImg"
                />
              </div>
              <div className="favText">Add to favourite</div>
            </div>
          ) : (
            <div
              className="addFav"
              onClick={() => {
                yellowHeart()
             
              }}
            >
              <div className="favImg">
                <img
                  src={require("../../assets/icon_favourite_Active.png")}
                  alt="img"
                  className="heartImg"
                />
              </div>
              <div className="favText textColor" onClick={onDelete}>
                Added to favourite
              </div>
            </div>
          )
        }

        <div className="weatherDisplay">
          <div className="weatherImg"
          >
            {
              homeData ?
                homeicon ?
                  <img
                    src={require(`../../assets/${homeicon}`)}
                    alt=""
                    className="sunnyImg"
                  /> :
                  <img
                    src={require(`../../assets/Cloudy.png`)}
                    alt=""
                    className="sunnyImg"
                  />
                :
                icon ?
                  <img
                    src={require(`../../assets/${icon}`)}
                    alt=""
                    className="sunnyImg"
                  /> :
                  <img
                    src={require(`../../assets/Cloudy.png`)}
                    alt=""
                    className="sunnyImg"
                  />
            }
          </div>
          <div className="weatherDegree">
            <div>
              {checked
                ?
              
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature
                :
                (
                  homeData ?
                    (
                      homeData.current_observation &&
                      homeData.current_observation.condition &&
                      homeData.current_observation.condition.temperature - 32) *
                    (5 / 9)
                    :
                    (
                      Data.current_observation &&
                      Data.current_observation.condition &&
                      Data.current_observation.condition.temperature - 32) *
                    (5 / 9)
                ).toFixed(0)}{" "}

           
            </div>
            <div className="switchTempature">
              <Switch
                borderRadius={4}
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
              />
            </div>
          </div>
          <div className="weatherDetail">
            {Data.current_observation &&
              Data.current_observation.condition &&
              Data.current_observation.condition.text}
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_temperature_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Min-Max</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature - 3
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature - 3
              }
              &deg;-{" "}
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.condition &&
                  homeData.current_observation.condition.temperature + 3
                  :
                  Data.current_observation &&
                  Data.current_observation.condition &&
                  Data.current_observation.condition.temperature + 3
              }
              &deg;
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_precipitation_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Precipitation</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.atmosphere &&
                  homeData.current_observation.atmosphere.pressure
                  :
                  Data.current_observation &&
                  Data.current_observation.atmosphere &&
                  Data.current_observation.atmosphere.pressure
              }
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_humidity_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Humidity</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.atmosphere &&
                  homeData.current_observation.atmosphere.humidity
                  :
                  Data.current_observation &&
                  Data.current_observation.atmosphere &&
                  Data.current_observation.atmosphere.humidity
              }
              %
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_wind_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Wind</div>
            <div className="minMaxDegree">
              {" "}
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.wind &&
                  homeData.current_observation.wind.speed
                  :
                  Data.current_observation &&
                  Data.current_observation.wind &&
                  Data.current_observation.wind.speed
              }{" "}
              mph
            </div>
          </div>
        </div>

        <div className="footerItem">
          <div className="footerImg">
            <img
              src={require("../../assets/icon_visibility_info.png")}
              alt=""
              className="footerImage"
            />
          </div>

          <div className="minMax">
            <div className="minMaxText">Visibility</div>
            <div className="minMaxDegree">
              {
                homeData ?
                  homeData.current_observation &&
                  homeData.current_observation.atmosphere &&
                  homeData.current_observation.atmosphere.visibility
                  :
                  Data.current_observation &&
                  Data.current_observation.atmosphere &&
                  Data.current_observation.atmosphere.visibility
              }{" "}
              mph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
