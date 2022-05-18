import React from "react";
import {
  Breadcrumb,
  Nav,
  NavDropdown,
  Row,
  Col,
  Container, Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDotCircle, FaMapMarkerAlt, FaEllipsisV } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";

function DatVe() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Đặt vé</Breadcrumb.Item>
      </Breadcrumb>

      <div
        style={{
          margin: "20px auto",
          width: "80%",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontWeight: "bold" }}>
            HỒ CHÍ MINH <RiArrowLeftRightLine /> CẦN THƠ{" "}
          </h3>
          <p>Ngày khởi hành</p>
        </div>
      </div>

      <div
        style={{
          margin: "20px auto",
          width: "80%",
          border: "1px solid #96CDCD",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        <div>
          <h3>5:00 - 8:00</h3>
        </div>
        <p
          style={{
            backgroundColor: "#D3D3D3",
            borderRadius: "50px",
            color: "#000",
            width: "200px",
            padding: "10px 20px",
            textAlign: "center",
          }}
        >
          300.000 VND
        </p>
        <div>
          <Container>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col
                lg="1"
                style={{ justifyContent: "center", display: "block" }}
              >
                <Row>
                  <Col>
                    {" "}
                    <FaDotCircle />{" "}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <BsDot />{" "}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <BsDot />{" "}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <BsDot />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <FaMapMarkerAlt />{" "}
                  </Col>
                </Row>
              </Col>
              {/* <Col>
                <Row>
                  <Col>Bến xe Miền Tây</Col>
                </Row>
                <Row>
                  <Col>.</Col>
                </Row>
                <Row>
                  <Col>.</Col>
                </Row>
                <Row>
                  <Col>.</Col>
                </Row>
                <Row>
                  <Col>Bến xe Cần Thơ</Col>
                </Row>
              </Col>
              <Col md="auto">
                <Form>
                <Form.Check inline type="Radio" id="" label="Chọn" />
                </Form>
              </Col> */}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default DatVe;
