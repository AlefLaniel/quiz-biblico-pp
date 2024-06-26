
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";

// import { Container } from './styles';

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Privacy} path="/privacy" />
      </Routes>
    </HashRouter>
  );
};

export default Routers;
