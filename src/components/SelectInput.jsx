import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    selectInputStyle: {
        padding: '10px',
        fontSize: '14px',
        cursor: 'pointer',
        width: '200px',
        [theme.breakpoints.up('md')]: {
            width: '350px',
            fontSize: '16px',
        },
    },
}));

const SelectInput = (props) => {
    const [country, setCountry] = useState('Global');
    const [countries, setCountries] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://api.covid19api.com/countries').then((response) => {
            setCountries(response.data);
        });
    }, []);

    const handleChange = (event) => {
        setCountry(event.target.value);
        props.onSetCountry(event.target.value);
    };
    return (
        <select
            className={classes.selectInputStyle}
            id="select"
            value={country}
            onChange={handleChange}
        >
            <option value="Global">Global</option>
            {countries &&
                countries.map((country) => (
                    <option key={country.ISO2} value={country.ISO2}>
                        {country.Country}
                    </option>
                ))}
        </select>
    );
};

export default SelectInput;
