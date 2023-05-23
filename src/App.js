import './App.css';
import React from 'react';
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      box: "text",
      showTooltip: false,
      tooltipPostion: 'top'
    }
  }

  // onover function
  onHover = () => {
    this.setState({
      text: "image",
      showTooltip: true
    }, () => {
      console.log(this.state);
    })
  }

  // onLeave function
  onLeave = () => {
    this.setState({
      text: "text",
      showTooltip: false
    }, () => {
      console.log("onleave");
    })
  }

  // handle postion chenge 
  handleChange = (e) => {
    this.setState({
      tooltipPostion: e.target.value
    }, () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <>
        <div>
          <select value={this.state.tooltipPostion} onChange={this.handleChange}>
            <option value="top">top</option>
            <option value="right">right</option>
            <option value="left">left</option>
            <option value="bottom">bottom</option>
          </select>
        </div>
        <br/><br/><br/><br/>
        {/* main */}
        <div id='main' onMouseOver={this.onHover} onMouseLeave={this.onLeave}>
            {(this.state.showTooltip && <div>hii</div>)}
            {(this.state.box === "text" && <span>Touch me</span>)}
            {(this.state.box === "" && <img
              alt='PIC'
              src=''
            />)}
        </div>
      </>
    )
  }

}


export default App;
