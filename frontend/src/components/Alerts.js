import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
      <div className="alert alert-primary justify-self-center" key={alert.id}>
        {alert.msg}
      </div>
    ))
  )
}

export default Alerts
