import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'  //for toast
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteLog, setCurrentLog } from '../../App/Actions/logActions'

const LogItem = (props) => {
    const {deleteLog, log} = props;

    const DeleteHandler = () => {
        var toasthtml= `<span>Deleted log: ${props.log.message}</span>`
            M.toast({html: toasthtml})
        deleteLog(log.id)
    }

    return (
        <li className='collection-item'>
            <div>
                <a href= '#edit-log-modal' onClick={() => props.setCurrentLog(log)}
                className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>
                {log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> Last updated by {' '}
                    <span className='black-text'>{log.tech}</span> on <Moment format='MMM Do YYYY,
                    h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" className='secondary-content' onClick={DeleteHandler}>
                <i className='material-icons grey-text'>delete</i></a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}
export default connect(null, {deleteLog, setCurrentLog})(LogItem)
