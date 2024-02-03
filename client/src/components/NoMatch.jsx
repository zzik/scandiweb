
import Header from './Header'
import { homeRoute } from '../utils/routeHandler'

const NoMatch = () => {
  return (
    <>
    <Header text="404 NOT FOUND" />
    <button onClick={homeRoute}>GO BACK</button>
    </>
  )
}

export default NoMatch