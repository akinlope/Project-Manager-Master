import React, { useState } from "react";
import { SideBar } from "./components/SideBar";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { AddProject } from "./components/AddProject";
import { ViewSingleProject } from "./components/ViewSingleProject";

export const App = () => {
  const [projectState, setProjectState] = useState({
    projectCurrentState: null,
    projects: [],
    tasks: [],
  });

  // TASKS
  const addTask = (task) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.projectCurrentState,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const deleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  // PROJECTS
  const addProject = (data) => {
    const projectId = Math.random();
    const projectData = {
      ...data,
      id: projectId,
    };
    setProjectState((prevState) => {
      return {
        projectCurrentState: null,
        projects: [projectData, ...prevState.projects],
        tasks: [...prevState.tasks],
      };
    });
  };
  const deleteProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: null,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  };
  const openAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: undefined,
      };
    });
  };
  const closeAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: null,
      };
    });
  };
  const singleProject = (id) => {
    // console.log("clicked....", id)
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectCurrentState: id,
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (proj) => proj.id === projectState.projectCurrentState
  );

  let outlet = (
    <ViewSingleProject
      tasks={projectState.tasks}
      onAddTask={addTask}
      onDeleteTask={deleteTask}
      singleProject={selectedProject}
      onDeleteProject={deleteProject}
    />
  );
  if (projectState.projectCurrentState === null) {
    outlet = <NoProjectSelected openAddProject={openAddProject} />;
  } else if (projectState.projectCurrentState === undefined) {
    outlet = (
      <AddProject addProject={addProject} closeAddProject={closeAddProject} />
    );
  }
  // console.log(projectState)
  return (
    <div className=" flex h-screen gap-2 ">
      <SideBar
        openToAddProject={openAddProject}
        projects={projectState.projects}
        singleProject={singleProject}
      />
      {outlet}
    </div>
  );
};
