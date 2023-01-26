import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
  });

  const [rePassword,setRePassword] = useState("");
  const [error,setError] = useState();
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    if(e.target.id==="rePassword"){
        setRePassword(e.target.value);
    }else{
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(rePassword===credentials.password){
        try {
          await axios.post("https://booking-api-s11x.onrender.com/api/auth/register", credentials).then((res)=>{
            setLoading(false);
            navigate("/login");
          }).catch((err)=>{
            setError(err);
            setLoading(false);
          })
        } catch (err) {
            setError(err);
        }
    }
    else{
        setError("Password don't match");
        setLoading(false);
    }
  };


  return (
    <div className="login">
    <div className="container">
      <div className="lContainer">
        <input
          type="text"
          placeholder="name"
          id="name"
          className="lInput"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="number"
          placeholder="PhoneNumber"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="re-enter the password"
          id="rePassword"
          onChange={handleChange}
          className="lInput"
        />
        </div>
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        <Link to="/login" style={{textDecoration:"none"}}><span>Already Have an account?</span></Link>
        {/* {error && <span>{error}</span>} */}
      </div>
    </div>
  );
};

export default Register;