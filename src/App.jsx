import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage";
import Profile from "./Components/Profile";
import SideMenu from "./Components/nav/SideMenu";
function App() {
  return (
    <BrowserRouter>
      <div className="flex ">
        <SideMenu />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Add" element={<AddRecipePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
