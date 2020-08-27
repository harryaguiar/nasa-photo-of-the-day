import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from "./Description";
import Container from "./Container";



const PhotoSource = () => {

    const [photo, setPhoto] = useState([]);

useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=TXx7G4PsPPHF5wym46TSQWDYhLRPdv0QdTgf1N96`)
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