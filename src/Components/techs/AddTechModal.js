import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'  //for toast
import {connect} from 'react-redux';
import { addTech } from '../../App/Actions/techActions';

const AddTechModal = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName ==='' || lastName ==='') {
            M.toast({html: 'Please enter the first and last name'})
        } else {
            props.addTech({
                firstName,
                lastName
            })
            
            var toasthtml= `<span>Added technician: ${firstName} ${lastName}</span>`
            M.toast({html: toasthtml})

            //clear fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>Add a Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            />
                            <label 
                            htmlFor='message' 
                            className='active'>
                                First Name
                            </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            />
                            <label 
                            htmlFor='message' 
                            className='active'>
                                Last Name
                            </label>
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

export default connect(null, {addTech})(AddTechModal)
