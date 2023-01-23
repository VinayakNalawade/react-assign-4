import {Component} from 'react'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, details: []}

  componentDidMount() {
    this.fetchdetails()
  }

  fetchdetails = async () => {
    const {match} = this.props

    const list = await fetch(`https://apis.ccbp.in/ipl/${match.params.id}`)

    const response = await list.json()

    const teamBannerUrl = response.team_banner_url

    const latestMatchDetails = {
      umpires: response.latest_match_details.umpires,
      result: response.latest_match_details.result,
      manOfTheMatch: response.latest_match_details.man_of_the_match,
      id: response.latest_match_details.id,
      date: response.latest_match_details.date,
      venue: response.latest_match_details.venue,
      competingTeam: response.latest_match_details.competing_team,
      competingTeamLogo: response.latest_match_details.competing_team_logo,
      firstInnings: response.latest_match_details.first_innings,
      secondInnings: response.latest_match_details.second_innings,
      matchStatus: response.latest_match_details.match_status,
    }

    const recentMatches = response.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const details = {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    }

    this.setState({isLoading: false, details})
  }

  render() {
    const {isLoading, details} = this.state
    const {match} = this.props

    return (
      <div className={match.params.id}>
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              className="matchcardbannerimg"
              alt="team banner"
              src={details.teamBannerUrl}
            />
            <h1 className="matchCardLatestHeading">Latest Matches</h1>
            <LatestMatch match={details.latestMatchDetails} />
            <ul className="MatchCardContainer">
              {details.recentMatches.map(each => (
                <MatchCard match={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
