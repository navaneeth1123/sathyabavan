import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  const DeleteEmployee = () => {
    let url = "http://localhost:5500/entries/delete-user/";
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("delete success");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.password}</td>

      <td>
        <Link to={`/edit-user/${props.obj._id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={DeleteEmployee}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
