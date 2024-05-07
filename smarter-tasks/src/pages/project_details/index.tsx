import React, { Suspense } from "react";
import { TasksProvider } from "../../context/task/context";
import ProjectDetails from "./ProjectDetails";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ErrorBoundary>
      <Suspense fallback={<div>Loading Project Details...</div>}>
        <ProjectDetails />
        <Outlet />
      </Suspense>
      </ErrorBoundary>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;