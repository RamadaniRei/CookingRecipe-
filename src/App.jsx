import { FaHome } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage";
import Profile from "./Components/Profile";
function App() {
  return (
    <BrowserRouter>
      <div className="flex ">
        <aside className="flex h-screen min-w-72 bg-white justify-center py-5 ">
          <div className="flex flex-col justify-between h-full ">
            <div className="flex flex-row justify-center mb-10 ">
              <img
                src="../src/assets/output-onlinepngtools.png"
                alt="cooking logo"
                className="w-10 h-10"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Link to="/">
                <div className="flex flex-row">
                  <FaHome className="inline text-lg mb-1 mr-1 h-6 w-6" />
                  <div className="text-md">Home</div>
                </div>
              </Link>
              <Link to="Profile">
                <div className="flex flex-row">
                  <MdOutlineAccountCircle className="inline text-lg mb-1 mr-1 h-6 w-6" />
                  <div className="text-md">Profile</div>
                </div>
              </Link>
              <Link to="Add">
                <div className="flex flex-row">
                  <PiCookingPotBold className="inline text-lg mb-1 mr-1 h-6 w-6" />
                  <div className="text-md">Add new recipe</div>
                </div>
              </Link>
            </div>
            <div className="">Created by Rei Ramadani</div>
          </div>
        </aside>
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
