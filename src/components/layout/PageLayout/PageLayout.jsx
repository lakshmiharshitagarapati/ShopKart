import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}