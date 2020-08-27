import React, { useState, useEffect, Component } from "react";
import moment from "moment";
import "./App.css";
import PhotoSource from "./components/PhotoSource"
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";



  function App(){
  // render()
    return (
      <div className="App">
        <h1>NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!</h1>
        <PhotoSource />
        {/* <DateInput />
        <Photo /> */}
      </div>
    );
  }

  // class App extends Component {
  //   state = {
  //     date: moment() - 1,
  //     photo: ""
  //   };


  //   formatDate = moment => {
  //     let year = moment.year();
  //     let month = moment.month() + 1;
  //     let day = moment.date();
  //     return `${year}-${month}-${day}`;
  //     }


    
  //   componentDidMount() {
  //     fetch(`https://api.nasa.gov/planetary/apod?api_key=TXx7G4PsPPHF5wym46TSQWDYhLRPdv0QdTgf1N96`)
  //       .then(response => response.json())
  //       .then(json => this.setState({ photo: json }));
  //   }

    
  //   getPhoto = date => {
  //     fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=TXx7G4PsPPHF5wym46TSQWDYhLRPdv0QdTgf1N96`)
  //       .then(response => response.json())
  //       .then(photoData => this.setState({ photo: photoData }));
  //   };

  //   changeDate = dateFromInput => {
  //     this.setState({ date: dateFromInput });
  //     this.getPhoto(this.formatDate(dateFromInput));
  //   };


  //   render() {
  //     return (
  //       <div>
  //         <h1>NASA's Astronomy Picture of the Day</h1>
  //         <DateInput
  //         changeDate={this.changeDate}
  //         date={this.state.date}
  //       />
  //         <Photo photo={this.state.photo} />
  //       </div>
  //     );
  //   }
  // }






export default App;
