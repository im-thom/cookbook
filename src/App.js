import React, { useEffect, useReducer } from 'react'
// import RecipesList from './containers/RecipesList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from './containers/Layouts';
import RecipesPage from './pages/Recipes';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getUserAuthToken } from './redux/User/actions'
import reducer from './redux/User'
import { initialState } from './redux/User'

// interface Props {
//   isAuthenticated: boolean,
//   getUserAuthToken: any
// }

function App(props) {
  const [state] = useReducer(reducer, initialState);


  useEffect(() => {
    // console.log("Getting auth token")
    // const token = props.getUserAuthToken(state)
    // console.log('token is:', token)
    // const authToken = props.getUserAuthToken(state)
    // console.log(authToken)

    console.log('Checking auth state...')
  })

  return (
    <>
      <Router>
        <Layout {...props.isAuthenticated}>
          <Switch>
            <Route exact path="/">
              HOME
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/recipes">
              <RecipesPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>

  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.token !== null
  }
}

// function mapDispatchToProps(dispatch: any) {
//   return (
//     bindActionCreators({
//       getUserAuthToken
//     }, dispatch)
//   )
// }

const mapDispatchToProps = ({
  getUserAuthToken
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
