import React, { Component, useEffect } from "react";
import { useState } from "react";
import image from "./table1.jpg";
import "./BookTable.css";
import NavBar from "./NavBar";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ViewTableRow from "./ViewTableRow";
import ViewTable from "./ViewTable";
import Viewbox from "./Viewbox";

function BookTable(props) {
  const [members, setMembers] = useState();
  const [date, setDate] = useState();
  const [bookingname, setBookingname] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "http://localhost:5500/entries/make-res";
    const obj = { members, date, bookingname };
    Axios.post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("Table has been reserved");
          navigate("/");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  // const disableDate = () => {
  //   var today, dd, mm, yyyy;
  //   today = new Date();
  //   dd = today.getDate() + 1;
  //   mm = today.getMonth() + 1;
  //   yyyy = today.getFullYear();
  //   return yyyy + "-" + mm + "-" + dd;
  // };

  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  // const [id, setId] = useState();

  // const handleSubmit = (props) => {
  //   const url = "http://localhost:5500/entries/login2";

  //   const obj = { name, password };
  //   Axios.post(url, obj)
  //     .then((res) => {
  //       console.log(res.data);
  //       // alert(res);
  //       if (res.data.success) {
  //         console.log(obj);
  //         alert("your table has been reserved");
  //         window.location.reload();
  //       } else {
  //         alert("inviled creditionals");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error from login2 " + err);
  //       alert(err);
  //     });
  // };

  return (
    <div>
      <img id="i1" src={image} />
      <div id="e2">
        <Link id="ll1" to="/">
          back to home{" "}
        </Link>
      </div>

      <div id="e3">
        <h1 id="aa">BOOK TABLE</h1>

        <form className="d-flex" onSubmit={handleSubmit}>
          <div id="p1">
            <div id="d1">
              <label>Booking Name</label>
              <input
                onChange={(e) => setBookingname(e.target.value)}
                type="text"
                placeholder="Enter Booking Name"
              />
            </div>

            <div id="d1">
              <label>total guest</label>
              <input
                onChange={(e) => setMembers(e.target.value)}
                type="number"
                placeholder="Total guests"
              />
            </div>

            <div id="d1">
              <label>date</label>
              <input
                // min={this.disableDate()}
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
          </div>
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
