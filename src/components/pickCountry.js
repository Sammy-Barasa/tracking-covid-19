import React , { useState,useEffect }from "react";
import { getCountries } from '../getApiData/'
import { InputLabel, NativeSelect, FormControl , Grid} from '@material-ui/core';



const AllCountries =({handleChange}) =>{
   const [countries,setCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setCountries(await getCountries());
          };
      
          fetchAPI();
        },[setCountries]);

    return (
        countries.length!==0?
        
            <Grid container  justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl className={'FormControl'}>
                        <InputLabel htmlFor='CountryChosen'>Country</InputLabel>
                        <NativeSelect value="" onChange={(e) => handleChange(e.target.value)}>
                            <option aria-label="None" value="" />
                            <option selected value="Global">Global</option>
                            {countries.map((country, index)=> {
                            return  <option key={index} value={country}>{country}</option>
                            })}
                        </NativeSelect>
                    </FormControl>
                </Grid>
            </Grid>
       : null
    );       
}

export default AllCountries 