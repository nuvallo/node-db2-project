import React from "react";
import VehicleTable from "../layout/VehicleTable";
import VehicleSearchBar from "../layout/forms/VehicleSearchForm";

const HomePage = ({ vehicles, deleteVehicle }) => {
  return (
    <div>
      <div className="searchbar-container">
        <VehicleSearchBar />
      </div>
      <div className="table-container">
        <VehicleTable deleteVehicle={deleteVehicle} vehicles={vehicles} />
      </div>
    </div>
  );
};

export default HomePage;
