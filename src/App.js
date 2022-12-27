import Navigation from "./Components/Router/Navigation/Navigation.component";
import Home from "./Components/Router/Home.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/Router/signIn/signIn.component";
const Shop = () => {
  return <h1>Hi, I am Shopping page...!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
