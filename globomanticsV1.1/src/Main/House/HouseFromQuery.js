import { useParams } from "react-router-dom";
import { useContext } from 'react';
import HouseContext from "../Context/houseContext";
import House from './'
const HouseFromQuery = () => {
    const allhouses = useContext(HouseContext);
    const { id } = useParams();
    const house = allhouses.find((h) => h.id === parseInt(id));
    if (!house) return <div>House Not Found</div>
    return <House house={house} />;
}
 
export default HouseFromQuery;