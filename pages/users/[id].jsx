import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import fetch from "node-fetch"

const User = () => {
    return ( <div className="user">
         <Head>
    <title> کاربران - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> کاربران</p>
    </div>
  <div className="pm">
  <div className="profile-main">
    <div className="dash-title">
        <p>اطلاعات شخصی</p>
     
    </div>
    <div className="user-pi">
    <div className="personal-info">
            <div className="personal-text">
                <p id="infspec">علی نویدی</p>
                <p>نام و نام خانوادگی:</p>
                <p id="infspec"></p>
                <p>نام فروشگاه:</p>
                <p id="infspec"></p>
                <p>شماره همراه:</p>
                <p id="infspec"></p>
                <p>شماره ثابت:</p>
                <p id="infspec"></p>
                <p>نوع فعالیت:</p>
                <p id="infspec"></p>
                <p>آدرس:</p>
            </div>
            <div className="personal-pic">
                <img src="/Images/photo_2021-01-28_21-12-12-removebg-preview (1).jpg" alt="user profile picture" />
            </div>
        </div>
    </div>
        <div className="dash-title">
        <p>فاکتور ها</p>
    </div>
    <div className="user-orders">
        <div className="uorder">
            <div className="order-title">
                فاکتور شماره 12345
            </div>
            <div className="order-num">
                <p id="infspec">12</p>
                <p>جمع تعداد</p>
            </div>
            <div className="order-price">
                <p id="ospec">3,560,000 تومان</p>
                <p>جمع مبلغ</p>
            </div>
        </div>
    </div>
    </div>
    <Navbar />
  </div>
    </div> );
}
 
export default User;