import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/XraylabLogo.png';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import './Header.scss';

export default function Header() {

    const navigate = useNavigate();
    const [date, setDate] = useState("");

    const getTime = () => {
        let datetime = new Date().toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        setDate(datetime);
    };
    const handleLogoClick = () => {
        navigate("/");
    };
    useEffect(() => {
        getTime()
        let interval = setInterval(() => {
            getTime();
        }, 60 * 1000);
    }, []);
    return (
        <>
            <div className="Header">
                <div className="Header-Left">
                    <img className='Header-Logo' onClick={handleLogoClick} src={Logo} width="120" />
                </div>
                <div className="Header-Right">
                    <div className="Header-Right-DateAndTime">
                        <h3>{date}</h3>
                    </div>
                    <div className="Header-Right-Battery">
                        <Battery5BarIcon></Battery5BarIcon>
                    </div>
                </div>
            </div>
        </>
    )
}
