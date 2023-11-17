import { useState } from 'react'
import {Input,Button} from 'antd';
import { useNavigate } from 'react-router-dom';

import './checkAdminauth.css'

export default function CheckAdminAuth() {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState({
        username: 'admin',
        password: 'admin'
    });

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const checkAdminAuth = () => {
        if(username === admin.username && password === admin.password) {
            console.log('admin auth success')
            navigate('/admin')
        }
        else{
           setError(true);
         }
        }
       



    return (
        <div className='checkAdminauthContainer'>
            <h3 className='loginAsAdminHeadText'>Log in as an Admin ⚙️</h3>
            <Input onChange={(e)=>{setUsername(e.target.value)}} className='checkAdminauthitself' placeholder="Username" type='text'/>
            <Input onChange={(e)=>{setPassword(e.target.value)}} className='checkAdminauthitself' placeholder="password" type='password'/>
            <Button onClick={checkAdminAuth} className='checkAdminauthitself' type='primary'>Login</Button>
            {

                <div className='errorMsg'>
                    {error && <p>Invalid Username or Password !</p>}
                </div>
            }
        </div>
    )

}