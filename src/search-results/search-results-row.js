import "./search-results.css";

const SearchResultsRow = ({ dish }) => {
    const setActive = () => { };
    return (
        <tr onClick={setActive}>
            <td>{dish.name}</td>
            <td>{dish.cookingTime}</td>
            <td>{dish.likes}</td>
        </tr>
    );
};

export default SearchResultsRow;