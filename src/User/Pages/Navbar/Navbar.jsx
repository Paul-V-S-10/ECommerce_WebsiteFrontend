import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { PiPackage } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiGift } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { PiStorefront } from "react-icons/pi";

const Navbar = () => {

    
    return (
        <div className='navbar'>
            <div className="navbarWrapper">
                <img className='cartifyLogo' src="cartifyLogo.png" alt="" />
                <div className="searchBar">
                    <div className="searchIcon">
                        <CiSearch />
                    </div>
                    <input type="search" placeholder='Search for Products, Brands and More' />
                </div>
                <div className="login">

                    <HiOutlineUserCircle className="loginIcon" />
                    <p>Login</p>
                    <IoChevronDownSharp className="downArrow" />
                    <div className="loginDropdown">
                        <a className='aLogin' href="#">
                            <p>New customer?</p>
                            <p className='pSignup'>Sign up</p>
                        </a>
                        <hr />
                        <a href="#"><HiOutlineUserCircle />My Profile</a>
                        <a href="#"><IoMdStarOutline />Flipcart Plus Zone</a>
                        <a href="#"><PiPackage />Orders</a>
                        <a href="#"><IoMdHeartEmpty />Wishlist</a>
                        <a href="#"><PiGift />Rewards</a>
                        <a href="#"><CiCreditCard1 />Gift Cards</a>
                    </div>
                </div>
                <div className="cart">
                    <BsCart3 className="cartIcon" />
                    <p>Cart</p>
                </div>
                <div className="sellerAccount">
                    <PiStorefront className="sellerLogo" />
                    <p>Become a Seller</p>
                </div>
                <div className="threeDotsDropDownWrapper">
                    <BsThreeDotsVertical className="threeDots" />
                    <div className="threeDotsDropdown">
                        <p><GoBell />Notification Preferences</p>
                        <p><MdOutlineHeadsetMic />24x7 Customer Care</p>
                        <p><FaArrowTrendUp />Advertise</p>
                        <p><FiDownload />Download App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar