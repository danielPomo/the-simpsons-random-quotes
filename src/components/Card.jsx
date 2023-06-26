const Card = () => {
  return (
    <section className="text-center">
      <img
        src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
        alt="PERSONAJE"
      />
      <figure>
        <blockquote className="blockquote">
          <p>
            By chilling my loins I increase the chances of impregnating my wife.
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Nombre del personaje <cite title="The Simpsons">The Simpsons</cite>
        </figcaption>
      </figure>
    </section>
  );
};

export default Card;
