import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};
