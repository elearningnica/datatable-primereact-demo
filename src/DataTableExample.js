import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { TabView, TabPanel } from "primereact/tabview";

const DataTableExample = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Posts">
          <div>
            <DataTable
              value={posts}
              responsiveLayout="scroll"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              dataKey="id"
              paginator
              emptyMessage="No data found."
              className="datatable-responsive"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
              rows={10}
            >
              <Column field="userId" sortable header="userId"></Column>
              <Column field="id" sortable header="id"></Column>
              <Column field="title" sortable header="title"></Column>
              <Column field="body" sortable header="body"></Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="Users">
          <div>
            <DataTable
              value={users}
              responsiveLayout="scroll"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              dataKey="id"
              paginator
              emptyMessage="No data found."
              className="datatable-responsive"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
              rows={10}
            >
              <Column field="id" sortable header="id"></Column>
              <Column field="name" sortable header="name"></Column>
              <Column field="username" sortable header="username"></Column>
              <Column field="email" sortable header="email"></Column>
              <Column field="phone" sortable header="phone"></Column>
              <Column field="website" sortable header="website"></Column>
            </DataTable>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default DataTableExample;
