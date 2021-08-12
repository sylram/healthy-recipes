import { useHistory } from "react-router";
import "./search-results.css";

const SearchResultsRow = ({ dish }) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/dish/${dish.id}`);
    };
    return (
        <tr>
            <td><button onClick={setActive} className="btn btn-link">{dish.name}</button></td>
            <td>{dish.cookingTime}</td>
            <td>{dish.likes}</td>
        </tr>
    );
};

export default SearchResultsRow;