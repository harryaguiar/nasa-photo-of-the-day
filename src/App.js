import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Photo from './components/Photo/Photo';
import moment from 'moment'
import DateInput from './components/DateInput';
import Description from './components/Description';
import styled from 'styled-components'

function App() {

  const [photo, setPhoto] = useState({})
  const [date, setDate] = useState('')
  // const [startDate, setStartDate] = useState(new Date())
  // const getPhotos = () => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=VpqSOxNKZeXnjcrbTSAWdHc88GT3PCfImAcO0rBL&date=${date}`)
  //     .then(res => setPhoto(res.data))

  //     .catch(error => console.log(error))
  // }
  // console.log(moment().format('YYYY-MM-DD'))
  const todaysDate = moment().format('YYYY-MM-DD')
  //  Running
  const getPhotosAsync = async () => {
    const userDate = (date === "" ? todaysDate : date)
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=n6yTWhdsyB5juI9ScGNd0Uv90S2M0khdcuA3h26G&date=${userDate}`)
    // 1st Time
    setPhoto(response.data)
  }

  useEffect(() => {

    getPhotosAsync()
  }, [date])




  return (
    <div>
      <Photo photo={photo} />
      <DateInput date={date} setDate={setDate} />
      <Description photo={photo} />

    </div>
  );
}

export default App;

