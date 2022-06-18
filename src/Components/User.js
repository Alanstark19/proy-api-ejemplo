import React from 'react'
import PropTypes from 'prop-types'

const User = ({
//destructurando el objeto ya que se conoce que recibe de la api
id,
title,
body
}) => {
  return (
      //mostrando los datos obtenidos del json
    <div className='user'>
      <h2>{id}</h2>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}
//validando las propiedades recibidas de la api con prop types
//en este caso algunas propiedades son numeros y otras cadenas de caracteres
//pero todas son requeridas y recuerda-> import PropTypes from 'prop-types'
User.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}//fin de propTypes

export default User
