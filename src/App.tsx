import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import { UseAppSelector } from "./Hooks/reduxHooks";
import Login from "./Pages/Login/Login";

function App() {
  const user = UseAppSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
