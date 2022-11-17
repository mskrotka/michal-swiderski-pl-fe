import styles from "/styles/Calendar.module.css"

const Calendar = () => {
  return(
    <>

    <iframe className={styles.CalendarGoogle} src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2En_AfFMhay6I0FhPnhMFxvLUGvXKd0LTf7-upNFyIEg7dllSaHje5trvDdJEx83dgsr3kpOY4?gv=true" />

    </>
  )
}

export default Calendar;