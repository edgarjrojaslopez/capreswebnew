import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-hero-pattern h-screen w-full ">
      <div className="mix-blend-overlay flex w-full items-center justify-center h-screen bg-blue-50">
        <Outlet/>
      </div>
      
    </div>
  );
};

export default AuthLayout;
