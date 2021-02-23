import './Wave.scss';
import { alts, WaveSizes } from "../../util/consts";
import { useEffect, useState } from 'react';

const Wave = ({ size }) => {
    const [source, setSource] = useState(WaveSizes[size]);

    useEffect(() => {
        setSource(WaveSizes[size]);
    });

    return (
        <div className="Wave">
            <img alt={alts.wave} src={source} className="Wave__bgImage Wave__wave" />
        </div>
    );
};

export default Wave;
