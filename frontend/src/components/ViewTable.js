import React, { useState, useEffect } from "react";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";
import { Link } from "react-router-dom";
import ima from "./tabel.jpg";

const Items = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/entries")
      .then(({ data }) => {
        setEmployee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    console.log(employees);
    return employees.map((res, i) => {
      return <ViewTableRow obj={res} key={i} />;
    });
    // console.log(employees);
  };

  return (
    <div>
      <img id="i1" src={ima} />
      <Link to="/loginpage">Login Page</Link>
      <table id="e5">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Password</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </table>
    </div>
  );
};

export default Items;
