import React,{useEffect,useState} from 'react'
import {Line,Bar} from 'react-chartjs-2'
import {getDailyDates,getDailyData} from '../getApiData/'
import { Paper,Grid} from '@material-ui/core';


const Graphs = ({country, data: {confirmed,recovered,deaths,lastupdate}})=>{
const [dates,setDates]=useState([])
const [globaldata,setGlobaldata]=useState([])
     useEffect(()=>{
            const response=async ()=>{
                setDates( await getDailyDates())
            };
            response();
            const datatotal=async ()=>{
                setGlobaldata( await getDailyData())
            };
            datatotal();
            return
        },[setDates])
    
    try {
        console.log(confirmed.value)
        console.log(dates)
    } catch (error) {
        console.log(error)
    }
    const barChart=(
      
        confirmed?
        <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[
                    {
                        backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }
                ]
            }}
            width={600}
            height={300}
            legend={ {display: false} }
            options={{
                    maintainAspectRatio: false,
                    title:{display: true, 
                             text: `Current state in ${country}`,
                             fontSize:20},
                  }}
        />:null
    )

    const lineChart=(
        globaldata[0]?
        <Line
            data={{
                labels: dates.map((date)=>date),
                datasets:[{
                    data: globaldata.map((gd)=>gd.totalConfirmed),
                    label:"Infected",
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data:globaldata.map((gd)=>gd.deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                },],
            }}
            width={800}
            height={500}
            options={{ maintainAspectRatio: false }}
        />: null
    )
    const style={width:"75%"}
    const divStyle= {
        display: "flex",
        justifyContent: "center",
        marginTop:"20px"
      }
    
    return(
        
            <div style={divStyle}>
                <Grid container justify="center" alignItems="center">
                    <Paper elevation={6}  variant="elevation" style={style} xs={12} md={3} >
                        {country? barChart : lineChart}
                    </Paper> 
                </Grid>
            </div>
        )

}

export default Graphs