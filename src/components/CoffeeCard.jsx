import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        borderBottomWidth: '10px',
        borderBottomStyle: 'solid',
        minHeight: '200px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CoffeeCard = React.memo((props) => {
    const classes = useStyles();
    const { title, cases, description, color } = props;

    let countup = <CountUp end={parseInt(cases)} />;

    return (
        <Card className={classes.root} style={{ borderColor: color }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {countup}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
});

export default CoffeeCard;
