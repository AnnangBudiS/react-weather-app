import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

const RootLayout = () => {
  return (
    <div className="gradient-circle text-gray-100 h-screen">
      <div className="container mx-auto">
        <Navbar />

        <main className="flex gap-6">
          <Sidebar />
          {/* <Sidebar /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
