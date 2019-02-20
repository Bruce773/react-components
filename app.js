// TODO

// var Banana = (props) => <div>{props.food[0]}</div>;

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }
  onHover() {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(this.state.clicked);
  }

  render() {
    //console.log(this.props.groceryItem);

    var style = {
      'font-weight': this.state.clicked ? 'bold' : 'normal'
    };

    return <li style ={style} onMouseOver={this.onHover.bind(this)} >{this.props.groceryItem}</li>;
  }
}

var App = (props) => (
  <ul>
    {props.items.map((item) => {
      console.log(item);
      return (
        <GroceryItem groceryItem={item} />
      );
    })}
  </ul>
);

ReactDOM.render(
  <App items={['Banana', 'Not Banana!', 'No, not this one, either!']} />,
  document.getElementById('app')
);
