import React from "react";
import AddVehicleForm from "../layout/forms/AddVehicleForm";

const VehicleFormPage = ({ addVehicle }) => {
  return (
    <div>
      <div className="vehicle-form-container">
        <h1>Add New Vehicle</h1>
        <AddVehicleForm addVehicle={addVehicle} />
      </div>
    </div>
  );
};

export default VehicleFormPage;
