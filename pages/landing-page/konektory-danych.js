import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";


const KonektoryDanych = () => {
  return (
    <>
      <p>konektory danych</p>
      <Form onButton="Tekst na guziku">
        <Input type="input" name="imie" label="dupa2" required />
        <Input type="textarea" name="informacje" label="dupa3" required />
        <Input type="checkbox" name="rodo" label="dupa 4" required />
      </Form>
    </>
  )
};

export default KonektoryDanych;