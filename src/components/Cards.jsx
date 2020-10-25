import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';

const Cards = (props) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <CoffeeCard
                    title="Infected"
                    cases={props.allCases.cases}
                    color="#7F7FFF"
                    description={`Number of infected causes by COVID-19`}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard
                    title="Recovered"
                    cases={props.allCases.recovered}
                    color="#7FFF7F"
                    description={`Number of recoverd causes from COVID-19`}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeeCard
                    title="Deaths"
                    cases={props.allCases.deaths}
                    color="#FF7F7F"
                    description={`Number of deaths causes by COVID-19`}
                />
            </Grid>
        </Grid>
    );
};

export default Cards;
