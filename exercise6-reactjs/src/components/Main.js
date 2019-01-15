import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ListRecipe from './ListRecipe';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DetailPage from './DetailPage';
import { connect } from 'react-redux';
import { fetch, fetchById } from './../redux/ActionCreators';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.props.fetch();
    }

    render() {
        let data = this.props.listRecipe;

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <ListRecipe data={data} />} />
                    <Route path="/detail/:id" component={DetailPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listRecipe: state.ListRecipe.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetch: () => { dispatch(fetch()) },
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
