import "./Background.scss";
import Wave from "../Wave";
import Apps from "../Apps";
import Spring from "../../assets/spring.svg";
import Plus from "../../assets/plus.svg";
import Weather from "../../assets/weather.svg"
import Gallery from "../../assets/gallery.svg"
import Notes from "../../assets/notes.svg"

const Background = ({ size }) => {

  const renderBackground = (size) => {
    if (size === "lg") {
      return <div>
        <img src={Spring} style={{
          height: 200.4415283203125,
          width: 200.40814208984375,
          position: "absolute",
          zIndex: 3,
          left: "45%",
          top: "85%"
        }} />
        <img src={Spring} style={{
          height: 136.55841064453125,
          width: 107.79591369628906,
          left: "3%",
          zIndex: 3,
          top: "70%",
          position: "absolute",
          transform: "rotate(180deg) scaleX(-1)"
        }} />
      </div>
    }
    else if (size === "md") {
      return <div>
        <img src={Spring} style={{
          height: 124.4415283203125,
          width: 113.40814208984375,
          position: "absolute",
          zIndex: 3,
          left: "57%",
          top: "90%"
        }} />
        <img src={Spring} style={{
          height: 106.55841064453125,
          width: 77.79591369628906,
          left: "4%",
          zIndex: 3,
          top: "73%",
          position: "absolute",
          transform: "rotate(180deg) scaleX(-1)"
        }} />
      </div>
    }
    else if (size === "sm") {
      return <div>
        <img src={Plus} style={{}} />
        <img src={Plus} style={{}} />
        <img src={Spring} style={{}} />
        <img src={Spring} style={{}} />

        <img src={Notes} style={{}} />
        <img src={Weather} style={{}} />
        <img src={Gallery} style={{}} />
      </div>
    }
    else {
      return <div>

        <img src={Plus} style={{}} />
        <img src={Spring} style={{}} />
        <img src={Spring} style={{}} />
      </div>
    }
  }

  return <div className="Background">
    {renderBackground(size)}

    <Apps size={size} />
    <Wave size={size} />
  </div>
}

export default Background;