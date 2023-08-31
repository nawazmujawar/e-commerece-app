import "./ShimmerProductCards.css";

const ShimmerProductCards = () => {
  return (
    <div className="shimmer-container">
      {[...Array(8)].map((card, idx) => (
        <div className="shimmer-card" key={idx}>
          <div className="shimmer-card-img"></div>
          <div className="shimmer-card-description">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShimmerProductCards;
