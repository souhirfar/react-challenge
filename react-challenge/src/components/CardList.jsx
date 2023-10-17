import { useState } from "react";

function CardList({ image, name, price,}) {
    const [cart, setCart]=useState(0);

    function addToCart () {
        setCart((prev) => prev + 1);
        
        }
    const [like,setLike] = useState(0);

  return (
    <div className="article">
        
      <img src={image} alt={name} />

      <div className="info">
        <h3>{name}</h3>
        <p>{price} </p>
      </div>

      <div className="buttons">
      <button onClick={addToCart}>Ajouter au panier</button>
                  <p>Quantité dans le panier : {cart}</p>
                  <button 
                  onClick={() => {
                    setLike(like + 1);
                    }}
                  >
            ❤️ ({like})</button>
			</div>
    </div>
  );
}

export default CardList;
