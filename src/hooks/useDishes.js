import { useEffect, useState } from "react";

const useDishes = () => {
    const [allDishes, setAllDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            const response = await fetch("/dishes.json");
            const dishes = await response.json();
            setAllDishes(dishes);
        };
        fetchDishes();
    }, []);
    return allDishes;
}

export default useDishes;