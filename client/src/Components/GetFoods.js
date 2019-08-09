import React from 'react';
import axios from 'axios'
import FoodCard from './FoodCard'

//class constructor for the get request to display cards

class GetFoods extends React.Component{

    constructor(){
      super();
      this.state = {
        item: [],
      }; 
    }
  
    componentDidMount(){
      this.userInfo();
    }

    userInfo = () => {
        axios.get('http://localhost:5000/api/restricted/data')
        .then(fooditems => {
            this.setState({item: fooditems.data})
            //console.log("fooditem", fooditems.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    }

    render(){

        return(
            <div>
                <h1 className='title' >Recipe Cards</h1>
                {this.state.item.map(recipie => {
                    //console.log("recipie", recipie)
                    return <FoodCard key={recipie} info = {recipie} className='cards'/>
                })}
            </div>    
        )  
    }
};
export default GetFoods