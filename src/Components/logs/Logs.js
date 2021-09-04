import React, { useEffect} from 'react'
import LogItem from './LogItem'
import Preloader from '../Layout/Preloader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLogs} from '../../App/Actions/logActions'
import {getTechs} from '../../App/Actions/techActions';

const Logs = (props) => {

  useEffect( () => {
    props.getLogs();
    props.getTechs();
    // eslint-disable-next-line
  }, []
  )

  if(props.log.loading || props.log.logs === null) {
    return <Preloader />
  }

    return (
        <ul className="collection with-header">
        <li className="collection-header">
        <h4 className='center'>System logs</h4>
        </li>
        {!props.log.loading && props.log.logs.length === 0 ? (<p className="center">No logs to show...</p>) :
        (props.log.logs.map(item => (
          <LogItem key={item.id} log={item} />
        )))}
        </ul>
    )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  log: state.log 
})

export default connect(mapStateToProps, {getLogs, getTechs})(Logs)
