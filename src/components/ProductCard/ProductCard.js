import "./ProductCard.css";
import CartIcon from "../../assets/cart.svg";
import HeartIcon from "../../assets/empty-heart.svg";

const ProductCard = (props) => {
  const { title, price, image, rating } = props.product;
  return (
    <div className="productcard-container">
      <img src={image} />
      <h2 className="productcard-title">{title}</h2>
      <div className="productcard-price-rating">
        <span>₹ {price}</span>
        <span>⭐{rating.rate}</span>
      </div>
      <div className="productcard-action-buttons">
        <button>
          <img src={CartIcon} />
        </button>
        <button>
          <img src={HeartIcon} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
