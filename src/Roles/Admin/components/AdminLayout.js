import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts";

// admin pages
const AdminDashboards = lazy(() => import("../pages/AdminDashboards"));
const Brokers = lazy(() => import("../pages/Brokers"));
const CreateBrokers = lazy(() => import("../pages/CreateBrokers"));
// const WireTransfers = lazy(() => import("./Roles/Admin/pages/WireTranfers"));
// const CreditBuyers = lazy(() => import("./Roles/Admin/pages/CreditBuyers"));
// const LandOwners = lazy(() => import("./Roles/Admin/pages/LandOwners"));
// const AuditedListings = lazy(() =>
//   import("./Roles/Admin/pages/AuditedListings")
// );
// const NewListings = lazy(() => import("./Roles/Admin/pages/NewListings"));
// const CarbonListings = lazy(() => import("./Roles/Admin/pages/CarbonListings"));
// const NewCarbonListings = lazy(() =>
//   import("./Roles/Admin/pages/NewCarbonListings")
// );

function AdminLayout() {
  return (
    <Layouts>
      <Routes>
        <Route path="dashboard/" element={<AdminDashboards />} />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/createBroker" element={<CreateBrokers />} />

        {/* <Route exact path="/carbon-listings">
          <AdminLayout>
            <CarbonListings />
          </AdminLayout>
        </Route> */}

        {/* <Route exact path="/wire-transfers">
          <AdminLayout>
            <WireTransfers />
          </AdminLayout>
        </Route> */}
        {/* <Route exact path="/credit-buyers">
          <AdminLayout>
            <CreditBuyers />
          </AdminLayout>
        </Route> */}
        {/* <Route exact path="/land-owners">
          <AdminLayout>
            <LandOwners />
          </AdminLayout>
        </Route> */}
        {/* <Route exact path="/audited-listings">
          <AdminLayout>
            <AuditedListings />
          </AdminLayout>
        </Route> */}
        {/* <Route exact path="/new-listings">
          <AdminLayout>
            <NewListings />
          </AdminLayout>
        </Route> */}
      </Routes>
    </Layouts>
  );
}

export default AdminLayout;
