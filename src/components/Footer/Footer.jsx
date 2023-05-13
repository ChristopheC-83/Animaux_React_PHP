import React from 'react'
import { FaFacebook,FaTwitterSquare, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footerContainer">
        <FaFacebook className="iconesFooter"/>
        <FaTwitterSquare className="iconesFooter"/>
        <FaYoutube className="iconesFooter"/>
      Zoo React - Tous droits réservés.
    </div>
  )
}
