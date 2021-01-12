function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

const cards = [
  {
    featureImage: "https://picsum.photos/200",
    title: "How To Make Interactive ReactJS Form",
    description: "Let's write some interactive form with React",
    link: "https://sebhastian.com/interactive-react-form",
  },
  {
    featureImage: "https://picsum.photos/200",
    title: "Babelify your JavaScript code",
    description: "Babel make JavaScript code browser-compatible.",
    link: "https://sebhastian.com/babel-guide",
  },
  {
    featureImage: "https://picsum.photos/200",
    title: "JavaScript Basics Before You Learn React",
    description: "Learn the prerequisites of learning React fast",
    link: "https://sebhastian.com/js-before-react",
  },
  {
    featureImage: "https://picsum.photos/200",
    title: "Adicionando Cards - Primeiro",
    description: "Exercícios de React",
    link: "https://sebhastian.com/js-before-react",
  },
  {
    featureImage: "https://picsum.photos/200",
    title: "Adicionando Cards - Segundo",
    description: "Exercícios de React",
    link: "https://sebhastian.com/js-before-react",
  }
]

function CardList() {
  return (
    <div className="row">
      {cards.map(card => (
        <div className="col-sm-4">
          <Card
            featureImage={card.featureImage}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<CardList />, document.getElementById('root'))
