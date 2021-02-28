import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const TheCalendar = props => {
  const [date, setDate] = useState(new Date())
  
  
  const onCalendarChange = date => {
    setDate(date)
    console.log (date)
  }
  
  let calendarClasses = ['calendar']
  if (props.show) {
    calendarClasses = ['calendar open']
  }

  const bookNow = () => {
    
  }

  const changeTime = (value) => {
    alert(value)
  }

  return (
    <div className={calendarClasses}>
      <Calendar
        onChange={onCalendarChange} 
        value={date} 
        showNeighboringMonth={true}     
      />
      <div className="radio-btn">
        <input onChange={ changeTime } className="radio__input" type="radio" name="time" id="morning" value="morning"></input>
        <label className="radio__label" htmlFor="morning">Morning</label>
        <input onChange={ changeTime } className="radio__input" type="radio" name="time" id="afternoon" value="afternoon"></input>
        <label className="radio__label" htmlFor="afternoon">Afternoon</label>
      </div>

      <div> 
        <button className="bookNow" onClick={ bookNow }>Book now</button>
      </div>
    </div>
  )
}

export default TheCalendar