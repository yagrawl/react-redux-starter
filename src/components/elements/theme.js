import React, { Component } from 'react';

class Theme extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('DARK')) === true) {
      document.body.classList.add('dark');
    }

    this.state = {
      dark: JSON.parse(localStorage.getItem('DARK'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    if(!this.state.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    this.setState({
      dark: (!this.state.dark)
    });
    localStorage.setItem('DARK', !this.state.dark);
  }

  currentTheme() {
    if(!this.state.dark) {
      return 'Dark';
    } else {
      return 'Light';
    }
  }

  render() {
    return (
      <button className="theme-switch"
              onClick={this.handleModeChange}>
              {this.currentTheme()}
      </button>
    );
  }
}

export default Theme;
