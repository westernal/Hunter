import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

const Order = () => {

    let status;
    function check(e) {
        let check = document.getElementsByClassName("hidden");
       
        for (let i = 0; i < 4; i++) {
            check[i].style.display = "none";
            
        }

        e.target.querySelector("p").style.display = "block";
        
        for (let i = 0; i < 4; i++) {
            if (check[i].style.display == "block") {
                status = document.getElementsByClassName("status")[i].innerText;
            }
            
        }

        console.log(status);
        
        
    }

    function openModal1(params) {
        var modal = document.getElementById("myModal");
       var pm = document.getElementsByClassName("pm")[0];
       pm.style.filter = "blur(10px)";
        
        var span = document.getElementsByClassName("close")[0];
          modal.style.display = "block";
       
        
        
        span.onclick = function() {
          modal.style.display = "none";
          pm.style.filter = "blur(0)";
        }
        
        
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            pm.style.filter = "blur(0)";
          }
        }
    }
    return ( <div className="order-page">

                    <Head>
                <title>    سفارشات - هانتر</title>
                    </Head>
                    <Header />
                    <div id="myModal" className="modal">

                    <div className="modal-content">
  <div className="modal-main">
    <div className="modal-title">
        <p> وضعیت ارسال</p>
    </div>
   <div className="shipping-info2">
       <div className="si2">
        <div className="circle" onClick={check}><p className="hidden">&#10003;</p> </div>
        <p style={{color: "#838383"}} className="status">در حال پردازش</p>
       </div>
       <div className="si2">
        <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
        <p style={{color: "#DFBC04"}} className="status">در حال ارسال</p>
       </div>
       <div className="si2">
            <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
            <p style={{color: " #01B533"}} className="status">ارسال شده</p>
       </div>
       <div className="si2">
            <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
            <p style={{color: " #B31111"}} className="status">لغو شده</p>
       </div>
   </div>
</div>

<div className="info-btn">
    <button className="close">ثبت</button>
</div>
</div>
</div>
                    <div className="profile-header">
                    <p> سفارشات</p>
                </div>

               <div className="pm">
               <div className="profile-main">
                <div className="dash-title">
                    <p>جزئيات سفارش </p>
                </div>
                <div className="order-info">
                <p id="situation">ارسال شده</p>
                <div className="oi1">
                        <p>شماره فاکتور:</p>
                        <p id="infspec">12345</p>
                    </div>
                    <div className="oi1">
                        <p>تاريخ سفارش:</p>
                        <p id="infspec">24/5/1379</p>
                    </div>
                </div>
                <div className="buyer-info">
                <div className="dash-title">
                    <p>مشخصات خريدار </p>
                </div>
                <div className="oi1">
                        <p>نام و نام خانوادگی خریدار: </p>
                        <p id="infspec">علی نویدی</p>
                    </div>
                    <div className="oi1">
                        <p>شماره تماس:</p>
                        <p id="infspec">09339668289</p>
                    </div>
                    <div className="oi1">
                        <p>تحويل گيرنده:</p>
                        <p id="infspec">حسین محمدی</p>
                    </div>
                    <div className="oi1">
                        <p>آدرس:</p>
                        <p id="infspec">ساری</p>
                    </div>
                    <div className="oi1">
                        <p>كد پستی:</p>
                        <p id="infspec">4818715114</p>
                    </div>
                </div>
                <div className="shipping">
                <div className="dash-title">
                    <p>اطلاعات ارسال </p>
                </div>
                <div className="shipping-info">
                <div className="order-btn">
                        <button onClick={openModal1}>وضعیت ارسال <img src="/Images/Vector 96.svg" alt="dropdown" /></button>
                    </div>
                <div className="oi1">
                        <p>روش ارسال:</p>
                        <p id="infspec">پست</p>
                    </div>
               
                </div>
                </div>
                <div className="cart">
                <div className="dash-title">
                    <p>مشخصات سبد خريد </p>
                </div>
                <div className="oi1">
                        <p>تعداد محصولات:</p>
                        <p id="infspec">26</p>
                    </div>
                    <div className="cart-list">
                        <div className="cart-item">
                            <div className="cart-info">
                            <p id="cart-title"> لوله ورودی هوا به هواکش (سرخم)</p>
                            <div className="cart-price">
                            <div className="oi1">
                        <p>مبلغ:</p>
                        <p id="ospec">,500,000 تومان</p>
                    </div>
                    <div className="oi1">
                        <p>روش ارسال:</p>
                        <p id="infspec">پست</p>
                    </div>
                            </div>
                            </div>
                            <div className="cart-pic">
                                <img src="/Images/photo_2021-01-28_21-12-12-removebg-preview (1).jpg" alt="Order picture" />
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="cart-info">
                            <p id="cart-title"> لوله ورودی هوا به هواکش (سرخم)</p>
                            <div className="cart-price">
                            <div className="oi1">
                        <p>مبلغ:</p>
                        <p id="ospec">,500,000 تومان</p>
                    </div>
                   
                    <div className="oi1">
                    <p>روش ارسال:</p>
                        <p id="infspec">پست</p>
                    </div>
                  
                   
                            </div>
                            </div>
                            <div className="cart-pic">
                                <img src="/Images/photo_2021-01-28_21-12-12-removebg-preview (1).jpg" alt="Order picture" />
                            </div>
                        </div>
                    </div>
                    <div className="order-time">
                    <div className="oi1">
                        <p> تاريخ سفارش:</p>
                        <p id="infspec">1379/5/24</p>
                    </div>
                    <div className="oi1">
                        <p>ساعت سفارش:</p>
                        <p id="infspec">11:35</p>
                    </div>
                    </div>
                </div>
                <div className="paying-info">
                <div className="dash-title">
                    <p>مشخصات پرداخت </p>
                </div>
                <div className="pi2">
                <div className="oi1">
                        <p> مبلغ کل:</p>
                        <p id="infspec">3,400,000 تومان</p>
                    </div>
                    <div className="oi1">
                        <p> هزینه ارسال:</p>
                        <p id="infspec">10,000 تومان</p>
                    </div>
                    <div className="oi1">
                        <p> تخفیف:</p>
                        <p id="infspec">0 تومان</p>
                    </div>
                </div>
                <div className="oi1">
                        <p>مبلغ کل پرداخت شده:</p>
                        <p id="ospec">,500,000 تومان</p>
                    </div>
                </div>
                </div>
                <Navbar />
               </div>
                
                </div> );
}
 
export default Order;