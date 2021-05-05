import React from "react";
import './scss/custom.scss';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import Hotels from "./pages/HotelsPage/Hotels";
import Contact from "./pages/ContactPage/Contact";
import Admin from "./pages/AdminPage/Admin";
import HotelDetail from "./pages/HotelsPage/HotelDetails";
import Footer from "./components/Footer";
import InqList from "./pages/AdminPage/Inquiries";
import MessageList from "./pages/AdminPage/Messages";


export default function App() {
  return (
    <>


    <Router>
      <div>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="/"><i className="fas fa-globe-africa"></i> holidaze</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <NavLink exact to="/" className="nav-link">
                        Home
                      </NavLink>
                      <NavLink to="/hotels" className="nav-link">
                        Hotels
                      </NavLink>
                      <NavLink to="/contact" className="nav-link">
                        Contact
                      </NavLink>
                    </Nav>
                    <NavLink to="/login" className="nav-link">
                      <i className="fas fa-user-circle"></i>
                    </NavLink>
                  </Navbar.Collapse>
                  </Container>
        </Navbar>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/messages">
            <MessageList />
          </Route>
          <Route path="/inquiries">
            <InqList/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id" exact component={HotelDetail} />
        </Switch>
      </div>
    </Router>
    <Footer/>
  
    
    </>
  );
}
