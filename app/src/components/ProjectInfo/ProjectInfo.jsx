import { Card, Table, Button, Container } from "react-bootstrap";
const project = {
  id: 1,
  project_number: "70128A",
  project_name: "مشروع الفندق الجديد",
  governorate: "عمان",
  widget: "B3",
  the_basin: "وادي الرمم",
  region: "طريق الملك عبدالله",
  area: "1200",
  designing_engineering_office: "مكتب هندسي B",
  project_status: "متوقف",
  Laboratory_name: "قفغقف",
  engineer_name: "احمد",
  contractor_name: "اب هدهد",
};
const vists = [
  {
    visit_number: 1,
    visiting_day: "الإثنين",
    visiting_date: "2024-03-22 13:41:46",
  },
  {
    visit_number: 2,
    visiting_day: "الثلاثاء",
    visiting_date: "2024-03-23 10:20:15",
  },
  {
    visit_number: 3,
    visiting_day: "الأربعاء",
    visiting_date: "2024-03-24 14:05:30",
  },
  {
    visit_number: 4,
    visiting_day: "الخميس",
    visiting_date: "2024-03-25 09:55:12",
  },
  {
    visit_number: 5,
    visiting_day: "الجمعة",
    visiting_date: "2024-03-26 11:30:45",
  },
  {
    visit_number: 6,
    visiting_day: "السبت",
    visiting_date: "2024-03-27 15:10:20",
  },
  {
    visit_number: 7,
    visiting_day: "الأحد",
    visiting_date: "2024-03-28 12:25:55",
  },
  {
    visit_number: 8,
    visiting_day: "الإثنين",
    visiting_date: "2024-03-29 08:45:30",
  },
  {
    visit_number: 9,
    visiting_day: "الثلاثاء",
    visiting_date: "2024-03-30 16:00:10",
  },
  {
    visit_number: 10,
    visiting_day: "الأربعاء",
    visiting_date: "2024-03-31 09:15:40",
  },
  {
    visit_number: 11,
    visiting_day: "الخميس",
    visiting_date: "2024-04-01 13:20:25",
  },
  {
    visit_number: 12,
    visiting_day: "الجمعة",
    visiting_date: "2024-04-02 10:40:55",
  },
];
export default function ProjectInfo() {
  return (
    <>
      <InfoTable />
      <Buttons />
      <VistsTable />
    </>
  );
}
function InfoTable() {
  return (
    <>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-primary fs-1">
            {project.project_name}
          </Card.Title>
          <Card.Text>
            <p>رقم المشروع: {project.project_number}</p>
            <p>المحافظة: {project.governorate}</p>
            <p>مكتب الهندسة المصمم: {project.designing_engineering_office}</p>
            <p>القطعة: {project.widget}</p>
            <p>الحوض: {project.the_basin}</p>
            <p>المنطقة: {project.region}</p>
            <p>مساحة المشروع: {project.area}</p>
            <p>حالة المشروع: {project.project_status}</p>
            <p>اسم المختبر: {project.Laboratory_name}</p>
            <p>اسم المهندس: {project.engineer_name}</p>
            <p>اسم المقاول: {project.contractor_name}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
function Buttons() {
  return (
    <Container>
      <Button variant="primary">إنشاء زيارة جديدة</Button>
      <Button variant="primary" className="m-2">
        تعديل بيانات المشروع
      </Button>
      <Button variant="danger" className="m-2">
        حذف ملف المشروع
      </Button>
    </Container>
  );
}
function VistsTable() {
  return (
    <Container>
      <h3>زيارات الخاصة بالمشروع</h3>
      <Table
        cstyle={{ overflow: "scroll" }}
        className="table table-striped table-responsive table-bordered  table-sm"
      >
        <thead>
          <tr>
            <th>رقم الزيارة</th>
            <th>اليوم</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {vists.map((vist) => (
            <tr key={vist.visit_number}>
              <td>{vist.visit_number}</td>
              <td>{vist.visiting_day}</td>
              <td>{vist.visiting_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
