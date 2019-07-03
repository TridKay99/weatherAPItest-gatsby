import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import axios from "axios";

class SinglePage extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,aus?id=524901&APPID=f291f21948b2e4a1c0b810a4fa351e6e')
    console.log(response.data.weather);
    this.setState({
      weather: response.data
    })
  }

  render() {
  const { weather } = this.state
  if (!weather) {
    return null
  } else {
    return (
      <div className="container">
        <h1>Weather</h1>
        <p>City: {weather.name}</p>
        <p>Country: {weather.sys.country}</p>
        <p>Right now: {weather.main.temp}</p>
        <p>Min: {weather.main.temp_min}</p>
        <p>Max {weather.main.temp_max}</p>
        <p>Description: {weather.weather[0].main} {weather.weather[0].description}</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      )
    }
  }
}

// const IndexPage = () => (
//   <div className="firstDiv">
//     <h1>Butt</h1>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )

export default SinglePage
