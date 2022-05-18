import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";


function Header() {
  const [categories, setCategories] = useState([]);
  const [kw, setKw] = useState("");
  const nav = useNavigate();
  const [user, dispatch] = useContext(UserContext);

  const search = (event) => {
    event.preventDefault();

    nav(`/?kw=${kw}`);
  };

  const logout = (evt) => {
    evt.preventDefault();
    dispatch({ type: "logout" });
  };

  let btn = (
    <Link to="/login" className="nav-link" style={{ color: "#FFF" }}>
      Dang nhap
    </Link>
  );
  if (user != null)
    btn = (
      <>
        <Link to="/" className="nav-link">
          {user.username}
        </Link>
        <a href="#" onClick={logout} className="nav-link" style={{ color: "#FFF" }}>
          Dang xuat
        </a>
      </>
    );

  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "#96CDCD" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "#000", fontWeight: "bold" }}
          >
            <img
              src="../img/logobus.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt=""
              style={{ marginRight: "10px" }}
            />
            ON BUS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#" style={{ color: "#000" }}>
              Trang Chủ
            </Nav.Link>
            <Nav.Link href="/tuyenduong" style={{ color: "#000" }}>
              Tuyến Đường
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#000" }}>
              Tin Tức
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#000" }}>
              Tuyển Dụng
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#000" }}>
              Liên Hệ
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "#000" }}>
              Về Chúng Tôi
            </Nav.Link>
          </Nav>
          <Button
            style={{
              backgroundColor: "#000",
              color: "#FFF",
              border: "none",
            }}
          >
          {btn}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
