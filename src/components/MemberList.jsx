import React from 'react'
import moment from 'moment/moment'

export default function MemberList(props) {
  return (
    <div>
      <li className='list-group-item'>
        <div className="row align-items-center">
            <div className="col-1">
                <img className='border border-dark rounded-circle' src={props.avatar} alt={props.name}/>
            </div>
            <div className="col-11">
                <h4>{props.name}</h4>
                <p>{props.city} | {props.email}</p>
                <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
            </div>
        </div>
      </li>
    </div>
  )
}
