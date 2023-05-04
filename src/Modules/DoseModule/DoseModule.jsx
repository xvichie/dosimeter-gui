import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './DoseModule.scss';


export default function DistanceModule() {

    const [progress, setProgress] = useState(0);

    const [lastDistance, setLastDistance] = useState(0);

    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState({});
    const [distance, setDistance] = useState(0);
    const [dose, setDose] = useState(0);

    const [nuclide, setNuclide] = useState(0.0);
    const [miu, setMiu] = useState(0.0);
    const [thickness, setThickness] = useState(1);
    const [unit, setUnit] = useState("");

    const NUCLIDE = {
        "Cs-127": 2829.88,
        "Co-60": 11385.69,
        "I-129": 570.64
    };
    const MIU = {
        "Lead": 5.46,
        "Aluminium": 0.17,
        "Water": 0.16,
        "Paraffin": 0.026
    };

    let headers = new Headers();

    useEffect(() => {
        setNuclide(NUCLIDE[localStorage.getItem('Nuclide')]);
        setMiu(MIU[localStorage.getItem('Miu')]);
        setThickness(localStorage.getItem('Thickness'));
        setUnit(localStorage.getItem('Unit'));

        let interval = setInterval(() => {
            // fetch data
            const dataFetch = async () => {
                setLoading(true);
                const data = await (
                    await fetch(
                        "http://192.168.0.100:9999", {
                        method: 'GET',
                    })
                ).json();

                // set state when the data received
                setPosition(data);

            };

            dataFetch();
        }, 200);
    }, []);
    useEffect(() => {
        if (calculateDistance(position) != lastDistance) {
            setLastDistance(calculateDistance(position));
            setDose(calculateRadiation(nuclide, calculateDistance(position), miu, thickness));

            setLoading(false);
        }
    }, [position]);
    useEffect(() => {
        let prog = 100 * (dose / 15);
        setProgress(parseInt(prog));
    }, [dose]);

    const calculateRadiation = (nuclide_coeff, dist, miu, thickness) => {
        let dose_rate = (nuclide_coeff / Math.pow(dist, 2)) * Math.exp(-miu * thickness);
        console.log(nuclide_coeff, dist, miu, thickness);
        return dose_rate;
    };
    const calculateDistance = (pos) => {
        let dist = Math.pow(pos['x'], 2) + Math.pow(pos['y'], 2) + Math.pow(pos['z'], 2);
        //console.log(pos['x'] + ' ' + pos['y'] + " " + pos['z']);
        //setDistance(dist);
        return dist;
    }
    //console.log(dose);
    return (
        <>
            <div className='Dose-Midsection'>
                <div className='Dose-Progressbar'>
                    <ProgressBar variant="success" className='Dose-Progressbar-bar' now={progress} />
                </div>
                <div className='Dose-Readings'>
                    {!loading && <h1 className='Dose-Dose'>{dose.toFixed(4)} µSv/H</h1>}
                    {loading && <h1 className='Dose-Dose'>Loading...</h1>}
                    <h2 className='Dose-Neutrons'>{"0.000 CPM Neutrons"}</h2>
                </div>
            </div>
        </>
    )
}
