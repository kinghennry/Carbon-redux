import React, { lazy, Suspense } from "react";
import SnackbarProvider from "react-simple-snackbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

// page imports
const Home = lazy(() => import("./pages/Home/Home"));
const CarbonCredits = lazy(() => import("./pages/Credits/CarbonCredits"));
const About = lazy(() => import("./pages/About/About"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const CustomerPurchase = lazy(() => import("./pages/Auth/CustomerPurchase"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// layouts
const CustomerLayout = lazy(() =>
  import("./Roles/Customer/components/CustomerLayout")
);
const BrokerLayout = lazy(() =>
  import("./Roles/Broker/components/BrokerLayout")
);
const AdminLayout = lazy(() => import("./Roles/Admin/components/AdminLayout"));
const ArboristLayout = lazy(() =>
  import("./Roles/Arborist/components/ArboristLayout")
);
const CompanyLayout = lazy(() =>
  import("./Roles/Company/components/CompanyLayout")
);

function App() {
  const userr = {
    role: "customer",
    tip: "broker",
    boss: "admin",
    account: "Arborist",
    id: "company",
  };

  return (
    <>
      <SnackbarProvider>
        <Suspense fallback={<Loading />}>
          <ScrollToTop>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/customer-purchase" element={<CustomerPurchase />} />
              <Route path="/carbon/*" element={<CarbonCredits />} />

              {/* Customer Routes */}
              <Route
                path="/customer/*"
                element={
                  userr.role === "customer" ? (
                    <CustomerLayout />
                  ) : (
                    <Navigate to={-1} />
                  )
                }
              />

              {/* Broker Routes */}
              <Route
                path="/broker/*"
                element={
                  userr.tip === "broker" ? (
                    <BrokerLayout />
                  ) : (
                    <Navigate to={-1} />
                  )
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/*"
                element={
                  userr.boss === "admin" ? (
                    <AdminLayout />
                  ) : (
                    <Navigate to={-1} />
                  )
                }
              />

              {/* Arborist Routes */}
              <Route
                path="/Arborist/*"
                element={
                  userr.account === "Arborist" ? (
                    <ArboristLayout />
                  ) : (
                    <Navigate to={-1} />
                  )
                }
              />

              {/* Company Routes */}
              <Route
                path="/company/*"
                element={
                  userr.id === "company" ? (
                    <CompanyLayout />
                  ) : (
                    <Navigate to={-1} />
                  )
                }
              />
            </Routes>
          </ScrollToTop>
        </Suspense>
      </SnackbarProvider>
    </>
  );
}

export default App;
