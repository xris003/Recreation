import React from 'react'
import css from './Footer.module.css'
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon, 
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";


const Footer = () => {
  return (
    <div className={css.FooterWrapper}>
      <hr />
      {/* Amazon Logo Section */}
      <div className={css.Footer}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Amazon</span>
        </div>

        {/* Contact Us Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span> Contact Us </span>
            <span className={css.pngLine}>
            <LocationMarkerIcon className={css.icon} />
            <span> peace estate, lokogomma 900107</span>
            </span>

            <span className={css.pngLine}>
            <PhoneIcon className={css.icon} />
            <a href="tel"> 803 722 900107</a>
            </span>

            <span className={css.pngLine}>
            <InboxIcon className={css.icon} />
            <a href="mailto:@xyz.com"> support mail</a>
            </span>
          </div>
        </div>

        {/* Sign In Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Accounts</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        {/* Company Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              About Us
            </span>
          </div>
        </div>

        {/* Resources Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              Safety Policy and Terms
            </span>
          </div>
        </div>
      </div>

     { /* CopyRight */}
      <div className={css.copyRight}>
        <span> Copyright@2023 Recreacted for the Purpose of Learning. Inc </span>
        <span>All Rights Reserved</span>
      </div> 

    </div>
  );
};

export default Footer