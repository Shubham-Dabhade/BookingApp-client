import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const { user ,dispatch} = useContext(AuthContext);

  const handleClick=(e)=>{
    dispatch({type:"LOGOUT"});
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Reactbooking</span>
        </Link>
        {user ? (<>
        <div style={{padding:"12px"}}>
          <FontAwesomeIcon icon={faUser} style={{marginRight:"12px"}}/>
          {user.username}
          <FontAwesomeIcon onClick={handleClick} icon={faRightFromBracket} style={{marginLeft:"30px",cursor:"pointer"}}/>
        </div>
        </>) : (
          <div className="navItems">
          <Link to="/register" style={{textDecoration:"none"}}>
            <button className="navButton">Register</button>
          </Link>
          <Link to="/login" style={{textDecoration:"none"}}>
            <button className="navButton">Login</button>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;