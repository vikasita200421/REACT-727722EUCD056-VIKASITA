import React, {useState, useEffect} from 'react'
import {FormControl, InputLabel, Input, Button, FormControlLabel, Checkbox, FormLabel, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useStyle } from './Create';
import axios from 'axios';
import { API_URL } from '../Constants/URL';

const Update = () => {
  const classes = useStyle()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState('')

  const addFullName = (e) => {
    setFullName(e.target.value)
  }
  const addEmail = (e) => {
      setEmail(e.target.value)    
  }
  const addMobile = (e) => {
      setMobile(e.target.value)
  }
  const Checked = () => {
      setToggle(!toggle)
  }

  const updateUser = async () => {
    await axios.put(API_URL + id, {
      fullName,
      email,
      mobile,
      toggle
    })
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setFullName(localStorage.getItem('fullName'))
    setEmail(localStorage.getItem('email'))
    setMobile(localStorage.getItem('mobile'))
    setToggle(localStorage.getItem('toggle'))
}, [])

  return (
    <>
    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/read"><Button variant='contained' color='primary'>View Contacts</Button></Link>
    <form onSubmit={updateUser} className={classes.formStyle}>
        <FormLabel component="legend">Create New Contact</FormLabel>
        <FormControl className={classes.inputForm}>
            <InputLabel>Full Name</InputLabel>
            <Input value={fullName} onChange={addFullName} placeholder='Enter Full Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Email</InputLabel>
            <Input value={email}  onChange={addEmail} placeholder='Enter Email'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Mobile</InputLabel>
            <Input value={mobile}  onChange={addMobile} placeholder={'Enter Mobile Number'}/>
        </FormControl>
        <FormControlLabel className={classes.formControlLabel} control={<Checkbox value={toggle} onChange={Checked}/>} label={<Typography className={classes.formControlLabel}>Add to Favorites</Typography>} /><br/>
        <Link style={{textDecoration: 'none', color: 'inherit'}} to='/read'><Button type='submit' variant='contained' color='secondary' className={classes.myBtn} onClick={updateUser}>Commit Changes</Button></Link>
    </form>
    </>

  )
}

export default Update