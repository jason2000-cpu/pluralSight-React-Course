import { useState, useEffect } from "react";

const useHouses = () => {
    const [allHouses, setHouses] = useState([]);

    useEffect(() => {
      const fetchHouses = async () => {
        const resp = await fetch("/houses.json");
        const houses =  await resp.json();
        setHouses(houses);
      }
    
      fetchHouses();
    }, [])
    
    return allHouses;
}
 
export default useHouses;