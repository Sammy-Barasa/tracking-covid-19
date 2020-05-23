import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Typography,Card,CardContent,Grid } from '@material-ui/core';
import CountUp from 'react-countup'; 



const Paperdetail=({data: {confirmed,recovered, deaths,lastUpdate}})=>{
  const style={
    recovered:{
      width:"80%",
      borderBottom:"2px solid rgba(0, 255, 0, 0.5)",
      borderTop:"2px solid rgba(0, 255, 0, 0.5)"
    },
    infected:{
      width:"80%",
      borderBottom:"2px solid rgba(0, 0, 255, 0.5)",
      borderTop:"2px solid rgba(0, 0, 255, 0.5)"
    },
    deaths:{
      width:"80%",
      borderBottom:"2px solid rgba(255, 0, 0, 0.5)",
      borderTop:"2px solid rgba(255, 0, 0, 0.5)"
    }
  
}
  return (
      confirmed?
        <Grid container alignItems="center" spacing={1} justify="center" direction="row"> 
              <Grid  item xs={9} md={3}>
                <Paper elevation={6}  variant="outlined"   component={Card} style={style.infected}>
                    <CardContent>
                        <Typography color="textSecondary">
                          Infected
                        </Typography>
                        <Typography variant="h5" component  ="h2">
                        <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={3}
                        />
                        </Typography>
                        <Typography color="textSecondary">
                          Lastupdate: 
                        </Typography>
                        <Typography color="textPrimary"> 
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Paper>
              </Grid>
              <Grid  item xs={9} md={3}>
                <Paper elevation={6}  variant="outlined"   component={Card} style={style.recovered}>
                          <CardContent>
                              <Typography color="textSecondary" >
                                  Recovered
                              </Typography>
                              <Typography variant="h5" component="h2">
                              <CountUp
                              start={0}
                              end={recovered.value}
                              duration={3}
                              />
                              </Typography>
                              <Typography color="textSecondary">
                                  Lastupdate: 
                              </Typography>
                              <Typography color="textPrimary">
                              {new Date(lastUpdate).toDateString()}
                              </Typography>
                          </CardContent>
                      </Paper>

              </Grid>
              <Grid  item xs={9} md={3}>
                    <Paper elevation={6}  variant="outlined"   component={Card} style={style.deaths}>
                              <CardContent>
                                  <Typography color="textSecondary" >
                                      Deaths
                                  </Typography>
                                  <Typography variant="h5"  component="h2" >
                                  <CountUp
                                  start={0}
                                  end={deaths.value}
                                  duration={3}
                                  />
                                  </Typography>
                                  <Typography   color="textSecondary">
                                  Lastupdate: 
                                  </Typography>
                                  <Typography color="textPrimary">
                                  {new Date(lastUpdate).toDateString()}
                                  </Typography>
                              </CardContent>
                    </Paper>

              </Grid>
          
            </Grid>:null
  );
}
export default Paperdetail
