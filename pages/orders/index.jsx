import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const Orders = () => {
    return ( <div className="orders">
              <Head>
    <title> سفارشات - هانتر</title>
        </Head>
        <Header />
    <div className="profile-header">
        <p> سفارشات</p>
    </div>
   <div className="pm">
   <div className="profile-main">
    <div className="dash-title">
        <p> سفارش هاي جديد</p>
    </div>
    <div className="product-list">
        <div className="pitem">
        <div className="pitem-text">
                <p>علي</p>
                <p>لوله ورودی هوا به هواکش (سرخم)</p>
                <p>461362</p>
                <p>salam</p>
                <p>salam</p>
                <p>تومان</p>
                <button>مشاهده جزئيات</button>
            </div>
            <div className="pitem-title">
            <p>نام سفارش دهنده</p>
                <p>نام محصول</p>
                <p>كد كالا</p>
                <p>دسته بندي</p>
                <p>موجودي</p>
                <p>قيمت</p>
                <p>جزئيات</p>
            </div>
        </div>
    </div>
    <div className="dash-title">
        <p>همه سفارشات</p>
    </div>
    <div className="dash-result">
                            <div className="dr-nav">
                                <p>ردیف</p>
                                <p>نام و نام خانوادگی</p>
                                <p>شماره همراه</p>
                                <p >دسته بندی</p>
                                <p>وضعیت</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                           <div className="dr-row" id="hidden">
                                <p id="drn"></p>
                                <p id="dr-date"></p>
                                <p className="dr-spec"></p>
                                <p className="dr-spec2"></p>
                                <a href="#"  id="deleter">   </a> 
                            </div>
                           
                            </div>
                        </div>
    </div>
    <Navbar />
   </div>
    </div> );
}
 
export default Orders;