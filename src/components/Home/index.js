import {Link, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const onClickFindJob = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <div className="home-container">
      <Header />
      <h1 className="title">Find The Job That Fits Your Life </h1>
      <p className="content">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button type="button" className="find-button" onClick={onClickFindJob}>
          Find Jobs
        </button>
      </Link>
    </div>
  )
}
export default Home
