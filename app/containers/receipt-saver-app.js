'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import CustomListView from '../components/list-view';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class ReceiptSaverApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    var view;

    switch (state) {
      case 'LIST_VIEW':
        view = <CustomListView {...actions} />;
      default:
        view = <CustomListView {...actions} />;
    }

    return (
      <CustomListView {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ReceiptSaverApp);