import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/">
          <img className="header_logo" src="/images/LogoYoutube.png" alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar alt="Ola" src="/images/ola.jpg" />
      </div>
    </div>
  );
}
