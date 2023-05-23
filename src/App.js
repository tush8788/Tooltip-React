import './App.css';
import React from 'react';
import Tooltip from './Tooltip';

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
      <div id="container">
        <div id='first'>
          <lable className="heading">Select Postion of Tooltip</lable><br/>
          <select value={this.state.tooltipPostion} onChange={this.handleChange}>
            <option value="top">top</option>
            <option value="right">right</option>
            <option value="left">left</option>
            <option value="bottom">bottom</option>
          </select>
        </div>

        <div id='second' onMouseOver={this.onHover} onMouseLeave={this.onLeave}>
        
            {(this.state.box === "text" && <span className="heading tooltip">Hover over here
            {(this.state.showTooltip && <Tooltip postion={this.state.tooltipPostion}></Tooltip>)}
            </span>)}
        </div>
      </div>
    )
  }

}


export default App;
