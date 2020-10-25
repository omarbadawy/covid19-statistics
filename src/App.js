import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Logo from './images/logo.png'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/'

import Cards from './components/Cards'
import SelectInput from './components/SelectInput'
import Chart from './components/Chart'

const useStyles = makeStyles((theme) => ({
    centerLogo: {
        textAlign: 'center',
        margin: '50px 0',
    },
    image: {
        width: '250px',
        [theme.breakpoints.up('md')]: {
            width: '370px',
        },
    },
}))

const App = () => {
    const [country, setCountry] = useState('Global')
    const [allStatus, setAllStatus] = useState({})
    const [loading, setLoading] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        setLoading(true)
        if (country === 'Global') {
            axios
                .get('https://coronavirus-19-api.herokuapp.com/all')
                .then((response) => {
                    const object = {
                        cases: response.data.cases,
                        recovered: response.data.recovered,
                        deaths: response.data.deaths,
                    }
                    setAllStatus(object)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err.message)
                    setAllStatus({ cases: 0, deaths: 0, recovered: 0 })
                })
        } else {
            axios
                .get(`https://api.covid19api.com/total/dayone/country/${country}`)
                .then((response) => {
                    const object = {
                        cases: response.data[response.data.length - 1].Confirmed,
                        recovered: response.data[response.data.length - 1].Recovered,
                        deaths: response.data[response.data.length - 1].Deaths,
                    }
                    setAllStatus(object)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err.message)
                    setAllStatus({ cases: 0, deaths: 0, recovered: 0 })
                })
        }
    }, [country])

    const setCountryHandler = (country) => {
        setCountry(country)
    }
    const isEmpty = (obj) => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) return false
        }
        return true
    }

    let cards = <Cards allCases={{ cases: 0, deaths: 0, recovered: 0 }} />
    if (!isEmpty(allStatus) && !loading) {
        cards = <Cards allCases={allStatus} />
    }

    return (
        <Grid container direction="column">
            <Grid item className={classes.centerLogo}>
                <img src={Logo} className={classes.image} alt="Covid19" />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={1} md={2} />
                <Grid item xs={12} sm={10} md={8}>
                    {cards}
                </Grid>
                <Grid item xs={false} sm={1} md={2} />
            </Grid>
            <Grid item className={classes.centerLogo}>
                <SelectInput onSetCountry={setCountryHandler} />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={1} md={2} />
                <Grid item xs={12} sm={10} md={8}>
                    <Chart allCases={allStatus} />
                </Grid>
                <Grid item xs={false} sm={1} md={2} />
            </Grid>
        </Grid>
    )
}

export default App
