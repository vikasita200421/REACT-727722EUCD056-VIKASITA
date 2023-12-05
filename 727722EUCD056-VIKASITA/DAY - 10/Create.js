import React, { useState } from 'react'
import {FormControl, InputLabel, Input, makeStyles, Button, FormControlLabel, Checkbox, FormLabel, Typography} from '@material-ui/core'
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { Link } from 'react-router-dom';

export const useStyle = makeStyles({
    formStyle: {
        width: '200px',
        height: '300px',
        paddingLeft: '30px',
        paddingTop: '30px',
        paddingBottom: '30px',
        borderRadius: '10px',
        marginTop: '100px',
        backgroundColor: 'white'
    },
    myBtn:{
        marginTop: '20px',
        width:'auto'
    },
    formControlLabel:{
        color: 'black',
        marginTop: 'auto'
    },
    inputForm:{
        marginTop: '10px'
    },
    mb:{
        marginBottom: '20px'
    }
});

function Create() {
    const classes = useStyle();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [toggle, setToggle] = useState(false);

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
    const PostData = async () => {
        await axios.post(API_URL, {
            fullName,
            email,
            mobile,
            toggle
        })
    }
    
  return (
    <div>
    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/read"><Button variant='contained' color='primary'>View Contacts</Button></Link>
    <form onSubmit={PostData} className={classes.formStyle}>
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
            <Input value={mobile}  onChange={addMobile} placeholder='Enter Mobile Number'/>
        </FormControl>
        <FormControlLabel className={classes.formControlLabel} control={<Checkbox value={toggle}/>} onChange={Checked} label={<Typography className={classes.formControlLabel}>Add to Favorites</Typography>} /><br/>
        <Button type='submit' variant='contained' color='secondary' className={classes.myBtn} onClick={PostData}><Link style={{textDecoration: 'none', color: 'inherit'}} to='/read'>Submit</Link></Button>
    </form>
    </div>
  )
}

export default Create