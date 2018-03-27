//template
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
      return (
        <MuiThemeProvider>
          <div className="container-fluid">
            <Header/>
              {this.props.children}
          </div>
        </MuiThemeProvider>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};