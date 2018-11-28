import React, { Component } from "react";
import AdminLayout from "../../HOC/AdminLayout";
export class Dashboard extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="user_dashboard">
          <div>dashboard</div>
        </div>
      </AdminLayout>
    );
  }
}

export default Dashboard;
