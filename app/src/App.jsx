import { Container } from "react-bootstrap";
//import ProjectsTable from "./components/ProjectsTable/ProjectsTable";
// import AddNewProject from "./components/AddNewProject/AddNewProject";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
// import AddNewVisit from "./components/AddNewVisit/AddNewVisit";

export default function App() {
  return (
    <Container dir="rtl" className="text-center">
      {/* <ProjectsTable /> */}
      <ProjectInfo />
      {/* <AddNewProject /> */}
      {/* <AddNewVisit /> */}
    </Container>
  );
}
