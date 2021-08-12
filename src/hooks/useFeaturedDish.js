import { useMemo } from "react";

const useFeaturedDish = (allDishes) => {
    const featuredDish = useMemo(() => {
        if (allDishes.length) {
            const randomIndex = Math.floor(Math.random() * allDishes.length);
            return allDishes[randomIndex];
        }
    }, [allDishes])

    return (featuredDish);
}

export default useFeaturedDish;