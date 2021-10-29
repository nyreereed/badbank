import Home from "screens/home";
import CreateAccount from "screens/createaccount";
import Deposit from "screens/deposit";
import Withdraw from "screens/withdraw";
import Login from "screens/login";
import AllData from "screens/alldata";
import NavBar from "components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/deposit">
          <Deposit />
        </Route>
        <Route path="/withdraw">
          <Withdraw />
        </Route>
        <Route path="all-data">
          <AllData />
        </Route>
      </Switch>
    </>
  );
}

export default App;
