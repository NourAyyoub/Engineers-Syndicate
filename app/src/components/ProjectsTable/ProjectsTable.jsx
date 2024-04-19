import { useState } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
export default function ProjectsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("project_number");

  const projects = [
    {
      id: 1,
      project_number: "70128A",
      project_name: "مشروع الفندق الجديد",
      governorate: "عمان",
      widget: "B3",
      the_basin: "وادي الرمم",
      region: "طريق الملك عبدالله",
      area: "1200",
      designing_engineering_office: "مكتب هندسي B",
    },
    {
      id: 2,
      project_number: "5123B",
      project_name: "مشروع الشقق السكنية",
      governorate: "عمان",
      widget: "C5",
      the_basin: "وادي السيل",
      region: "شارع الأمير محمد",
      area: "800",
      designing_engineering_office: "مكتب هندسي A",
    },
    {
      id: 3,
      project_number: "6345C",
      project_name: "مشروع المول التجاري",
      governorate: "عمان",
      widget: "A1",
      the_basin: "وادي الجديد",
      region: "شارع الملك فيصل",
      area: "1000",
      designing_engineering_office: "مكتب هندسي C",
    },
    {
      id: 4,
      project_number: "6124N",
      project_name: " أيوب",
      governorate: "نابلس",
      widget: "A1",
      the_basin: "راس العين",
      region: "شارع أ",
      area: "400",
      designing_engineering_office: "مكتب هندسي أ",
    },
    {
      id: 5,
      project_number: "2344N",
      project_name: " بسيب",
      governorate: "نابلس",
      widget: "A31",
      the_basin: "راس العين",
      region: "شارع أ",
      area: "4500",
      designing_engineering_office: "مكتب هندسي أ",
    },
    {
      id: 6,
      project_number: "1179I",
      project_name: "مشروع الطاقة الشمسية في الهند",
      governorate: "نيودلهي",
      widget: "F4",
      the_basin: "يامونا",
      region: "جنوب دلهي",
      area: "700",
      designing_engineering_office: "مكتب هندسي F",
    },
    {
      id: 7,
      project_number: "12910J",
      project_name: "مشروع الميناء البحري في اليابان",
      governorate: "طوكيو",
      widget: "G6",
      the_basin: "طوكيو",
      region: "شينجوكو",
      area: "1800",
      designing_engineering_office: "مكتب هندسي G",
    },
    {
      id: 8,
      project_number: "131112K",
      project_name: "مشروع المستشفى الحديث في استراليا",
      governorate: "سيدني",
      widget: "H3",
      the_basin: "سيدني هاربر",
      region: "دارلينغ هاربر",
      area: "950",
      designing_engineering_office: "مكتب هندسي H",
    },
    {
      id: 9,
      project_number: "141213L",
      project_name: "مشروع الطاقة الرياحية في السويد",
      governorate: "ستوكهولم",
      widget: "I1",
      the_basin: "مالارين",
      region: "جاملا ستان",
      area: "1200",
      designing_engineering_office: "مكتب هندسي I",
    },
    {
      id: 10,
      project_number: "151314M",
      project_name: "مشروع البنية التحتية في البرازيل",
      governorate: "برازيليا",
      widget: "J2",
      the_basin: "بارانا",
      region: "سيتوريو هستوريكو",
      area: "1300",
      designing_engineering_office: "مكتب هندسي J",
    },
    {
      id: 11,
      project_number: "161415N",
      project_name: "مشروع الصناعات الثقيلة في كوريا الجنوبية",
      governorate: "سيؤول",
      widget: "K5",
      the_basin: "هان",
      region: "جانجنام",
      area: "1100",
      designing_engineering_office: "مكتب هندسي K",
    },
    {
      id: 12,
      project_number: "171516O",
      project_name: "مشروع الطرق السريعة في كندا",
      governorate: "تورونتو",
      widget: "L3",
      the_basin: "أونتاريو",
      region: "داونتاون",
      area: "850",
      designing_engineering_office: "مكتب هندسي L",
    },
    {
      id: 13,
      project_number: "181617P",
      project_name: "مشروع الطاقة النووية في روسيا",
      governorate: "موسكو",
      widget: "M1",
      the_basin: "موسكو",
      region: "الكرملين",
      area: "1600",
      designing_engineering_office: "مكتب هندسي M",
    },
    {
      id: 14,
      project_number: "191718Q",
      project_name: "مشروع المطار الدولي في جنوب أفريقيا",
      governorate: "جوهانسبرج",
      widget: "N2",
      the_basin: "فال",
      region: "سانتون",
      area: "1400",
      designing_engineering_office: "مكتب هندسي N",
    },
    {
      id: 15,
      project_number: "201819R",
      project_name: "مشروع الأبنية العالية في ماليزيا",
      governorate: "كوالالمبور",
      widget: "O4",
      the_basin: "كلانج",
      region: "بانغسار",
      area: "950",
      designing_engineering_office: "مكتب هندسي O",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project[searchType].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchTypes = [
    { value: "project_number", label: "البحث حسب رقم المشروع" },
    { value: "project_name", label: "البحث حسب اسم المشروع" },
    { value: "governorate", label: "البحث حسب المحافظة" },
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={6} className="mb-3">
          <Form.Select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            {searchTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Control
            type="text"
            placeholder="ابحث هنا..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      <div style={{ overflow: "scroll" }}>
        <Table striped bordered className="text-center align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>رقم المشروع</th>
              <th>اسم المشروع</th>
              <th>المحافظة</th>
              <th>القطعة</th>
              <th>الحوض</th>
              <th>المنطقة</th>
              <th>المساحة (متر مربع)</th>
              <th>اسم المكتب الهندسي المصمم</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={project.project_number}>
                <td>{index + 1}</td>
                <td>{project.project_number}</td>
                <td>{project.project_name}</td>
                <td>{project.governorate}</td>
                <td>{project.widget}</td>
                <td>{project.the_basin}</td>
                <td>{project.region}</td>
                <td>{project.area}</td>
                <td>{project.designing_engineering_office}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
