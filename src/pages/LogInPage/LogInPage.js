import './LogInPage.scss';
import LogInForm from '../../components/LogInForm';
import { useEffect, useState } from 'react';
import { IPadMiniViewPort, IPhone8Viewport } from '../../util/consts';
import Background from '../../components/Background';

function LogInPage() {
    const [size, setSize] = useState(0);
    const [sizeName, setSizeName] = useState('lg');

    const resizeListener = () => {
        console.log(window.innerWidth, window.innerHeight);
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, []);

    useEffect(() => {
        let res = 'lg';
        if (window.innerWidth <= IPadMiniViewPort.horizontal.width) {
            res = 'md';
        }
        if (window.innerWidth <= IPadMiniViewPort.vertical.width) {
            res = 'sm';
        }
        if (window.innerWidth <= IPhone8Viewport.width) {
            res = 'xs';
        }
        setSizeName(res);
    }, [size]);

    return (
        <div className="LogInPage">
            <div className="LogInPage__formContainer">
                <LogInForm />
            </div>

            <Background size={sizeName} />
        </div>
    );
}

export default LogInPage;
