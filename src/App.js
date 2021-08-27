import React from "react";
import "./styles.css";
// example project
// input
// button
// items
// itemsArr.push("four")

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemsArr: []
    };
    this.saveClick = this.saveClick.bind(this);
  }

  saveClick() {
    // get itemname this.state.itemname
    // push it to the itemsArr state
    this.setState({
      itemsArr: [...this.state.itemsArr, this.state.itemName]
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Item Name"
          onChange={(event) => {
            this.setState({ itemName: event.target.value });
          }}
        />
        <button onClick={this.saveClick}>SAVE</button>
        {/* <h1>{this.state.itemName}</h1> */}
        <br />
        {this.state.itemsArr.map((item) => {
          return <h3>{item}</h3>;
        })}
      </div>
    );
  }
}

export default App;
