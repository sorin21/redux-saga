 import axios  from 'axios';
 
 export const getUsers = () => {
   const configs = {
    params: {
      // limit how much users we cand return
      // this limit is from heroku list offered
      limit: 1000
    }
   }

   return axios.get('https://rem-rest-api.herokuapp.com/api/users', configs)
 }
 
 export const createUser = ({firstName, lastName}) => {
   return axios.post('https://rem-rest-api.herokuapp.com/api/users', {
     firstName,
     lastName
   });
 }
 
 
 
 