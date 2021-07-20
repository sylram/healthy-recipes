import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeautureDish from "./featured-dish";
import SearchResults from '../search-results';
import DishFilter from './dish-filter';
import HouseFromQuery from '../dish/HouseFromQuery';

function App() {
  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch("/dishes.json");
      const dishes = await response.json();
      setAllDishes(dishes);
    };
    fetchDishes();
  }, []);

  const featuredDish = useMemo(() => {
    if (allDishes.length) {
      const randomIndex = Math.floor(Math.random() * allDishes.length);
      return allDishes[randomIndex];
    }
  }, [allDishes])

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing healthy food recipes" title="Some title" />
        <DishFilter allDishes={allDishes} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allDishes={allDishes} />
          </Route>
          <Route path="/dish/:id">
            <HouseFromQuery allDishes={allDishes} />
          </Route>
          <Route path="/">
            <FeautureDish dish={featuredDish} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
