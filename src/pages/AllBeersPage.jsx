import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <div>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt="beer-img" />
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>Created by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>See details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
