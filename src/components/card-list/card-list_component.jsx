import "./card-list_component.css";
import Card from "../card/card_component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsters={monster} />;
    })}
  </div>
);
export default CardList;
