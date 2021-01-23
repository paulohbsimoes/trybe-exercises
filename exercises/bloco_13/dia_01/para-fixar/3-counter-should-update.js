class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.setState({ counter: 10 });
  }

  shouldComponentUpdate(_, nextState) {
    const { counter } = nextState;
    if ( counter >= 13 && counter <= 15 ) return false;
    return true;
  }

  render() {
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
