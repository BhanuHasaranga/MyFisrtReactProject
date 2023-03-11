import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import MemberList from '../components/MemberList'

export default function Members() {

  const [loadData, setLoadData] = useState(new Date())
  const [members, setMember] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/').then(Response => {
      return Response.json()
    }).then(responseData => {
      setMember(members => [...members, responseData.results[0]])
    })
  },[loadData])

    const memberListComp = () => {
        return members.map((aMember) => {
            return (
                <MemberList
                 key={aMember.id}
                 name={aMember.name.first + ' ' + aMember.name.last}
                 city={aMember.location.city}
                 email={aMember.email}
                 birthday={aMember.dob.date}
                 avatar={aMember.picture.medium}
                />
            )
        })  
    }
    const addUserHandler = () => {
      setLoadData(new Date())
    }

  return (
    <div>
      <Header/>
      <div className="container mt-4 ">
        <div className='d-flex justify-content-between'>
          <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add Member Auto</button>
          <button className='btn btn-primary mb-2'>Add Member Manually</button>
        </div>
      <ul className='list-group'> 
        {memberListComp()}
      </ul>
      </div>
    </div>
  )
}
