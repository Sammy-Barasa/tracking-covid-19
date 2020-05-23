import React from "react";


const More=()=>{
    
const style={
divPolaroid:{
  width: "40%",
  backgroundColor: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  marginBottom: "25px"
},
divContainer:{
  textAlign: "center",
  padding: "10px 20px"
},
imgWidth:{
    width:"50%"
}

}





    return(
        <div>
            <div style={style.divPolaroid}>
                <img src={require('../images/banna7.jpg')} alt="WorldHealthOrganisation" style={style.imgWidth}/>
                <div style={style.divContainer}>
                <p><a href="https://www.who.int/">Visit World Health Organisation</a></p>
                </div>
            </div>
            <div style={style.divPolaroid}>
                <img src={require('../images/banna8.jpg')}alt="Ministry of health Kenya" style={style.imgWidth}/>
                <div style={style.divContainer}>
                <p><a href="https://www.health.go.ke/">Visit Ministry Of Health Kenya</a></p>
                </div>
            </div>
        </div>
    )
}

export default More