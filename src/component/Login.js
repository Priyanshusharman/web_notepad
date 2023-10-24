import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let navigation=useNavigate();
    const [credential,updatecredential]=useState({
        email:"",
        password:""
    })
    const onchange=(e)=>{
        updatecredential({...credential,[e.target.name]:e.target.value})
    }
    const loginfun=async (e)=>{
        e.preventDefault();
        const requestOptions = {
            method: 'post',
            headers:
            {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": credential.email,
              "password": credential.password
            })
          };
          const ltoken=await fetch('http://localhost:7000/api/auth/login', requestOptions)
          const json =await ltoken.json();
          if(json.success){
            localStorage.setItem('token',json.token);
            navigation('/')
          }
          console.log(json);

    }
    return (
        <form className='container' onSubmit={loginfun}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={credential.email} name='email' onChange={onchange} minLength={5} required/>
                <small id="emailHelp" className="form-text text-muted my-3">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control my-3" id="exampleInputPassword1" placeholder="Password" value={credential.password} name='password' onChange={onchange} minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
    )
}
