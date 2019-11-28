import React, { Component } from 'react';
import T from 'prop-types'
import { connect } from 'react-redux';

import { fetchUserAll } from '../stores/Actions';
import { Navbar } from '../components';

export class Aboutus extends Component {
  static propTypes = {
    dispatch: T.func,
    getUserAll: T.any,
  }
  constructor(props) {
    super(props);

    this.state = {}

    this.props.dispatch(fetchUserAll());
  }
  render() {
    return (
      <>
        <Navbar />
        <h1>About Us</h1>
      </>
    )
  }
}

const mapStateToProps = ({ getUserAll }) => ({ getUserAll });

export default connect(mapStateToProps)(Aboutus);
