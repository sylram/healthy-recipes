import { useParams } from "react-router-dom";
import Dish from ".";

const DishFromQuery = ({ allDishes }) => {
    const { id } = useParams();
    const dish = allDishes.find((d) => d.id === parseInt(id));

    if (!dish) return <div>Dish not found</div>;
    return <Dish dish={dish}></Dish>;
};

export default DishFromQuery;