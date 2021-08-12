import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedDish from "./featured-dish";
import SearchResults from '../search-results';
import DishFilter from './dish-filter';
import DishFromQuery from '../dish/DishFromQuery';
import useDishes from '../hooks/useDishes';
import useFeaturedDish from '../hooks/useFeaturedDish';

function App() {
  const allDishes = useDishes();
  const featuredDish = useFeaturedDish(allDishes);

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
            <DishFromQuery allDishes={allDishes} />
          </Route>
          <Route path="/">
            <FeaturedDish dish={featuredDish} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
