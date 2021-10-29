import {Link} from "react-router-dom"

function NavBar(){
  return(
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand">Bad Bank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/home" className="nav-link" aria-current="page">Home</Link>
        <Link to="/create-account" className="nav-link" aria-current="page" href="#/createaccount/">Create Account</Link>
        <Link to="/login" className="nav-link" aria-current="page" href="#/login/">Login</Link>
        <Link to="/deposit" className="nav-link" aria-current="page" href="#/deposit/">Deposit</Link>
        <Link to="/withdraw" className="nav-link" aria-current="page" href="#/withdraw">Withdraw</Link>
        <Link to="/all-data" className="nav-link" aria-current="page" href="#/alldata">All Data</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default NavBar