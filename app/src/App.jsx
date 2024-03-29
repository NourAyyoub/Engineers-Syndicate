// import AddNewProject from "./components/AddNewProject/AddNewProject";
import { Container } from "react-bootstrap";
import AddNewVisit from "./components/AddNewVisit/AddNewVisit";
// import ProjectInfo from "./components/ProjectInfo/ProjectInfo";

// import ProjectsTable from "./components/ProjectsTable/ProjectsTable";
export default function App() {
  return (
    <Container dir="rtl" className="container-xl mt-4 mb-4 mx-auto text-center">
      {/* <ProjectsTable /> */}
      {/* <ProjectInfo /> */}
      <AddNewVisit />
      {/* <AddNewProject /> */}
    </Container>
  );
}
