import React, { Component, useEffect } from "react";
import { useState } from "react";
import image from "./table1.jpg";
import "./BookTable.css";
import NavBar from "./NavBar";
import Axios from "axios";
import { Link } from "react-router-dom";
import ViewTableRow from "./ViewTableRow";
import ViewTable from "./ViewTable";
import Viewbox from "./Viewbox";

function BookTable(props) {
//   const [totalgust, setTotalguest] = useState();
  const [date, setDate] = useState();
  const [guest, setGuest] = useState();
  // useEffect(() => {
  //   Axios.get(`http://localhost:5500/entries/view/:id`)
  //     .then(({ data }) => {
  //       setGuest(data);
  //       console.log("props: ");
  //       console.log(props);
  //     })
  //     .catch((error) => {
  //       console.log("error from booktable " + error);
  //     });
  // }, []);

  const handleSubmit = () => {
    const url = "http://localhost:5500/entries/make-res";
    const obj = { totalgust, date };
    Axios.post(url, obj)
      .then((res) => {
        // alert(res.status);
        // alert("JI");
        if (res.status === 200) {
          alert("Table has been reserved");
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
  };

  return (
    <div>
      {/* <h1 id="a1">SATHIYA BHAVAN</h1>
      <p id="a2">"Delight the Traditional and Authentic Taste of Life"</p> */}
      <img id="i1" src={image} />
      <div id="e2">
        {/* <Link to="/viewbox">account details</Link> */}
        <Link id="ll1" to="/">
          back to home{" "}
        </Link>
      </div>

      <div id="e3">
        <h1 id="aa">BOOK TABLE</h1>

        <form onSubmit={handleSubmit1}>
          <form className="d-flex" onSubmit={handleSubmit}>
            <div id="p1">
              
              <div id="d1">
                <label>total guest</label>
                <input
                  onChange={(e) => setGuest(e.target.value)}
                  type="number"
                  placeholder="Total guests"
                />
              </div>

              <div id="d1">
                <label>date</label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  placeholder="enter date"
                />
              </div>

              <div id="but1">
                <button id="butt1" type="submit">
                  book now
                </button>
              </div>

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
        </form>

        <div className="col"></div>
      </div>

      <div>
        <p id="line">
          ______________________________________________________________________________________________________________
        </p>
      </div>
    </div>
  );
}

export default BookTable;