import Card from './Card.jsx';
import "./Cards.css";

export default function Cards({ characters, onClose }) {
   return (
      <div className='cards_container'>
         <div id="img" />
         {characters && characters.map((element, id)=>{
            return (
               <Card
                  key={id}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
               ></Card>
            )})}
      </div>
   );
};
