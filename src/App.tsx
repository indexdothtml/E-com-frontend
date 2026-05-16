import { Outlet } from "react-router";
import { Link } from "react-router";
import { ArrowBigLeft, ShoppingCart } from "lucide-react";

function App() {
  return (
    <main className="inter-regular">
      <header className="sticky bg-white top-0">
        <nav className="flex justify-between items-center p-4 shadow">
          <div className="text-2xl font-bold">
            <span>E-</span>
            <span className="text-blue-500">com</span>
          </div>
          <div>
            <ul className="flex gap-4 text-sm font-semibold">
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/" className="flex items-center">
                  <ArrowBigLeft className="w-5" /> Home
                </Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link to="/cart" className="flex items-center">
                  <ShoppingCart className="w-5" /> Cart
                </Link>
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
