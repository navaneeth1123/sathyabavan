import Login2 from "./Login2";
import NavBar from "./NavBar";
import "./Login.css";
import ima from "./tabel.jpg";
import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileno] = useState();
  const [repassword, setRepassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "http://localhost:5500/entries/create-user";
    const obj = { name, password, firstname, email, mobileno, repassword };
    Axios.post(url, obj)
      .then((res) => {
        // alert(res.status);
        // alert("JI");
        if (res.status === 200) {
          if (obj.password == obj.repassword) {
            alert("User created");
            navigate("/loginpage");
          } else {
            alert("password dose not match");
            Promise.reject();
          }
        } else {
          // alert("Hi");
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div>
      <img id="i1" src={ima} />

      <div id="e2">
        <Link id="ll1" to="/loginpage">
          back{" "}
        </Link>
      </div>

      <div className="row">
        <div id="ee3" className="col">
          <h1 id="head">SIGN UP</h1>
          <form onSubmit={handleSubmit} className="App">
            {/* <div id="d1">
              <label>FIRST NAME</label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                type="name"
                placeholder="Enter your name"
              />
            </div>

            <div id="d1">
              <label>EMAIL</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your name"
              />
            </div>

            <div id="d1">
              <label>MOBILE NO</label>
              <input
                onChange={(e) => setMobileno(e.target.value)}
                type="number"
                placeholder="Enter your name"
              />
            </div> */}

            <div id="d1">
              <label>USER NAME</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter new username"
              />
            </div>

            <div id="d1">
              <label>PASSWORD</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter new password"
              />
            </div>

            <div id="d1">
              <label>RE-PASSWORD</label>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                type="password"
                placeholder="RE-password"
              />
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
