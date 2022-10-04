import styles from "/styles/Form.module.css"
import Button from "../Button/Button";
import { useRouter } from 'next/router'

import axios from 'axios';
import qs from 'qs'

function Form({ onButton, children }) {
  const router = useRouter()
  const campaign_id = router.query.campaignid === undefined ? "" : 0
  const keyword = router.query.keyword === undefined ? "" : 0


  const handleSubmit = async (e) => {

    // Stop the form from submitting and refreshing the page.
    e.preventDefault()
    console.log(e.target[3].value)

    // Get data from the form.
    const data = {
      name: e.target[0].value,
      phone: e.target[1].value,
      info: e.target[2].value,
      rodo: e.target[3].value,
      campaign: campaign_id,
      key_word: keyword,
      landing_page: "997e294b-ac50-460d-9c14-ab4b9b4d5ba5"
    }

    // Send the data to the server in JSON format.
    const JSONdata = qs.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'https://api.michal-swiderski.pl/crm/lead/'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
    e.target.reset();
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
        <div className={styles.footer}>
          <div className={styles.button}>
            <Button version="light" type="Form">{onButton}</Button>
          </div>
          <div className={styles.req}>
            <span className={styles.required}>*</span> pole obowiązkowe
          </div>
        </div>
      </form>
    </div>
  )
};

export default Form;