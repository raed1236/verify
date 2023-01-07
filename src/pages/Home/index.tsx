import React from "react";
import { Link } from "react-router-dom";
import { pagesList } from "./config";

const Home = () => {
  return (
    <div className={"mainWrapper"}>
      <h1 className="lead">Please choose a game from the list below:</h1>

      <ul>
        {pagesList.map(({ link, name }) => (
          <li className="gameName">
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
