import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjects } from "./components/NoProjects";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { SelectedProject } from "./components/selectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //when we are not adding any new projects
    projects: [], //contains list of projects added
    tasks: [], // tasks for each project
  });

  // TASKS
  const handleAddTask = (incomingTask) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: incomingTask,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {

      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });    
  }

  // PROJECTS
  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  const handleAddProject = (project) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  const handleCancleAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleShowProjectDetails = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };
  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      addTasks={handleAddTask}
      onDeleteTask={handleDeleteTask} 
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjects onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onCancle={handleCancleAddProject} onAdd={handleAddProject} />
    );
  }

  return (
    <main className=" h-screen mt-8 flex gap-2">
      <ProjectSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleShowProjectDetails}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
