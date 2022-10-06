import User from"./pages/User";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/User" element={<User />}/>
          <Route path="/Contacts" element={<Contacts />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}