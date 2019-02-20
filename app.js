// TODO

// var Banana = (props) => <div>{props.food[0]}</div>;

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.groceryItem);
    return <li>{this.props.groceryItem}</li>;
  }
}

var App = (props) => (
  <ul>
    {props.items.map((item) => {
      console.log(item);
      return <GroceryItem groceryItem={item} />;
    })}
  </ul>
);

ReactDOM.render(
  <App items={['Banana', 'Not Banana!', 'No, not this one, either!']} />,
  document.getElementById('app')
);
