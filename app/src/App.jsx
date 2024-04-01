// import AddNewProject from "./components/AddNewProject/AddNewProject";
import { Container } from "react-bootstrap";
import AddNewVisit from "./components/AddNewVisit/AddNewVisit";
// import ProkjectInfo from "./components/ProjectInfo/ProjectInfo";
// import ProjectsTable from "./components/ProjectsTable/ProjectsTable";

export default function App() {
  return (
    <Container dir="rtl" className="text-center">
      {/* <ProjectsTable /> */}
      {/* <ProjectInfo /> */}
      {/* <AddNewProject /> */}
      <AddNewVisit />
    </Container>
  );
}
