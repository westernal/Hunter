import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Link from 'next/dist/client/link';

const Index = () => {
    return ( <div className="banner-page">
        <Head>
        <title> بنر پیشنهاد ویژه - هانتر</title>
            </Head>
            <Header />
            <div className="profile-header">
            <p> بنر پیشنهاد ویژه</p>
        </div>
        
    <div className="pm">
    <div className="profile-main">
            <div className="dash-title">
                <p>آرشیو بنرها</p>
            </div>
            <div className="banner-list">
                <div className="banner">
                    <div className="banner-line"></div>
                    <p id="bspec">TOUCHABLE BANNER</p>
                    <p>بنر پیشنهاد ویژه</p>
                </div>
                <div className="banner1">
                    <div className="banner-line"></div>
                    <p id="bspec">TOUCHABLE BANNER</p>
                    <p>بنر پیشنهاد ویژه</p>
                </div>
                <div className="banner2">
                    <div className="banner-line"></div>
                    <p id="bspec">TOUCHABLE BANNER</p>
                    <p>بنر پیشنهاد ویژه</p>
                </div>
                <div className="banner3">
                    <div className="banner-line"></div>
                    <p id="bspec">TOUCHABLE BANNER</p>
                    <p>بنر پیشنهاد ویژه</p>
                </div>
            </div>
            <div className="info-btn">
              <Link href="/banner/add"><a>  <button>افزودن بنر جدید</button> </a></Link>
            </div>
        </div>
        <Navbar />
    </div>
    </div> );
}
 
export default Index;