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
        <img src={Plus} style={{
          position: "absolute",
          height: 42.00000059763817,
          width: 49.00000069724453,
          left: "85.16%",
          right: "8.46%",
          zIndex: 3,
          top: "9.35%",
          bottom: "86.55%",
          transform: "rotate(315deg)"
        }} />
        <img src={Plus} style={{
          position: "absolute",
          left: "1.43%",
          right: "85.94%",
          zIndex: 3,
          top: "54.1%",
          bottom: "37.79%",
          width: 97,
          height: 83
        }} />
        <img src={Spring} style={{
          height: 134.2437757263751,
          width: 146.96359396595324,
          position: "absolute",
          left: "4.56%",
          right: "76.31%",
          zIndex: 3,
          top: "6.52%",
          bottom: "80.37%"
        }} />
        <img src={Spring} style={{
          height: 141.75955200195312,
          width: 117.02105712890625,
          position: "absolute",
          left: "84.77%",
          right: "0%",
          zIndex: 3,
          top: "67.95%",
          bottom: "18.21%",
          transform: "rotate(180deg) scaleX(-1)"
        }} />

        <img src={Notes} style={{
          position: "absolute",
          zIndex: 3,
          left: "1.43%",
          right: "77.73%",
          top: "85.78%",
          bottom: "2.3%",
          height: 122.0000005124631,
          width: 160.00000067208276
        }} />
        <img src={Weather} style={{
          zIndex: 3,
          position: "absolute",
          left: "41.83%",
          right: "31.21%",
          top: "81%",
          bottom: "5.29%",
          height: 179.78070474579295,
          width: 184.0108531568041

        }} />
        <img src={Gallery} style={{
          zIndex: 3,
          position: "absolute",
          left: "79.6%",
          right: "0.9%",
          top: "81.3%",
          bottom: "3.04%",
          height: 180.90681317050712,
          width: 149.75729253835055
        }} />
      </div>
    }
    else {
      return <div>

        <img src={Plus} style={{
          position: "absolute",
          left: "24.57%",
          right: "59.21%",
          top: "91.75%",
          bottom: "0.82%",
          transform: "matrix(-0.55, 0.83, -0.84, -0.55, 0, 0)",
          height: 49.55909086533332,
          width: 60.817812400857946
        }} />
        <img src={Spring} style={{
          height: 62.61610721787466,
          width: 68.47623252952742,
          position: "absolute",
          left: "7.53%",
          right: "74.21%",
          top: "5.58%",
          bottom: "85.03%",
          filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
          transform: "matrix(0.84, -0.54, 0.54, 0.84, 0, 0)"
        }} />
        <img src={Spring} style={{
          position: "absolute",
          left: "100.37%",
          right: "-17.88%",
          top: "93.42%",
          bottom: "-5.91%",
          filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))",
          transform: "matrix(-0.47, -0.88, -0.88, 0.48, 0, 0)",
          height: 83.29829419431954,
          width: 65.6422266768968
        }} />
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