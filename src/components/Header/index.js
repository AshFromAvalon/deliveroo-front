import logo from "../../assets/images/Deliveroo_logo.png";
import "./style.header.scss";

const Header = ({ name, description, cover }) => {
  return (
    <header className="header">
      <div className="top">
        <div className="top--container">
          <img className="top-logo" src={logo} alt="" />
        </div>
      </div>
      <div className="restaurant">
        <div className="restaurant--container">
          <div className="restaurant-content">
            <h1 className="restaurant-title">{name}</h1>
            <p className="restaurant-description">{description}</p>
          </div>
          <img className="restaurant-pic" src={cover} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
