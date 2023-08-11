import SearchResultsRow from "./search-results";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import HouseContext from "../Context/houseContext";

const SearchResults = () => {
    const allhouses = useContext(HouseContext)
    const {country} = useParams();
    const filteredHouses = allhouses.filter((h) => h.country === country)
    return (
        <div className="mt-2">
            <h4>Results for {country}</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredHouses.map((h) => (
                        <SearchResultsRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default SearchResults ;