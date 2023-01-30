import useUniqueId from "../hooks/useId";
import HomePage from "../pages/HomePage";
import PropertiesPage from "../pages/PropertiesPage";
const Navbar = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    hidden: false,
    private: false,
    element: <HomePage />,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    hidden: false,
    private: false,
    element: <PropertiesPage />,
  },
];
export default Navbar;
