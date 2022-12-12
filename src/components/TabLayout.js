import './TabLayout.css';
import Page from './Page';
import React, { useState } from 'react';

const photos = {
    "Leonardo Dicaprio":"https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
    "Joaquin Phoenix":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Joaquin_Phoenix-1325.jpg_%28cropped%29.jpg/800px-Joaquin_Phoenix-1325.jpg_%28cropped%29.jpg",
    "Shah Rukh Khan":"https://images.indianexpress.com/2022/10/srk-old-day-on-his-birthday-1200.jpg"
}

function TabLayout(props){
 const [imageSrc,setImageSrc] = useState("https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg")
 const [buttonCliked,setButtonClicked] = useState("LeonardoDicaprio")
 
    return (
        <div className="tabLayout">

        
        <div className="menuBar">

        
        <button onClick={onClickHandler} value="Leonardo Dicaprio" id="LeonardoDicaprio" >Leonardo Dicaprio</button>
        <button onClick={onClickHandler} value="Joaquin Phoenix" id="JoaquinPhoenix">Joaquin Phoenix</button>
        <button onClick={onClickHandler} value="Shah Rukh Khan" id="ShahRukhKhan">Shah Rukh Khan</button>

        

    </div>

  <center>  <Page imageSrc={imageSrc}/> </center>

    </div>
    
    )

    function onClickHandler(event){
        console.log(photos[event.target.value])
        setImageSrc(photos[event.target.value])
        document.getElementById(buttonCliked).style.color="Black"
        setButtonClicked(event.target.id)
        event.target.style.color="Blue"
    
    }
   
}






export default TabLayout;