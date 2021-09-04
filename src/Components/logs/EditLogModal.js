import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'  //for toast
import {connect} from 'react-redux';
import {updateLog} from '../../App/Actions/logActions'

const EditLogModal = (props) => {

    useEffect(() => {
        if(props.log !==null) {
            setMessage(props.log.message);
            setAttention(props.log.attention);
            setTech(props.log.tech);
        }
    }, [props.log])
    
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message ==='' || tech ==='') {
            M.toast({html: 'Please enter a message and tech'})
        } else {
            
            props.updateLog({
                id: props.log.id,
                message,
                attention,
                tech,
                date: Date().toLocaleString()
            })
            M.toast({html: 'Log updated'})
            //clear fields
            setTech('');
            setMessage('');
            setAttention(false);
    }
        }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit System log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            />
                            <label 
                            htmlFor='message' 
                            className='active'>
                                Log Message
                            </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select 
                        name='tech' 
                        value={tech} 
                        className='browser-default'
                        onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>
                                Select Technician
                            </option>
                            {props.techs !== null ? (props.techs.map(item => (
                                <option key={item.id} value={item.firstName + ' ' +item.lastName}>
                                {item.firstName} {' '} {item.lastName}</option>
                            ))):
                            <option value='' disabled>No technicians to select</option>}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type = 'checkbox' className='filled-in'
                                checked={attention} value={attention}
                                onChange={e => setAttention(!attention)}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className= 'modal-footer'>
                <a href='#!' 
                onClick={onSubmit} 
                className="modal-close waves-effect blue waves-light btn">
                Enter</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    log: state.log.current,
    techs: state.tech.techs
});

export default connect(mapStateToProps, {updateLog})(EditLogModal)
