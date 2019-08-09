import React from 'react';
import axios from 'axios'
import OnePersonCard from './OnePersonCard'

class GetLogin extends React.Component{

    constructor(){
      super();
      this.state = {
        login: [],
      }; 
    }
  
    componentDidMount(){
      this.userInfo();
    }

    userInfo = () => {
        axios.get('https://api.github.com/users/HannahMarieWieser')
        .then(allusers => {
            this.setState({login: allusers.data})
            console.log("user", allusers.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    }

    render(){
        console.log('all login state', this.state.login)

        return(
            <div>
                <h1 className='title' >All Users</h1>


                {this.state.login.map(oneperson => {
                    console.log("oneperson", oneperson)
                    return <OnePersonCard key={oneperson} info = {oneperson} className='cards'/>
                })}
            </div>    
        )  
    }
}
export default GetLogin