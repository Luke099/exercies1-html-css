import React, { Component } from 'react';
import Detail from './Detail';
import { connect } from 'react-redux';
import {  fetchById } from './../redux/ActionCreators';
import {  withRouter } from 'react-router-dom';

class DetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.props.fetchById(this.props.match.params.id);

  }
  render() {
    let { data } = this.props;
    return (
      <>
        <Detail recipe={data ? data : null} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.ListRecipe.detail
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchById: (id) => { dispatch(fetchById(id)) }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPage));
