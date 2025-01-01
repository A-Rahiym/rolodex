import "./card-list_component.css";
import Card from "../card/card_component";
import Monster from "../../App"

type cardListProps = {
  monster: Array<Monster>
}


const CardList = ({ monsters } : cardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsters={monster} />;
    })}
  </div>
);
export default CardList;
