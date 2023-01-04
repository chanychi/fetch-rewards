
import React, { useState, useEffect } from 'react';
import Label from './Label';
import Modal from './Modal';
import axios from 'axios';
import './App.css';

function App() {
  const [dropDownData, setdropDownData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  })
  
  const formatString = (str) => str.trim().charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase();
  
  const handleSubmit = (event) => {
    const {firstName, lastName, email, password, occupation, state} = userInput;

    const postBody = {
      name: `${formatString(firstName)} ${formatString(lastName)}`,
      email: `${email}`,
      password: `${password}`,
      occupation: `${occupation}`,
      state: `${state}`
    }

    axios.post('https://frontend-take-home.fetchrewards.com/form', postBody)
      .then(({status}) => console.log(`${status} Status: Account Successfully Created`))
      .then(() => setShowModal(true))
      .catch((error) => console.log(error))

  
    event.preventDefault();
  }

  
  useEffect(() => {
    axios.get('https://frontend-take-home.fetchrewards.com/form')
      .then(({data}) => {
        setdropDownData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    {showModal && <Modal setShowModal={setShowModal} />}
    <form onSubmit={handleSubmit}>
      <div className="create-account">Create Account</div>
      <Label title={'First Name'} type={'firstName'} value={userInput} change={setUserInput} />
      <Label title={'Last Name'} type={'lastName'} value={userInput} change={setUserInput} />
      <Label title={'Email'} type={'email'} value={userInput} change={setUserInput} />
      <Label title={'Password'} type={'password'} value={userInput} change={setUserInput} />
      <Label title={'Occupation'} type={'occupation'} value={userInput} change={setUserInput} data={dropDownData.occupations} />
      <Label title={'State'} type={'state'} value={userInput} change={setUserInput} data={dropDownData.states} />
      <button>Sign Up</button>
    </form>
    </>
  );
}

export default App;
