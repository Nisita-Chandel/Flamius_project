import { motion } from "framer-motion";

const FoodCard = ({ food, addToCart }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="food-card"
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "220px",
        borderRadius: "10px"
      }}
    >
      <img
        src={food.image}
        alt={food.name}
        style={{ width: "100%", height: "140px", borderRadius: "8px" }}
      />
      <h4>{food.name}</h4>
      <p>₹{food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </motion.div>
  );
};

export default FoodCard;
