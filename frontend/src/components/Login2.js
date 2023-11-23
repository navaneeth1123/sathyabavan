import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import image0 from "./kachori.jpg";
import "./Login.css";
import ima from "./tabel.jpg";
import { useState } from "react";
import Axios from "axios";
import Checkres from "./Checkres";
import ViewTable from "./ViewTable";
import BookTable from "./BookTable";

function Login2(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [id, setId] = useState();

  // const navigate = useNavigate();
  // const handleSubmit = (props) => {
  //   const url = "http://localhost:5500/entries/login2";

  //   const obj = { name, password, id };
  //   Axios.post(url, obj)
  //     .then((res) => {
  //       console.log(res.data);
  //       // alert(res);
  //       if (res.data.success) {
  //         obj.id = res.data.id;
  //         console.log(obj);
  //         navigate(`/booktable/${obj.id}`);
  //       } else {
  //         alert(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error from login2 " + err);
  //       alert(err);
  //     });
  // };

  const navigate = useNavigate();
  const handleSubmit = (props) => {
    const url = "http://localhost:5500/entries/login2";

    const obj = { name, password };
    Axios.post(url, obj)
      .then((res) => {
        console.log(res.data);
        // alert(res);
        if (res.data.success) {
          console.log(obj);
          navigate("/booktable");
        } else {
          alert("incorrect credentials");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("Error from login2 " + err);
        alert(err);
      });
  };

  return (
    <div>
      <img id="i1" src={ima} />

      <div id="e2">
        <Link id="ll1" to="/">
          back to home{" "}
        </Link>
      </div>

      <div id="backg"></div>
      <div className="row">
        <div id="ee3" className="col">
          <h1 id="head">LOGIN</h1>

          <form onSubmit={handleSubmit} className="App">
            <div id="d1">
              <label>USER NAME</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div id="d1">
              <label>PASSWORD</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <input type="submit" />
            </div>
            <div className="flex">
              <div className="ext"></div>
              <Link id="ps" to="/signup">
                creat new account
              </Link>

              <Link id="ps" to="/forget-user">
                forget password
              </Link>

              <Link id="ps" to="/view">
                view
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login2;

{
  /* <Link to="view">View</Link>
<Link to="login2">Login</Link> */
}
