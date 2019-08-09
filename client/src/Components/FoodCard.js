import React from 'react'
import { Card } from 'semantic-ui-react'


//card to display get request information
//stored in GetFoods -GET request


function FoodCard (props){
    //console.log('props', props)
 
    return (
        <Card>
             <Card.Content>
                <Card.Header>{props.info.name}</Card.Header>
                <Card.Meta>
                    {props.info.course} Course
                </Card.Meta>
                <Card.Meta>
                    Technique - {props.info.technique}
                </Card.Meta>
                <Card.Description>
                   {props.info.ingredients}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default FoodCard
