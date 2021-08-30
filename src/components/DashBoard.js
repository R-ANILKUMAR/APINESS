import React from "react";
import { useEffect } from "react";
import { dashBoardAction } from "../actions/logInactios";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashBoardAction());
  }, []);
  const state = useSelector((state) => state);

  const DashBoardRender = () => {
    const { user } = state.dashBoard;

    return user.map((item) => {
      const { id, age, name, gender, email, phoneNo } = item;
      return (
        <tr key={item.id}>
          <td>{id}</td>
          <td>{age}</td>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{email}</td>
          <td>{phoneNo}</td>
        </tr>
      );
    });
  };

  return (
    <Table
      style={{
        textAlign: "center",
        position: "absolute",
        width: "100vw",
        top: " 50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      ui-container
      striped
      bordered
      hover
      variant="light"
    >
      <thead>
        <tr>
          <th>id</th>
          <th>age</th>
          <th>name</th>
          <th>gender</th>
          <th>email</th>
          <th>Pone Number</th>
        </tr>
      </thead>
      <tbody>
        <DashBoardRender />
      </tbody>
    </Table>
  );
};

export default DashBoard;
