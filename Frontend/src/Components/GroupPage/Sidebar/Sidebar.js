import React from "react";
import IndividualListItem from "./IndividualListItem";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="list-group align-items-center">
        <IndividualListItem
          title="Assignments"
          icon="bi bi-card-checklist icons"
        />
        <IndividualListItem title="Chat" icon="bi bi-chat-left-text icons" />
        <IndividualListItem title="Notes" icon="bi bi-card-text icons" />
        <IndividualListItem
          title="Attendance"
          icon="bi bi-person-check icons"
        />
        <IndividualListItem title="Progress" icon="bi bi-graph-up icons" />
        <IndividualListItem title="Links" icon="bi bi-link icons" />
      </div>
    </div>
  );
};

export default Sidebar;
