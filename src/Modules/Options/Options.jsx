import { Button, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React from 'react'
import { useState } from 'react'

export default function Options() {

    const [nuclide, setNuclide] = useState("Cs-127");
    const [miu, setMiu] = useState("Lead");
    const [thickness, setThickness] = useState(1);
    const [unit, setUnit] = useState("Roentgen");



    const handleNuclideChange = (e) => {
        setNuclide(e.target.value);
    };
    const handleMiuChange = (e) => {
        setMiu(e.target.value);
    };
    const handleThicknessChange = (e) => {
        setThickness(parseInt(e.target.value));
    };
    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };
    const handleSaveChanges = () => {
        localStorage.setItem("Nuclide", nuclide);
        localStorage.setItem("Miu", miu);
        localStorage.setItem("Thickness", thickness);
        localStorage.setItem("Unit", unit);
    };


    return (
        <>
            <div className="Options">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Nuclide</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={nuclide}
                        label="Nuclide"
                        onChange={handleNuclideChange}
                    >
                        <MenuItem value={"Cs-127"}>Cs-127</MenuItem>
                        <MenuItem value={"Co-60"}>Co-60</MenuItem>
                        <MenuItem value={"I-129"}>I-129</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Material</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={miu}
                        label="Material"
                        onChange={handleMiuChange}
                    >
                        <MenuItem value={"Lead"}>Lead</MenuItem>
                        <MenuItem value={"Aluminium"}>Aluminium</MenuItem>
                        <MenuItem value={"Water"}>Water</MenuItem>
                        <MenuItem value={"Paraffin"}>Paraffin</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <TextField id="outlined-basic" onChange={handleThicknessChange} label="Thickness" type='number' variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Unit</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={unit}
                        label="Unit"
                        onChange={handleUnitChange}
                    >
                        <MenuItem value={"Roentgen"}>Roentgen</MenuItem>
                        <MenuItem value={"Sievert"}>Sievert</MenuItem>
                        <MenuItem value={"Gray"}>Gray</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' onClick={handleSaveChanges} className="Options-SaveChanges">
                    Save Changes
                </Button>
            </div>
        </>
    )
}
