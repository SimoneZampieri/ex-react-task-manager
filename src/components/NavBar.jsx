import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">Task Manager</h1>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Lista Task
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 ${isActive ? "font-bold" : ""}`
            }
          >
            Aggiungi una Task
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
