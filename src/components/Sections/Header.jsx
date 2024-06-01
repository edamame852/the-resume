import React, { Component } from 'react';
import i18next from 'i18next';
import LanguageMenu from '../languageMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButton: null,
      navLinks: null,
    };
  }

  componentDidMount() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navLinks = document.getElementsByClassName('navbar-links')[0];

    this.setState({ toggleButton, navLinks });

    if (toggleButton) {
      toggleButton.addEventListener('click', this.handleToggleClick);
    }
  }

  componentWillUnmount() {
    const { toggleButton } = this.state;
    if (toggleButton) {
      toggleButton.removeEventListener('click', this.handleToggleClick);
    }
  }

  handleToggleClick = () => {
    const { navLinks } = this.state;
    if (navLinks) {
      navLinks.classList.toggle('active');
      console.log('IT TRIGGERED ME');
    }
  };

  render() {
    const { t } = i18next;

    return (
      <>
        <nav className="navbar">
          <div className="navbar-title">{t('title', { ns: 'meta' })}</div>
          <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <br />
          <div className="navbar-links">
            <ul>
              <li><LanguageMenu /></li>
            </ul>
          </div>
        </nav>
        <ul></ul>
      </>
    );
  }
}

export default Header;
