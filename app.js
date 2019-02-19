// TODO

var Banana = (props) => <div>{props.food[0]}</div>;

var NotBanana = (props) => <div>{props.notFood.car}</div>;

// var NotBanana = (props) => <div>Banana!</div>;

var App = () => (
  <ul>
    <li>
      <Banana food={['Brunana!']} />
    </li>
    <li>
      <NotBanana notFood={{ car: 'car' }} />
    </li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));
