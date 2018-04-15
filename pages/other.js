import React from 'react'
import { bindActionCreators } from 'redux'
import { startClock, addCount, serverRenderHome } from '../ducks'
import initStore from '../utils/initStore';
import withRedux from '../utils/withRedux'
import Page from '../components/Page'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderHome(isServer))
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
      <Page title='Other Page' linkTo='/' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
