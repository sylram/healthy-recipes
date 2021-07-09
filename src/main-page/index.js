import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import { useEffect, useState } from "react";

function App() {
  const [allDishes, setAllDishes] = useState([]);
  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch("/houses.json");
      const dishes = await response.json();
      setAllDishes(dishes);
    };
    fetchDishes();
  }, []);
  return (
    <div className="container">
      <Header
        subtitle="Providing healthy food recipes"
        title="Some title" />
    </div>
  );
}

export default App;
