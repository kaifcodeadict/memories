import "./App.css";
import { Container, Grid } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" key="home" element={<Home />} />
          <Route exact path="/auth" key="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
