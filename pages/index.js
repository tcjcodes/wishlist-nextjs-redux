import React from 'react'
import { bindActionCreators } from 'redux'
import { startClock, addCount, serverRenderHome } from '../ducks'
import initStore from '../utils/initStore';
import withRedux from '../utils/withRedux'
import Page from '../components/Page'

class Home extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // init the redux store
    store.dispatch(serverRenderHome(isServer))
    // other further actions
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Page title='Index Page' linkTo='/other' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Home)
