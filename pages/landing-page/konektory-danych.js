import styles from "/styles/pages/Konektory-danych.module.css"
import 'bootstrap/dist/css/bootstrap.css'

import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";
import Container from "../../components/Container/Container";



const DataConnectors = () => {
  return (
    <Container>

      <div className={styles.wrapper}>

        <div className="row">

          <div className="col-sm-8">
            jakis teskt
          </div>

          <div className="col-sm-4">
          <p>konektory danych</p>
            <Form onButton="Tekst na guziku">
              <Input type="input" name="imie" label="dupa2" required />
              <Input type="textarea" name="informacje" label="dupa3" required />
              <Input type="checkbox" name="rodo" label="dupa 4" required />
            </Form>
          </div>

        </div>

      </div>


    </Container>
  )
};

export default DataConnectors;