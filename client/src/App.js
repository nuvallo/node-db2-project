import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/layout/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import VehicleAddFormPage from "./components/pages/VehicleAddFormPage";

import "./App.css";

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        console.log("GET vehicles Error: ", err);
      });
  }, []);

  const addVehicle = (newVehicle) => {
    console.log(newVehicle);
    axios
      .post("http://localhost:5000/api/vehicles", newVehicle)
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((error) => {
        console.log("Error POST vehicle: ", error);
      });
  };

  const deleteVehicle = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/vehicles/${id}`)
      .then((res) => {
        console.log("Vehicle Deleted");
      })
      .catch((error) => {
        console.log("Error POST vehicle: ", error);
      });
  };

  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route
        exact
        path="/"
        render={() => {
          return <HomePage vehicles={vehicles} deleteVehicle={deleteVehicle} />;
        }}
      />
      <Route exact path="/about" component={AboutPage} />
      <Route
        path="/add-vehicle"
        render={() => {
          return <VehicleAddFormPage addVehicle={addVehicle} />;
        }}
      />
    </div>
  );
}

export default App;
