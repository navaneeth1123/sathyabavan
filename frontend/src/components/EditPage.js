import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import ViewTable from "./ViewTable";
import image11 from "./tabel.jpg";

function EditPage() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  // const [data, setData] = useState();
  const obj1 = useParams();

  // alert(id);
  // console.log(obj.id);
  useEffect(() => {
    axios
      .get("http://localhost:5500/entries/update-user/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setPassword(res.data.password);
        } else {
          Promise.reject();
          console.log("Hi else");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [obj1.id]);

  const handleSubmit = () => {
    const url = "http://localhost:5500/entries/update-user/" + obj1.id;
    const obj2 = { name, password };
    axios
      .put(url, obj2)
      .then((res) => {
        if (res.status === 200) {
          alert("User updated");
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
      <img id="d1" src={image11} />
      {/* onSubmit={handleSubmit} */}
      <form onSubmit={handleSubmit} className="App">
        <Link to="/view">View</Link>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          defaultValue={name}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          defaultValue={password}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default EditPage;
