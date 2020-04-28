import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const VehicleSearchForm = () => {
  function addVehicleHandler(e) {
    e.preventDefault();
  }
  return (
    <Form className="searchbar" inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label hidden for="search" className="mr-sm-2">
          Search
        </Label>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search Vehicle.."
        />
      </FormGroup>

      <Button>Search</Button>
      <Button onClick={addVehicleHandler}>
        <Link className="primary-text" to="/add-vehicle">
          Add Vehicle
        </Link>
      </Button>
    </Form>
  );
};

export default VehicleSearchForm;
