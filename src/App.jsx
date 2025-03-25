import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./Layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./Layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CreateAds from "./pages/dashboard/CreateAds";
import VendorAds from "./pages/dashboard/VendorAds";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="/adverts" element={<Adverts />} />
          <Route path="adverts/:id" element={<SingleAd />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAds />} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="profile" element={<VendorAds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
