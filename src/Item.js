import './Item.css';
function Item({ name, price, image }) {
  return (
    <div className="item">
      <div className="item-image">
        <img src={image} alt="" />
      </div>
      <div className="item-title">
        <p>{name}</p>
      </div>

      <div className="item-price">${price}</div>
      <div className="item-contact">
        <a
          href={
            'https://wa.me/50769817547?text=Hola, me interesa *' + name + '*'
          }
          alt="me interesa"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Me interesa!
        </a>
      </div>
    </div>
  );
}

export default Item;
