import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './Inscription.css'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { register } from '../../JS/Actions/user';

const Inscription = () => {

  const [newUser, setNewUser] = useState({}) 
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state.userReducer.isAuth)
   const handleChange = (e) => {
     setNewUser({...newUser , [e.target.name] : e.target.value})
   }

   const handleUser = (e) => {
     e.preventDefault();
     dispatch(register(newUser))
     
   }
   
   const [passwordShown, setPasswordShown] = useState(false);
   const togglePassword = () => {
     setPasswordShown(!passwordShown);
   };

  return (
    <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>CRÉER UN NOUVEAU COMPTE CLIENT</title>
  <link rel="canonical" />
      </Helmet>

<h1 className='Inscription'>CRÉER UN NOUVEAU COMPTE CLIENT</h1>
{isAuth?navigate('/')  : (
  <div className='cadre2'>
  <div className='cadres'>
          <Form  onSubmit={handleUser} >
  
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label  className='forms'> Prénom</Form.Label>
      <Form.Control type="text" placeholder="Prénom" name="firstname" onChange={handleChange}/>
  
      <Form.Label className='forms'>Nom</Form.Label>
      <Form.Control type="text" placeholder="Nom" name="name" onChange={handleChange} />
  
      <Form.Label className='forms'>Adresse e-mail</Form.Label>
      <Form.Control type="email" placeholder="E-mail" name="email" onChange={handleChange}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='forms'>Mot de passe</Form.Label>
    {passwordShown ? (<img src="https://w7.pngwing.com/pngs/292/817/png-transparent-eye-computer-icon-vector-focus-concept-looking-at-view-optometry-eyeball-symbol-human-eye-ideas.png" onClick={togglePassword}  className='eye5' alt='show'/>) : (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC6TEljFtYLEC7oAUiyrbrRC_tW2T5admeQ&usqp=CAU" onClick={togglePassword}  className='eye5'alt='hide' />)}
    
      <Form.Control type={passwordShown ? "text" : "password"} placeholder="Mot de passe" name="password" onChange={handleChange} />
  </Form.Group>
  
  <Button  className='bouton'variant="light" type="submit"><span className='boutontext' onClick={handleUser}>Créer compte </span></Button>
    <hr/>
    
    <Form.Text className="text-muted">
    Vous avez un compte déjà?
    <a href="/login">Se connecter</a>
      </Form.Text>
     
    <Button variant="primary" href="/"><span className='boutontext'>Revenir a la page d'accueil</span></Button>{' '}
  </Form>
  </div>
  </div>
)}

                      
        </div>
  )
}

export default Inscription