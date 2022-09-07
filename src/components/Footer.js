import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.facebook.com/kunwarabhi07'> <FacebookIcon /></a>
                <a href='https://www.instagram.com/kunwarabhi7'><InstagramIcon /></a>
                <a href='https://www.twitter.com/kunwarabhi7'>  <TwitterIcon /></a>
                <a href='https://www.linkedin.com/in/kunwarabhi7/'><LinkedInIcon /></a>
                <a href='https://github.com/kunwarabhi7/'>  <GitHubIcon /></a>
            </div>
            <p>&copy; 2022 Abhishek.com </p>

        </div>
    )
}

export default Footer
