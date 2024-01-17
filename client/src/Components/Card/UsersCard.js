import React from 'react'
import { Card } from 'react-bootstrap'
import './UsersCard.css'



const UsersCard = ({user}) => {
 
  return (
    <div> 
         <div align='center' className='profileCard12'>
      <Card style={{ width: '14rem' }} >

  <Card.Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7BN1bu9bS5AFnpigyuRO74hB_xS72wy17UcmUQcxO-ZTPezxDMyPIK5B5KqLTIJo2Rs&usqp=CAU" />
  <Card.Body>

    <Card.Title>-Profil-</Card.Title>
    
    <Card.Text>
    <span  className='forms'>Prénom :</span>  {user.firstname} 
    </Card.Text>

    <Card.Text>
    <span  className='forms'>Nom :</span> {user.name} 
    </Card.Text>
    <Card.Text>

    <span  className='forms'>E-mail :</span>  {user.email} 
    </Card.Text>    
  </Card.Body>
</Card>

      </div>


    </div>
  )
}

export default UsersCard