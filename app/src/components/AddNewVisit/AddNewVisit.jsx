import { Container, Table } from "react-bootstrap";

import PropTypes from "prop-types";
VisitForm.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};
const checkTheEquipment = [
  { label: "مكتب خاص بالإشراف", check: "special_supervision_office" },
  { label: "مستودع للمواد", check: "materials_warehouse" },
  { label: "غرفة للمعدات", check: "equipment_room" },
  { label: "مرافق الإطفاء", check: "fire_fighting_facilities" },
  { label: "مرافق السلامة", check: "safety_facilities" },
  { label: "غرفة التحكم", check: "control_room" },
  { label: "مكتب إداري", check: "administrative_office" },
];
const checkArchitecturalPlans = [
  { label: "مخطط الواجهات الخارجية", check: "exterior_elevations" },
  { label: "مخططات الطوابق", check: "floor_plans" },
  { label: "مخطط الأسقف", check: "roof_plans" },
  { label: "مخططات التفاصيل الداخلية", check: "interior_details" },
  { label: "مخططات التفاصيل الخارجية", check: "exterior_details" },
  { label: "مخططات الواجهات الداخلية", check: "interior_elevations" },
  { label: "مخططات الأثاث والتجهيزات", check: "furniture_and_fixtures" },
];
const checkSupervisionCrewEquipments = [
  { label: "أجهزة الاتصالات", check: "communication_devices" },
  { label: "أجهزة الحماية الشخصية", check: "personal_protective_equipment" },
  {
    label: "أجهزة القياس والمراقبة",
    check: "measurement_and_monitoring_devices",
  },
  {
    label: "المعدات اللازمة للرصد والمتابعة",
    check: "equipment_for_monitoring_and_tracking",
  },
  {
    label: "الأدوات اللازمة للتفتيش والفحص",
    check: "tools_for_inspection_and_examination",
  },
  {
    label: "الأدوات والمعدات الأساسية للعمليات اليومية",
    check: "essential_tools_and_equipment_for_daily_operations",
  },
  {
    label: "مستلزمات السلامة والإسعافات الأولية",
    check: "safety_supplies_and_first_aid_kits",
  },
];
export default function AddNewVisit() {
  return (
    <Container dir="rtl" className="container-xl mt-4 mb-4 mx-auto text-center">
      <DateTimePickerComponent />
      <VisitForm title="تجهيزات الموقع" list={checkTheEquipment} />
      <VisitForm
        title="التحقق من المخططات الهندسية و التقارير الواجب توافرها في الموقع"
        list={checkArchitecturalPlans}
      />
      <VisitForm
        title="تجهيز مقر طاقم الإشراف"
        list={checkSupervisionCrewEquipments}
      />
    </Container>
  );
}
function VisitForm({ title, list }) {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={4}>{title}</th>
        </tr>
      </thead>
      <tbody>
        {list.map((ele, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{ele.label}</td>
            <td>{ele.check}</td>
            <td>{ele.check}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
function DateTimePickerComponent() {
  return (
    <div className="form-outline datetimepicker">
      <input
        type="date"
        className="form-control"
        value=""
        id="datetimepickerExample"
      />
      <label htmlFor="datetimepickerExample" className="form-label">
        Select Date and Time
      </label>
    </div>
  );
}
