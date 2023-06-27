/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuoteFromAPI();
  }, []);

  const getQuoteFromAPI = async () => {
    try {
      const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      const data = await res.json();
      console.log(res);
      console.log(data[0]);
      setQuote(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex-center wrapper">
        <Container className="text-center mt-5 main">
          <img
            className="img-fluid px-5"
            src={logo}
            alt="logo of the simpsons"
          />
          <section className="py-3">
            <h1 className="main-title">Your favorite TV show!</h1>
            <hr />
          </section>
        </Container>
        <Card quote={quote} />
        <Button variant="dark" className="w-50 text-center mt-2 mb-5 quote-btn" onClick={getQuoteFromAPI}>
          Try again!
        </Button>
      </div>
      <footer className="bg-dark text-light text-center py-3">
        <p> &copy; All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
