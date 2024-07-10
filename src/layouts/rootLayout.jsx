import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
