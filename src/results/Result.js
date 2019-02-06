import React, {Component} from 'react';
import SERVER_URL from '../constants/server';
import Weather from './Weather';
import Music from './Music';
import Food from './Food';
import Movie from './Movie';
import Output from './Output'
import axios from 'axios';


// Need all of the gets to pass down as props for each component?
class Result extends Component {
  constructor(){
    super()
    this.state = {
      films: [],
      food: ''
    }
  }

  componentDidMount(){
    this.getFilms()
    this.getFood()
  }

  getFilms = () => {
     fetch(`https://api.themoviedb.org/3/genre/35/movies?api_key=b1b4d1f42d4ead1ab1d5fb013cb9340d`)
      .then(response => response.json())
      .then(json=> {
        const filmObj = json.results
        const allTitles = []
        const filmTitle = filmObj.forEach((obj) => {
          return allTitles.push(obj.original_title)
        })
        this.setState({
          films: allTitles
        })
      })
      .catch(error => {
        console.log("Error:", error)
      })
    }

  //getMusic 


  //getFood
  getFood = () => {
    axios.post(`${SERVER_URL}/restaurant`, )


    // fetch(SERVER_URL+'/restaurant', {
    //   method: 'POST',
    //   headers: 
    // })
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  // getWeather
  getWeather = () => {
    fetch(SERVER_URL+'/weather')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
    .catch(err => {
      console.log(err)
    })
  }


  // getOutput


  render() {
    const filmList = this.state.films.map((film, i) => <Movie key={i} films={film} />)
    return(
    	<div className="results">
        <div className="weather-field">
          <Weather />
        </div>
        <div className="output-field">
          <Output />
        </div>        
        <div className="music-field">
          <Music />
        </div>
        <div className="food-field">
    		  <Food foodItem={this.state.food} />
        </div>
        <div className="movie-field">
          {filmList}
        </div>
    	</div>
    );
  }
}


export default Result
