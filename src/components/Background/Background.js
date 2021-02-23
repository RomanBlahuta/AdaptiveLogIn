import './Background.scss';
import { alts, IPadMiniViewPort, IPhone8Viewport } from "../../util/consts";
import Wave from '../Wave';
import Apps from '../Apps';
import Spring from '../../assets/spring.svg';
import Plus from '../../assets/plus.svg';
import Weather from '../../assets/weather.svg';
import Gallery from '../../assets/gallery.svg';
import Notes from '../../assets/notes.svg';
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
    Background_image: {
      position: 'absolute',
      zIndex: 3
    }
}));

const Background = () => {

    const lg = useMediaQuery(`(min-width: ${IPadMiniViewPort.horizontal.width + 1}px)`);
    const md = useMediaQuery(
      `(min-width: ${IPadMiniViewPort.vertical.width + 1}px) and (max-width: ${IPadMiniViewPort.horizontal.width}px)`
    );
    const sm = useMediaQuery(
      `(min-width: ${IPhone8Viewport.width + 1}px) and (max-width: ${IPadMiniViewPort.vertical.width}px)`
    );
    const xs = useMediaQuery(`(max-width: ${IPhone8Viewport.width}px)`);

    const [size, setSize] = useState("lg");

    useEffect(() => {
      let res = "lg";
      if (md) {
        res = "md"
      }
      else if (sm) {
        res = "sm"
      }
      else if (xs) {
        res = "xs";
      }
      setSize(res);
    }, [lg, md, sm, xs]);

    const { Background_image } = useStyles();

    const renderBackground = (size) => {
        if (size === 'lg') {
            return (
                <div>
                    <img
                        alt={alts.spring}
                        className={Background_image}
                        src={Spring}
                        style={{
                            height: 200.4415283203125,
                            width: 200.40814208984375,
                            left: '45%',
                            top: '85%',
                        }}
                    />
                    <img
                        alt={alts.spring}
                        className={Background_image}
                        src={Spring}
                        style={{
                            height: 136.55841064453125,
                            width: 107.79591369628906,
                            left: '3%',
                            top: '70%',
                            transform: 'rotate(180deg) scaleX(-1)',
                        }}
                    />
                </div>
            );
        } else if (size === 'md') {
            return (
                <div>
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            height: 124.4415283203125,
                            width: 113.40814208984375,
                            left: '57%',
                            top: '90%',
                        }}
                    />
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            height: 106.55841064453125,
                            width: 77.79591369628906,
                            left: '4%',
                            top: '73%',
                            transform: 'rotate(180deg) scaleX(-1)',
                        }}
                    />
                </div>
            );
        } else if (size === 'sm') {
            return (
                <div>
                    <img
                        src={Plus}
                        alt={alts.plus}
                        className={Background_image}
                        style={{
                            height: 42.00000059763817,
                            width: 49.00000069724453,
                            left: '85.16%',
                            right: '8.46%',
                            top: '9.35%',
                            bottom: '86.55%',
                            transform: 'rotate(315deg)',
                        }}
                    />
                    <img
                        src={Plus}
                        alt={alts.plus}
                        className={Background_image}
                        style={{
                            left: '1.43%',
                            right: '85.94%',
                            top: '54.1%',
                            bottom: '37.79%',
                            width: 97,
                            height: 83,
                        }}
                    />
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            height: 134.2437757263751,
                            width: 146.96359396595324,
                            left: '4.56%',
                            right: '76.31%',
                            top: '6.52%',
                            bottom: '80.37%',
                        }}
                    />
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            height: 141.75955200195312,
                            width: 117.02105712890625,
                            left: '84.77%',
                            right: '0%',
                            top: '67.95%',
                            bottom: '18.21%',
                            transform: 'rotate(180deg) scaleX(-1)',
                        }}
                    />

                    <img
                        src={Notes}
                        alt={alts.notes}
                        className={Background_image}
                        style={{
                            left: '1.43%',
                            right: '77.73%',
                            top: '85.78%',
                            bottom: '2.3%',
                            height: 122.0000005124631,
                            width: 160.00000067208276,
                        }}
                    />
                    <img
                        src={Weather}
                        alt={alts.weather}
                        className={Background_image}
                        style={{
                            left: '41.83%',
                            right: '31.21%',
                            top: '81%',
                            bottom: '5.29%',
                            height: 179.78070474579295,
                            width: 184.0108531568041,
                        }}
                    />
                    <img
                        src={Gallery}
                        alt={alts.gallery}
                        className={Background_image}
                        style={{
                            left: '79.6%',
                            right: '0.9%',
                            top: '81.3%',
                            bottom: '3.04%',
                            height: 180.90681317050712,
                            width: 149.75729253835055,
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <img
                        src={Plus}
                        alt={alts.plus}
                        className={Background_image}
                        style={{
                            left: '24.57%',
                            right: '59.21%',
                            top: '91.75%',
                            bottom: '0.82%',
                            transform: 'matrix(-0.55, 0.83, -0.84, -0.55, 0, 0)',
                            height: 49.55909086533332,
                            width: 60.817812400857946,
                        }}
                    />
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            height: 62.61610721787466,
                            width: 68.47623252952742,
                            left: '7.53%',
                            right: '74.21%',
                            top: '5.58%',
                            bottom: '85.03%',
                            filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))',
                            transform: 'matrix(0.84, -0.54, 0.54, 0.84, 0, 0)',
                        }}
                    />
                    <img
                        src={Spring}
                        alt={alts.spring}
                        className={Background_image}
                        style={{
                            left: '100.37%',
                            right: '-17.88%',
                            top: '93.42%',
                            bottom: '-5.91%',
                            filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25))',
                            transform: 'matrix(-0.47, -0.88, -0.88, 0.48, 0, 0)',
                            height: 83.29829419431954,
                            width: 65.6422266768968,
                        }}
                    />
                </div>
            );
        }
    };

    return (
        <div className="Background">
            {renderBackground(size)}
            <Apps size={size} />
            <Wave size={size} />
        </div>
    );
};

export default Background;
