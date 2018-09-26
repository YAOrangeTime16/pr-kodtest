import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { loadCategory } from '../../actions/categoryActions';
import { Seq } from 'immutable';
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
            this.setState({ mq: 'desktop' });
        } else if (medium.matches) {
            this.setState({ mq: 'ipad' });
        } else {
            this.setState({ mq: 'small device' });
        }
    };

    render() {
        /*
         * You can get the category data from the category prop:
         * const { category } = this.props;
         */
        const { category } = this.props;
        const { mq } = this.state;
        const c = category.toJS();
        const immutableList = c.products;
        const products = Seq(immutableList).toArray();
        return (
            <div>
                <List products={products} mq={mq} />
            </div>
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
