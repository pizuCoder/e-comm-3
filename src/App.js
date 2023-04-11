import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainNav from "./components/mainNav";
import ShopPage from "./components/Shop/ShopPage";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
