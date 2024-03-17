import { useState } from "react";
export default function ProjectsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("projectNumber");

  const projects = [
    {
      id: 1,
      projectNumber: "70128A",
      projectName: "مشروع الفندق الجديد",
      governorate: "عمان",
      pieceOfLand: "B3",
      basin: "وادي الرمم",
      region: "طريق الملك عبدالله",
      area: "1200",
      engineeringOffice: "مكتب هندسي B",
    },
    {
      id: 2,
      projectNumber: "5123B",
      projectName: "مشروع الشقق السكنية",
      governorate: "عمان",
      pieceOfLand: "C5",
      basin: "وادي السيل",
      region: "شارع الأمير محمد",
      area: "800",
      engineeringOffice: "مكتب هندسي A",
    },
    {
      id: 3,
      projectNumber: "6345C",
      projectName: "مشروع المول التجاري",
      governorate: "عمان",
      pieceOfLand: "A1",
      basin: "وادي الجديد",
      region: "شارع الملك فيصل",
      area: "1000",
      engineeringOffice: "مكتب هندسي C",
    },
    {
      id: 4,
      projectNumber: "6124N",
      projectName: " أيوب",
      governorate: "نابلس",
      pieceOfLand: "A1",
      basin: "راس العين",
      region: "شارع أ",
      area: "400",
      engineeringOffice: "مكتب هندسي أ",
    },
    {
      id: 5,
      projectNumber: "2344N",
      projectName: " بسيب",
      governorate: "نابلس",
      pieceOfLand: "A31",
      basin: "راس العين",
      region: "شارع أ",
      area: "4500",
      engineeringOffice: "مكتب هندسي أ",
    },
    {
      id: 6,
      projectNumber: "1179I",
      projectName: "مشروع الطاقة الشمسية في الهند",
      governorate: "نيودلهي",
      pieceOfLand: "F4",
      basin: "يامونا",
      region: "جنوب دلهي",
      area: "700",
      engineeringOffice: "مكتب هندسي F",
    },
    {
      id: 7,
      projectNumber: "12910J",
      projectName: "مشروع الميناء البحري في اليابان",
      governorate: "طوكيو",
      pieceOfLand: "G6",
      basin: "طوكيو",
      region: "شينجوكو",
      area: "1800",
      engineeringOffice: "مكتب هندسي G",
    },
    {
      id: 8,
      projectNumber: "131112K",
      projectName: "مشروع المستشفى الحديث في استراليا",
      governorate: "سيدني",
      pieceOfLand: "H3",
      basin: "سيدني هاربر",
      region: "دارلينغ هاربر",
      area: "950",
      engineeringOffice: "مكتب هندسي H",
    },
    {
      id: 9,
      projectNumber: "141213L",
      projectName: "مشروع الطاقة الرياحية في السويد",
      governorate: "ستوكهولم",
      pieceOfLand: "I1",
      basin: "مالارين",
      region: "جاملا ستان",
      area: "1200",
      engineeringOffice: "مكتب هندسي I",
    },
    {
      id: 10,
      projectNumber: "151314M",
      projectName: "مشروع البنية التحتية في البرازيل",
      governorate: "برازيليا",
      pieceOfLand: "J2",
      basin: "بارانا",
      region: "سيتوريو هستوريكو",
      area: "1300",
      engineeringOffice: "مكتب هندسي J",
    },
    {
      id: 11,
      projectNumber: "161415N",
      projectName: "مشروع الصناعات الثقيلة في كوريا الجنوبية",
      governorate: "سيؤول",
      pieceOfLand: "K5",
      basin: "هان",
      region: "جانجنام",
      area: "1100",
      engineeringOffice: "مكتب هندسي K",
    },
    {
      id: 12,
      projectNumber: "171516O",
      projectName: "مشروع الطرق السريعة في كندا",
      governorate: "تورونتو",
      pieceOfLand: "L3",
      basin: "أونتاريو",
      region: "داونتاون",
      area: "850",
      engineeringOffice: "مكتب هندسي L",
    },
    {
      id: 13,
      projectNumber: "181617P",
      projectName: "مشروع الطاقة النووية في روسيا",
      governorate: "موسكو",
      pieceOfLand: "M1",
      basin: "موسكو",
      region: "الكرملين",
      area: "1600",
      engineeringOffice: "مكتب هندسي M",
    },
    {
      id: 14,
      projectNumber: "191718Q",
      projectName: "مشروع المطار الدولي في جنوب أفريقيا",
      governorate: "جوهانسبرج",
      pieceOfLand: "N2",
      basin: "فال",
      region: "سانتون",
      area: "1400",
      engineeringOffice: "مكتب هندسي N",
    },
    {
      id: 15,
      projectNumber: "201819R",
      projectName: "مشروع الأبنية العالية في ماليزيا",
      governorate: "كوالالمبور",
      pieceOfLand: "O4",
      basin: "كلانج",
      region: "بانغسار",
      area: "950",
      engineeringOffice: "مكتب هندسي O",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project[searchType].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchTypes = [
    { value: "projectNumber", label: "'البحث حسب 'رقم المشروع" },
    { value: "projectName", label: "'البحث حسب 'اسم المشروع" },
    { value: "governorate", label: "'البحث حسب 'المحافظة" },
  ];

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="ابحث هنا..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            id="searchType"
            className="form-select"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            {searchTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-responsive" style={{ overflow: "scroll" }}>
        <table className="table table-striped table-bordered text-center align-middle">
          <thead>
            <tr>
              <th scope="col">اسم المكتب الهندسي المصمم</th>
              <th scope="col">المساحة (متر مربع)</th>
              <th scope="col">المنطقة</th>
              <th scope="col">الحوض</th>
              <th scope="col">القطعة</th>
              <th scope="col">المحافظة</th>
              <th scope="col">اسم المشروع</th>
              <th scope="col">رقم المشروع</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <tr key={project.projectNumber}>
                <td>{project.engineeringOffice}</td>
                <td>{project.area}</td>
                <td>{project.region}</td>
                <td>{project.basin}</td>
                <td>{project.pieceOfLand}</td>
                <td>{project.governorate}</td>
                <td>{project.projectName}</td>
                <td>{project.projectNumber}</td>
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
