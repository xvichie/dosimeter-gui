import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Footer.scss';

export default function () {
    const navigate = useNavigate();
    const handleOptions = () => {
        navigate('/options');
    };
    return (
        <>
            <div className="Footer">
                <div className="Footer-Buttons">
                    <div className="Footer-Buttons-Left">
                        <Button className='Button-Finder' variant="contained">Finder</Button>
                    </div>
                    <div className="Footer-Buttons-Middle">
                        <Button className='Button-Identify' variant="contained">Identify</Button>
                    </div>
                    <div className="Footer-Buttons-Right">
                        <Button className='Button-Options' onClick={handleOptions} variant="contained">Options</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
