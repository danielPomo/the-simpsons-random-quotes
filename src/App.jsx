import { Button, Container } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Container className="text-center my-5 main">
        <img className="img-fluid px-5" src={logo} alt="" />
        <section className="py-3">
          <h1 className="main-title">Your favorite TV show!</h1>
          <hr />
        </section>
      </Container>
      <Card>
      </Card>
      <Button className="w-50 text-center">Try again!</Button>
      <footer className="bg-dark text-light text-center py-3">
        <p> &copy; All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
