import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teams: []}

  componentDidMount() {
    this.fetchteams()
  }

  fetchteams = async () => {
    const list = await fetch('https://apis.ccbp.in/ipl')

    const response = await list.json()

    const teams = response.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isLoading: false, teams})
  }

  render() {
    const {isLoading, teams} = this.state

    return (
      <div className="mainContainer">
        <div className="dashboardHeadingContainer">
          <img
            className="dashboardlogo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="dashboardHeading">IPL DASHBOARD</h1>
        </div>
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teamCardContainer">
            {teams.map(each => (
              <TeamCard key={each.id} card={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
