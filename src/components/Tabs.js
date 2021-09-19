import React, { Component, Fragment } from "react";
import {CBTab, CBTabPanelList} from './styled'

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.children.map((elem, index) => {
            return (
              <CBTabPanelList
                key={index}
                selected= {index === this.state.selected}
                onClick={() => this.handleChange(index)}
              >
                {elem.props.title}
              </CBTabPanelList>
            );
          })}
        </ul>
        <CBTab>{this.props.children[this.state.selected]}</CBTab>
      </Fragment>
    );
  }
}

export default Tabs;
