import React,{useState} from 'react'

export default function Singup() {
  const [credential,updatecredential]=useState({name:'',email:'',password:''})
  const onchange=(e)=>{updatecredential({...credential,[e.target.name]:e.target.value})}
  const signupfun=async (e)=>{
    e.preventDefault();
    const requestOptions = {
        method: 'post',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name":credential.name,
          "email": credential.email,
          "password": credential.password
        })
      };
      const signtoken=await fetch('http://localhost:7000/api/auth/signup', requestOptions)
      const json =await signtoken.json()
      console.log(json);
}
  return (
    <form className='container' onSubmit={signupfun}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="name" className="form-control my-3" id="name" aria-describedby="emailHelp" placeholder="Enter email" value={credential.name} name='name' onChange={onchange} minLength={3} required/>
        <label htmlFor="InputEmail1">Email address</label>
        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={credential.email} name='email' onChange={onchange} minLength={5} required/>
        <small id="emailHelp" className="form-text text-muted my-3">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group my-3">
        <label htmlFor="InputPassword1">Password</label>
        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" value={credential.password} name='password' onChange={onchange} minLength={5} required/>
      </div>
      <button type="submit" className="btn btn-primary my-3">Submit</button>
    </form>

  )
}
