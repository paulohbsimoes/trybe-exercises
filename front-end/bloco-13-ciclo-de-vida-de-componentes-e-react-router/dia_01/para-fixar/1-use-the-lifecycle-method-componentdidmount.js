class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 1000);
  }
  render() {
    const { activeUsers } = this.state;
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: { activeUsers } </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
