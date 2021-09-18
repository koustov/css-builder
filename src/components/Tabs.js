import React, { Component, Fragment } from "react";
import styles from './tabs.scss'

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
            let style = index === this.state.selected ? styles.selected : "";
            return (
              <li
                key={index}
                className={[style]}
                onClick={() => this.handleChange(index)}
                style={{textTransform: "capitalize"}}
              >
                {elem.props.title}
              </li>
            );
          })}
        </ul>
        <div className={styles.tab}>{this.props.children[this.state.selected]}</div>
      </Fragment>
    );
  }
}

export default Tabs;
