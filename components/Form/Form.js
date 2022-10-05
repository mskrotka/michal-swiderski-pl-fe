import qs from "qs";
import styles from "/styles/Form.module.css";

import React from "react";
import { withRouter } from 'next/router'

import Button from "../Button/Button";
import { FaLock } from "react-icons/fa"

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showProcess: "hidden"
    }
  }

  render() {
    const campaign_id_path = this.props.router.query.campaignid
    const keyword_path = this.props.router.query.keyword
    const { onButton, children } = this.props
    const campaign_id = campaign_id_path === undefined ? "" : campaign_id_path
    const keyword = keyword_path === undefined ? "" : keyword_path

    const handleSubmit = async (e) => {

      e.preventDefault()

      const data = {
        name: e.target[0].value,
        phone: e.target[1].value,
        info: e.target[2].value,
        rodo: e.target[3].value,
        campaign: campaign_id,
        key_word: keyword,
        landing_page: "997e294b-ac50-460d-9c14-ab4b9b4d5ba5"
      }

      const JSONdata = qs.stringify(data)
      const endpoint = 'https://api.michal-swiderski.pl/crm/lead/'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: JSONdata,
      }

      const response = await fetch(endpoint, options)
      const result = await response.json()
      console.log(result)
      e.target.reset();
      this.setState({showProcess: "visible"})
    }
    return (
      <div className={styles.wrapper}>
        {this.state.showProcess === "visible" ?
        <div className={styles.process}>
          <div className={styles.center}>
            <p>Dzięki za pozostawienie kontaktu! Zobacz jak działa mój proces 😉</p>
          </div>
          <ul className={styles.listProcess}>
            <li>Strona sprawdza czy pochodzisz z kampanii</li>
            <li>Strona zbiera Twoje dane z formularza</li>
            <li>Strona wysyła dane do konektora</li>
            <li>Konektor umieszcza dane w ClickUp</li>
            <li>ClickUp na telefonie powadomił mnie, że napisałeś</li>
          </ul>
          <div className={styles.center}>
            <h3 className={styles.timeProcess}>Wszystko w mniej niż 10 sekund!</h3>
          </div>
        </div>
        :
        <form className={styles.form} onSubmit={handleSubmit}>
          {children}
          <div className={styles.footer}>
            <div className={styles.button}>
              <div className={styles.centered}>
                <Button onClick={this.showProcess} version="light" type="Form">{onButton}</Button>
              </div>
            </div>
            <div className={styles.req}>
              <span className={styles.savedData}><FaLock /> Twoje dane są bezpieczne</span>
            </div>
          </div>
        </form>
        }
      </div>
    )
  }
}
export default withRouter(Form);