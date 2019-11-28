import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux';

import { fetchUser } from '../stores/Actions';

export class Dashboard extends Component {
  static propTypes = {
    dispatch: T.func,
    getUser: T.any,
  }
  constructor(props) {
    super(props);

    this.state = {}

    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ getUser }) => ({ getUser });

export default connect(mapStateToProps)(Dashboard);
