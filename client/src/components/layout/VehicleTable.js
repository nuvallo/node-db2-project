import React from "react";
import { Table } from "reactstrap";
import VehicleRow from "./VehicleRow";

const VehicleTable = ({ vehicles, deleteVehicle }) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>VIN #</th>
          <th>Make</th>
          <th>Model</th>
          <th>Mileage</th>
          <th>Transmission</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((vehicle) => {
          return (
            <VehicleRow
              key={vehicle.id}
              deleteVehicle={deleteVehicle}
              vehicle={vehicle}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default VehicleTable;
