import "./styles.css";
import Movies from "./components/Movies.jsx";
import Customers from "./components/Customers.jsx";
import NotFound from "./components/NotFound.jsx";
import Rentals from "./components/Rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesForm from "./components/MoviesForm";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MoviesForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}
