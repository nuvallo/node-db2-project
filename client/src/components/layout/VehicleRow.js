import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const VehicleRow = ({ vehicle, deleteVehicle }) => {
  const history = useHistory();

  const deleteHandler = (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to remove this vehicle?"
    );

    if (confirmed === true) {
      const { id } = vehicle;
      console.log("vehicle ID: ", id);
      deleteVehicle(id);
      window.location.reload();
    }
  };

  const transmissionHandler = () => {
    if (vehicle.transmission) {
      return vehicle.transmission;
    } else {
      return "N/A";
    }
  };

  const titleHanlder = () => {
    if (vehicle.title) {
      return vehicle.title;
    } else {
      return "N/A";
    }
  };

  return (
    <Fragment>
      <tr onClick={deleteHandler} key={vehicle.id}>
        <th scope="row">{vehicle.VIN}</th>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.mileage}</td>
        <td>{transmissionHandler()}</td>
        <td>{titleHanlder()}</td>
      </tr>
    </Fragment>
  );
};

export default VehicleRow;
