export const getCountries=async () =>{

    try {
      const response=async ()=> await (await fetch('https://covid19.mathdro.id/api/countries')).json()
      const {countries}= await response()
      const choices= countries.map(country=>country.name)
      return choices
    } catch (error) {
      console.error(error)
    }
  }
export const getDailyDates=async ()=>{
    try {
      const response = async ()=> await(await fetch('https://covid19.mathdro.id/api/daily')).json()
      const dailyData=await response()
      const results = dailyData.map((result)=>result.reportDate)

      return results
    } catch (error) {
      console.error(error)
    }
  }
  export const getDailyData=async ()=>{
    try {
      const response = async ()=> await(await fetch('https://covid19.mathdro.id/api/daily')).json()
      const dailyData=await response()
      const results = dailyData.map((result)=>result)
      return results
    } catch (error) {
      console.error(error)
    }
  }
  export const getDailyDataGlobal=async () =>{
    try {
     const response=async()=> await(await fetch('https://covid19.mathdro.id/api')).json()
     const dailyGlobalData=await response();
     console.log(dailyGlobalData)
     return dailyGlobalData
    } catch (error) {
      console.error(error)
    }
  
  }
  
  export const getCountryData=async (country)=>{
    try {
      const response= async()=> await( await fetch(`https://covid19.mathdro.id/api/countries/${country}`)).json()
      const countryData =await response()
      return countryData
    } catch (error) {
      console.error(error)
    }
  }