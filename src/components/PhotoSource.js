import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from "./Description";
import Container from "./Container";



const PhotoSource = () => {

    const [photo, setPhoto] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=VpqSOxNKZeXnjcrbTSAWdHc88GT3PCfImAcO0rBL&date=2020-08-27`)
      .then((res) => {
        console.log("Res: ", res);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);

  return (
    <div>
       <Container photo={photo}/>
    </div>
  )
                
};

export default PhotoSource;