import React from 'react';
import { bindActionCreators } from 'redux';
import ManageWishlist from '../containers/ManageWishlist';
import { addCount, startClock } from '../ducks';
import { fetchWishlist } from '../ducks/wishlist';
import initStore from '../utils/initStore';
import withRedux from '../utils/withRedux';

// import Page from '../components/Page';

class Home extends React.Component {
  static getInitialProps({ store, isServer }) {
    // init the redux store
    // store.dispatch(serverRenderHome(isServer));
    store.dispatch(fetchWishlist(1));
    return { isServer };
  }

  componentDidMount() {
    // this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <ManageWishlist />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(Home);
