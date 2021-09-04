import React from 'react'
import TechItem from './TechItem';
import { connect } from 'react-redux'

const TechListModal = (props) => {

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className="collection">
                    {!props.tech.loading && props.tech.techs === null ? (<p className="center">No techicians to show...</p>) :
                    (props.tech.techs.map(item => (
                    <TechItem key={item.id} tech={item} />
                    )))
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps)(TechListModal)
