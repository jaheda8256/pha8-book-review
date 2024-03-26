import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";



const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           {/* packet */}
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;