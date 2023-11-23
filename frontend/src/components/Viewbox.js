import React, { useState, useEffect } from "react";
import axios from "axios";
import Viewboxrow from "./Viewboxrow";
import { Link } from "react-router-dom";

const Items = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/entries/views/:id")
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
      return <Viewboxrow obj={res} key={i} />;
    });
    // console.log(employees);
  };

  return (
    <div>
      <Link to="/login">Login Page</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>number of guests</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </table>
    </div>
  );
};

export default Items;
