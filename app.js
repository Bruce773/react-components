// TODO

var Banana = () => (
  <div>Banana!</div>
);

var NotBanana = () => (
  <div>Not Brunana!</div>
);

var App = () => (
  <ul>
    <li><Banana /></li>
    <li><NotBanana /></li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));