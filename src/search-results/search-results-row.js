import { useHistory } from "react-router";
import "./search-results.css";

const SearchResultsRow = ({ dish }) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/house/${dish.id}`);
    };
    return (
        <tr onClick={setActive}>
            <td>{dish.name}</td>
            <td>{dish.cookingTime}</td>
            <td>{dish.likes}</td>
        </tr>
    );
};

export default SearchResultsRow;