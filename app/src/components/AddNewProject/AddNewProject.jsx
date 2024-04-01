import Form from "react-bootstrap/Form";
import { Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};
OptionForInputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
InputSelect.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array.isRequired,
};
OptionInputRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
InputRadio.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
InputSpecialties.propTypes = {
  specialty: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const governorates = [
  { label: "نابلس", value: "nablus" },
  { label: "طوباس", value: "tubas" },
  { label: "رام الله والبيرة", value: "ramallah" },
  { label: "القدس", value: "jerusalem" },
  { label: "بيت لحم", value: "bethlehem" },
  { label: "سلفيت", value: "salfit" },
  { label: "جنين", value: "jenin" },
  { label: "طولكرم", value: "tulkarm" },
  { label: "قلقيلية", value: "qalqilya" },
  { label: "أريحا", value: "jericho" },
];

const building_classification = [
  { label: "درجةاولى أ", id: "1A" },
  { label: "درجة اولى ب", id: "1B" },
  { label: "درجة ثانية", id: "2" },
  { label: "درجة ثالثة", id: "3" },
  { label: "درجة رابعة", id: "4" },
  { label: "درجة خامسة", id: "5" },
];

const specialties = [
  { label: "تخصص العمارة", specialty: "architecture" },
  { label: "تخصص الإنشائي", specialty: "construction" },
  { label: "تخصص الكهرباء", specialty: "electricity" },
  { label: "تخصص لميكانيك", specialty: "mechanics" },
];
export default function AddNewProject() {
  const handleSendData = () => {};
  return (
    <>
      <h1>إنشاء مشروع جديد</h1>
      <Row className="align-items-center border border-5 p-4 mb-4 rounded">
        <Basic_information_inputs />
      </Row>

      <Row className="align-items-center border border-5 p-4 mb-4 rounded">
        <Contractor_office_inputs />
      </Row>

      <Row className="align-items-center border border-5 p-4 mb-4 rounded">
        <Project_contractor_inputs />
      </Row>

      <Row className="align-items-center border border-5 p-4  mb-4 rounded">
        <Laboratory_inputs />
      </Row>

      <Button onClick={handleSendData}>إنشاء المشروع</Button>
    </>
  );
}

export function Input({ label, id, type = "text" }) {
  return (
    <div>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control type={type} id={id} />
      <Form.Text id={id}></Form.Text>
    </div>
  );
}
export function InputSelect({ label, list }) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        {list.map((ele, index) => (
          <OptionForInputSelect
            value={ele.value}
            label={ele.label}
            key={index}
          />
        ))}
      </Form.Select>
    </>
  );
}
export function OptionForInputSelect({ label, value }) {
  return <option value={value}>{label}</option>;
}
export function InputRadio({ name, list }) {
  return (
    <Form>
      {list.map((ele) => (
        <OptionInputRadio
          label={ele.label}
          id={ele.id}
          name={name}
          key={ele.id}
        />
      ))}
    </Form>
  );
}
export function OptionInputRadio({ label, id, name }) {
  return <Form.Check inline type="radio" label={label} id={id} name={name} />;
}
export function InputSpecialties({ label, specialty }) {
  return (
    <Col xs={12} md={6} lg={4} className="border border-3 p-4 m-4">
      <Input label={label} id={specialty} />
      <Input label="رقم تصنيفه" id={specialty} key={specialty} type="number" />
    </Col>
  );
}
function Basic_information_inputs() {
  return (
    <>
      <h3> نموذج المشروع</h3>
      <Col xs={12} md={6} lg={4}>
        <Input label="رقم المشروع" id="input_project_number" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="إسم المشروع" id="input_name_of_project" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <InputSelect label="إختر المحافظة" list={governorates} />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="القطعة" id="input_widget" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="الحوض" id="input_the_basin" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="المنطقة" id="input_region" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="مساحة المشروع" id="input_area" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input
          label="اسم المكتب الهندسي المصمم"
          id="input_name_of_designing_engineering_office"
        />
      </Col>
    </>
  );
}
function Project_contractor_inputs() {
  return (
    <>
      <h3>نموذج المقاول</h3>
      <Col xs={12} md={6} lg={4}>
        <Input
          label="إسم مقاول المشروع"
          id="input_name_of_project_contractor"
        />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <InputRadio
          name="building_classification"
          list={building_classification}
        />
      </Col>
    </>
  );
}
function Contractor_office_inputs() {
  return (
    <>
      <h3>نموذج مكتب المتعاقد</h3>
      <Col xs={12} md={6} lg={4} className="border border-3 p-4 m-4">
        <Input
          label="اسم المكتب المتعاقد"
          id="input_name_of_contractor_office"
        />
        <Input
          label="رقم تصنيفه"
          id="input_name_of_contractor_office"
          type="number"
        />
      </Col>

      {specialties.map((ele, index) => (
        <InputSpecialties
          label={ele.label}
          specialty={ele.specialty}
          key={index}
        />
      ))}
    </>
  );
}
function Laboratory_inputs() {
  return (
    <>
      <h3>نموذج المختبر</h3>
      <Col xs={12} md={6} lg={4}>
        <Input label="إسم المختبر المعتمد" id="input_laboratory_name" />
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Input label="عنوان المختبر" id="input_laboratory_address" />
      </Col>
    </>
  );
}
