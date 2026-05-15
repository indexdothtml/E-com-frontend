import { Outlet } from "react-router";
import { Link } from "react-router";

function App() {
  return (
    <main className="inter-regular">
      <header>
        <nav className="flex justify-between items-center p-4 shadow">
          <div className="text-2xl font-bold">
            <span>E-</span>
            <span className="text-blue-500">com</span>
          </div>
          <div>
            <ul className="flex gap-4 text-sm font-semibold">
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}

export default App;
