function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  
  function validate(field,label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin(){
    console.log(email,password);
    if(!validate(email, 'email'))         return;
    if(!validate(password,  'passwrod'))  return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }
  
  
  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      
      textcolor="black"
      header="Login"
      status={status}
      body={show ? (
        <>
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-dark" onClick={handleLogin}>Login</button>
        </>
      ):(
        <>
        <h5>Login Successful!</h5>
        
        </>
      )}
    />
  )
}

export default Login