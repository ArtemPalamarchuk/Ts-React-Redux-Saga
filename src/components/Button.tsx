import React, {Component} from 'react';

type buttonProps = {
  label: string,
  onclick: () => {}
}

class Button extends Component<buttonProps> {
  handleClick = () => {
    const {onclick} = this.props
    onclick();
  }

  render() {
    return (
      <button className={'btn'} onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;