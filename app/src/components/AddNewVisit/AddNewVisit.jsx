import { Container, Table, Form } from "react-bootstrap";
import { Input, InputSelect } from "../AddNewProject/AddNewProject";
import PropTypes from "prop-types";
VisitForm.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};
TableVisitForm.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};
InputTextArea.propTypes = {
  label: PropTypes.string,
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
const existOrNot = [
  { label: "إختر", id: "-1" },
  { label: "موجود", id: "1" },
  { label: "غير موجود", id: "0" },
];
export default function AddNewVisit() {
  return (
    <Container className="mt-4 mb-4 text-center">
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
      <TableVisitForm
        title="جدول تجريبي"
        list={checkSupervisionCrewEquipments}
      />
      <InputTextArea label="مطالعات جهة الترخيص: بلدية" />
      <InputTextArea label="مطالعات وزارة العمل" />
      <InputTextArea label="عند زيارة (المشروع) المذكور أعلاه بحضور اعضاء لجنة الكشف تبين لنا التالي:" />
      <InputTextArea label="ملاحظات نهائية عن وضع المشروع:" />
      <Names />
    </Container>
  );
}
function VisitForm({ title, list }) {
  return (
    <Container className="mt-5 mb-6">
      <TableVisitForm title={title} list={list} />
      <InputTextArea label={` ملاحظات عامة عن ${title}`} />
    </Container>
  );
}
function TableVisitForm({ title, list }) {
  return (
    <Table className="table table-striped table-responsive table-bordered  table-sm mt-5 mb-6">
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
            <td>{<InputSelect label="" list={existOrNot} />}</td>
            <td>{<Input label="ملاحظات" />}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
function DateTimePickerComponent() {
  return (
    <Container>
      <Input type="date" id="datePicker" />
      <Input type="time" id="TimePicker" />
    </Container>
  );
}
function InputTextArea({ label }) {
  return (
    <Container className=" mt-5 ">
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
    </Container>
  );
}
function Names() {
  return (
    <Container className="mt-5 ">
      <Input label="الاسم الأول" id="name1" />
      <Input label="الاسم الثاني" id="name2" />
      <Input label="الاسم الثالث" id="name3" />
      <Input label="الاسم الرابع" id="name4" />
    </Container>
  );
}
