import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Link from 'next/dist/client/link';

const Dashboard = () => {
    return ( <div className="dashboard">
        <Head>
        <title>   پیشخوان - هانتر</title>
            </Head>
            <Header />
            <div className="profile-header">
            <p>پیشخوان</p>
        </div>
    <div className="pm">
    <div className="profile-main">
        <div className="dash-title">
            <p>پیشخوان</p>
        </div>
            <div className="dashboard-main">
           <Link href="/products"><a>     <div className="dm" id="dm1">
                    <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/bag-tick.svg" alt="bag tick" />
                   
                    <p>تعداد محصول فروش رفته  </p>
                    <p id="dmspec">21</p>
                </div>
                </a></Link>
                <Link href="/products"><a>   <div className="dm" id="dm2">
                <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/Price Tag.svg" alt="Price tag" />
                    <p>تعداد محصولات</p>
                    <p id="dmspec">21</p>
                </div>
                </a></Link>
                <Link href="/orders"><a>   <div className="dm" id="dm3">
                <img src="/Images/Mask Group.svg" alt="background" id="dm-bck"/>
                    <img src="/Images/receipt-item.svg" alt="receipt-item" />
                    <p>تعداد سفارش</p>
                    <p id="dmspec">21</p>
                </div>
                </a></Link>
            </div>
           
        </div>
        <Navbar />
    </div>
    </div> );
}
 
export default Dashboard;