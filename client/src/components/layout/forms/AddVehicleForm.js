import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const AddVehicleForm = ({ addVehicle }) => {
  const history = useHistory();

  const [newVehicle, setNewVehicle] = useState({
    VIN: "",
    make: "",
    model: "",
    mileage: "",
    transmission: "",
    title: "",
  });

  const handleChanges = (e) => {
    setNewVehicle({ ...newVehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
    addVehicle(newVehicle);
  };

  return (
    <Form className="vehicle-form">
      <FormGroup>
        <Label for="VIN">VIN #</Label>
        <Input
          type="text"
          name="VIN"
          id="VIN"
          placeholder="Enter VIN #"
          onChange={handleChanges}
        />
      </FormGroup>

      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="Make">Make</Label>
            <Input
              type="text"
              name="make"
              id="make"
              placeholder="Nissan ..."
              onChange={handleChanges}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="model">Model</Label>
            <Input
              type="text"
              name="model"
              id="model"
              placeholder="Altima ..."
              onChange={handleChanges}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="mileage">Mileage</Label>
            <Input
              type="text"
              name="mileage"
              id="mileage"
              placeholder="120,000 ..."
              onChange={handleChanges}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="transmission">Transmission</Label>
            <Input
              type="text"
              name="transmission"
              id="transmission"
              placeholder="Automatic ..."
              onChange={handleChanges}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Clean ..."
              onChange={handleChanges}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button onClick={handleSubmit}>Add Vehicle</Button>
    </Form>
  );
};

export default AddVehicleForm;
