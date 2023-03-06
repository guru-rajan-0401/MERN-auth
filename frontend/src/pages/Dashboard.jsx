import React from "react";


function Dashboard() {
  const name=
  typeof window != 'undefined' && localStorage.getItem('name');
  return   <div>`Welcome  to the dashboard page {name}`</div>;
}

export default Dashboard;
