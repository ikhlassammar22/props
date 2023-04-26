/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'


const Profile = (props) => {
  return (
    <div>hello , my name is  {props.fullName},{props.bio} i'm {props.profession}  {props.children}
    <button  onClick={()=>props.sayHello(props.fullName)} > show </button>
    </div>
  )
}
Profile.propTypes = {
  // eslint-disable-next-line no-undef
  fullName:PropTypes.string,
  // eslint-disable-next-line no-undef
  bio:PropTypes.string

}
Profile.defaultProps={
fullName:"wafa",
bio:"expert en systeme embarqué",
profession:"T S"
}

export default Profile