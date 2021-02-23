import './Apps.scss';
import { alts, AppSizes } from "../../util/consts";
import { useEffect, useState } from 'react';

const Apps = ({ size }) => {
    const [source, setSource] = useState(AppSizes[size]);

    useEffect(() => {
        setSource(AppSizes[size]);
    });

    return (
        <div className="Apps">
            <img alt={alts.apps} src={source} className="Apps__bgImage Apps__apps" />
        </div>
    );
};

export default Apps;
