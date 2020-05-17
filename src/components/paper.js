import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,Card,CardContent,Grid } from '@material-ui/core';
import CountUp from 'react-countup'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: "space-around",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Paperdetail=({data: {confirmed,recovered, deaths,lastUpdate}})=>{
  const classes = useStyles();
  return (
      confirmed?
      <div>
        <Grid container spacing={4} justify="center">
          <div className={classes.root}>
                    <Paper elevation={3}  variant="outlined"   component={Card}>
                        <CardContent>
                            <Typography >
                                Infected
                            </Typography>
                            <Typography >
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={3}
                            />
                            </Typography>
                            <Typography>
                            Lastupdate: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
                    </Paper>
                    <Paper elevation={3}  variant="outlined"   component={Card}>
                        <CardContent>
                            <Typography >
                                Recovered
                            </Typography>
                            <Typography >
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={3}
                            />
                            </Typography>
                            <Typography>
                            Lastupdate: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
                    </Paper>
                    <Paper elevation={3}  variant="outlined"   component={Card}>
                        <CardContent>
                            <Typography >
                                Deaths
                            </Typography>
                            <Typography >
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={3}
                            />
                            </Typography>
                            <Typography>
                            Lastupdate: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
                    </Paper>
                </div>
            </Grid>
          </div>:null
  );
}
export default Paperdetail
