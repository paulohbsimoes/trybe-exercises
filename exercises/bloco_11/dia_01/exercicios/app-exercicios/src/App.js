const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['primeiro', 'segundo', 'terceiro']

function App() {
  return (
    <ul>
      {compromissos.map(task)}
    </ul>
  );
}

export default App;
