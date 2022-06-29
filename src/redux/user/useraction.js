import axios from 'axios'

import {FETCH_USERS_REQ,FETCH_USERS_SUC,FETCH_USERS_FAI} from './usertype'

function FETCH_USERSREQ() {
    return {
      type:FETCH_USERS_REQ
    }
  }

  function FETCH_USERSSUC(user) {
    return {
      type:FETCH_USERS_SUC,
      payload:user
    }
  }

  function FETCH_USERSFAI(error) {
    return {
      type:FETCH_USERS_FAI,
      payload:error
    }
  }

  export const fetchUsers=()=>{
    return (dispatch)=>{
      dispatch(FETCH_USERS_REQ)
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
      const users=response.data
      dispatch(FETCH_USERSSUC(users))
    })
    .catch(error=>{
      const errormsg=error.message
      dispatch(FETCH_USERSFAI(errormsg))
    })
  }
  }
