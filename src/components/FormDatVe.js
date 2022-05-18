import React from "react";
import {Form, Button, Row, Col, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaSearch, FaBus } from "react-icons/fa";

const options = [
    { value: "Thanh pho Ho Chi Minh", label: "Thanh pho Ho Chi Minh" },
    { value: "Thanh pho Ho Chi Minh", label: "Thanh pho Ho Chi Minh" },
    { value: "Thanh pho Ho Chi Minh", label: "Thanh pho Ho Chi Minh" },
    { value: "Thanh pho Ho Chi Minh", label: "Thanh pho Ho Chi Minh" },
    { value: "Thanh pho Ho Chi Minh", label: "Thanh pho Ho Chi Minh" },
  ];

const FormDatVe = () => {
  return (
    <>
      <div
        style={{
          margin: "10px auto",
          width: "80%",
          borderRadius: "16px",
          boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
          backgroundColor: "#96CDCD",
          padding: "24px",
        }}
      >
        <Form>
          <Form.Label
            htmlFor="basic-url"
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              marginRight: "24px",
            }}
          >
            ĐẶT VÉ XE
          </Form.Label>
          <p>Vé xe một chiều</p>
          <br />
          <Form
            style={{
              display: "flex",
              width: "100%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <Form.Group style={{ marginRight: "24px" }}>
              <Form.Label>Từ</Form.Label>
              <Select options={options} placeholder=" <Nhap ten tinh thanh..." />
            </Form.Group>
            <Form.Group style={{ marginRight: "24px" }}>
              <Form.Label>Đến</Form.Label>
              <Select options={options} placeholder="Nhap ten tinh thanh..." />
            </Form.Group>
            <Form.Group style={{ marginRight: "24px" }}>
              <Form.Label>Ngày khởi hành</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group style={{ marginRight: "24px", width: "100px" }}>
              <Form.Label>Số khách</Form.Label>
              <Form.Control type="number" placeholder="1" min="1" />
            </Form.Group>
            <Button type="submit" style={{backgroundColor: '#000', color: '#FFFFFF', border: 'none'}}>
              {" "}
              <FaSearch />{" "}
            </Button>
          </Form>
        </Form>
      </div>
    </>
  );
}
export default FormDatVe;
