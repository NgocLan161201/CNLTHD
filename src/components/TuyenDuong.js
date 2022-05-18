import React from "react";
import {
  Breadcrumb,
  FormControl,
  InputGroup,
  Carousel,
  Form,
  Row,
  Col, Table, Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { RiArrowLeftRightLine } from "react-icons/ri";

function TuyenDuong() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Tuyến Đường</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel
        style={{
          margin: "auto",
          width: "80%",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="First slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Second slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/1.jpg"
            alt="Third slide"
            height="300px"
          />
        </Carousel.Item>
      </Carousel>

      <Form
        style={{
          margin: "10px auto",
          width: "80%",
        }}
      >
        <Row>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Tìm điểm đi..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                {" "}
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Tìm điểm đi..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                {" "}
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Form>

      <div style={{
          margin: "20px auto",
          width: "80%",
          textAlign: "center",
        }}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th colSpan={3}>Tuyến đường</th>
              <th>Thời gian hành trình</th>
              <th>Thời gian khởi hành</th>
              <th>Giá vé</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr style={{textAlign: "left", fontWeight: "bold", color: "red"}}>
              <td colSpan={7}> <FaMapMarkerAlt /> Hồ Chí Minh</td>
            </tr>
            <tr>
              <td>Hồ Chí Minh</td>
              <td><RiArrowLeftRightLine /></td>
              <td>Cần Thơ</td>
              <td>3 giờ</td>
              <td>1 giờ 15</td>
              <td>300.000 VND</td>
              <td><Button href="/datve" variant="dark">Đặt vé</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default TuyenDuong;
