import React, {useState} from 'react'
import {connect} from 'react-redux'
import { searchLogs, getLogs } from '../../App/Actions/logActions'

const Navbar = (props) => {

    const [text, setText] = useState('');

    const onTextChange = (e) => {
        setText(e.target.value);
        props.searchLogs(e.target.value)
    }
    
    const closeHandler = (e) => {
        setText('');
        props.getLogs();
    }

    return (
        <nav className="blue" style={{marginBottom:"30px"}} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="search" type="search" value={text} onChange={onTextChange}/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons" onClick={closeHandler}>close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default connect(null, {searchLogs, getLogs})(Navbar)
