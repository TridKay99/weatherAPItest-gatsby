import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import axios from "axios";
// import singlePage from "./oneWeather"

class IndexPage extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    const response = await axios.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=f291f21948b2e4a1c0b810a4fa351e6e')
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
        <h1>7 Days in Moscow</h1>
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

export default IndexPage
