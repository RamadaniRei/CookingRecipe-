import { FaHome } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="flex">
      <aside className="flex h-screen w-72 bg-white justify-center">
        <div className="flex flex-col justify-between ">
          <div className=" ">
            <img
              src="../src/assets/output-onlinepngtools.png"
              alt="cooking logo"
              className="w-30 h-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row">
              <FaHome className="inline text-lg mb-1 mr-1 h-6 w-6" />
              <div className="text-md">Home</div>
            </div>
            <div className="flex flex-row">
              <MdOutlineAccountCircle className="inline text-lg mb-1 mr-1 h-6 w-6" />
              <div className="text-md">Profile</div>
            </div>
            <div className="flex flex-row">
              <PiCookingPotBold className="inline text-lg mb-1 mr-1 h-6 w-6" />
              <div className="text-md">Add new recipe</div>
            </div>
          </div>
          <div className="">Created by Rei Ramadani</div>
        </div>
      </aside>
      <HomePage />
    </div>
  );
}

export default App;
