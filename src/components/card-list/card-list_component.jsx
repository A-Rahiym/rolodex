import { Component } from "react";
import './card-list_component.css' 
import Card from "../card/card_component";
class CardList extends Component {
    render() 
    {   
        console.log("render")
        const {monsters} = this.props;
        return (
        <div className="card-list">
            {monsters.map((monster)=>{
                return <Card monsters={monster}/>
            })}
        </div>
        )
    }
}
export default CardList

