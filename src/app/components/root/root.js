import React, { Component, Fragment } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { loadCategory } from '../../actions/categoryActions';

import List from './List';
import './root.scss';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mq: ''
        };
    }
    componentDidMount() {
        this.props.dispatch(loadCategory());
        this.detectMediaQuery();
    }

    media = {
        medium: 'screen and (min-width: 768px)',
        large: 'screen and (min-width: 1024px)'
    };

    detectMediaQuery = () => {
        const medium = window.matchMedia(this.media.medium);
        const large = window.matchMedia(this.media.large);
        if (large.matches) {
            console.log('desktop');
        } else if (medium.matches) {
            console.log('tablet / medium device');
        } else {
            console.log('mobile / small device');
        }
    };

    render() {
        /*
         * You can get the category data from the category prop:
         * const { category } = this.props;
         */
        const { category } = this.props;
        const products = category.toJS().products;
        return (
            <Fragment>
                <List products={products} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { categoryReducers } = state;

    return {
        category: categoryReducers.get('category')
    };
}

export default connect(mapStateToProps)(Root);
