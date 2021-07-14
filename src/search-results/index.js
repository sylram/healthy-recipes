import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";


const SearchResults = ({ allDishes }) => {
    const { country } = useParams();
    const filteredDishes = allDishes.filter((d) => d.country === country);
    return (
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table>
                <tbody>
                    {filteredDishes.map((d) => (
                        <SearchResultsRow key={d.id} dish={d} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchResults;