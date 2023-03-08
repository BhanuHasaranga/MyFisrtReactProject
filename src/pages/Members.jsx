import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import MemberList from '../components/MemberList'

export default function Members() {

  const [loadData, setLoadData] = useState(new Date())
  const [members, setMember] = useState(
    [
      {
        id: 1,
        name: {
            "title": "Miss",
            "first": "Jennie",
            "last": "Nichols"
        },
        location: {
            "city": "Billings"
        },
        email: "jennie.nichols@example.com",
        dob: {
            "date": "1992-03-08T15:13:16.688Z",
            "age": 30
        },
        picture: {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"
        }
      }
    ]
  )

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
      <div className="container mt-4">
        <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add Member</button>
      <ul className='list-group'> 
        {memberListComp()}
      </ul>
      </div>
    </div>
  )
}
