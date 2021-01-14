import React from 'react'
import PropTypes from 'prop-types'

const CountdownBox = ({ left, divideBy, label }) => {
  return (
    <div className="countdown__box">
      <div className="countdown__box_left">{left}</div>

      <p className="countdown__box_label">{label}</p>
    </div>
  )
}

CountdownBox.propTypes = {
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  divideBy: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

export default CountdownBox
