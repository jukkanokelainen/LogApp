import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'  //for toast
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteTech } from '../../App/Actions/techActions';

const TechItem = (props) => {

    const deleteHandler = () => {
        props.deleteTech(props.tech.id)
        var toasthtml= `<span>Deleted technician: ${props.tech.firstName} ${props.tech.lastName}</span>`
            M.toast({html: toasthtml})
    }
    return (
        <li className='collection-item'>
            <div>
                {props.tech.firstName} {' '} {props.tech.lastName}
                <a href="#!" className='secondary-content'>
                <i className='material-icons grey-text'
                onClick={deleteHandler}>delete</i></a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}
export default connect(null, {deleteTech})(TechItem)
