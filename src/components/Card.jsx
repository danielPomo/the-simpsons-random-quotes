import { Container } from "react-bootstrap";

/* eslint-disable react/prop-types */
const Card = ({ quote }) => {
  return (
    <Container className="text-center">
      <img
        src={quote.image}
        alt={`picture of ${quote.character}`}
        className="w-50"
      />
      <figure>
        <blockquote className="blockquote">
          <p>{quote.quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {quote.character} <cite title="The Simpsons">from The Simpsons</cite>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Card;
