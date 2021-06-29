import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <img className="header_logo" src="/images/LogoYoutube.png" alt="" />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <Search className="header__inputButton" />
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
