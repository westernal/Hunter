import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <div >
       <div className="profile">
        <Head>
        <title>پروفایل کاربری - هانتر</title>
            </Head>
            <Header />
        <div className="profile-header">
            <p>پروفایل کاربری</p>
        </div>
        
       <div className="pm">
       <div className="profile-main">
       <div className="profile-menu">
               <Link href="/dashboard"><a> <div className="p-item" id="pspec">
                    {"<"}
                    <div className="pi">
                        <p>پیشخوان</p>
                        <img src="/Images/category 2.svg" alt="counter" />
                    </div>
                </div>
                </a></Link>
                <Link href="/information"><a>  <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>مشخصات شما</p>
                        <img src="/Images/profile.svg" alt="your information" />
                    </div>
                </div>
                </a></Link>
                <Link href="users"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>کاربران</p>
                        <img src="/Images/teenyicons_users-outline.svg" alt="users" />
                    </div>
                </div>
                </a></Link>
                <Link href="/products"><a>  <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>محصولات</p>
                        <img src="/Images/credit card.svg" alt="products" />
                    </div>
                </div>
                </a></Link>
                <Link href="/orders"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>سفارشات</p>
                        <img src="/Images/cart 1.svg" alt="orders" />
                    </div>
                </div>
                </a></Link>
                <Link href="/categories"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>دسته بندی ها</p>
                        <img src="/Images/category.svg" alt="categories" />
                    </div>
                </div>
                </a></Link>
                <Link href="/brands"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>برند ها</p>
                        <img src="/Images/tag 3.svg" alt="brands" />
                    </div>
                </div>
                </a></Link>
                <Link href="/offers"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>طرح های شگفت انگیز و جوایز</p>
                        <img src="/Images/premium 2.svg" alt="prizes" />
                    </div>
                </div>
                </a></Link>
                <Link href="/banner"><a>   <div className="p-item">
                    {"<"}
                    <div className="pi">
                        <p>بنر پیشنهاد ویژه </p>
                        <img src="/Images/file 4.svg" alt="banner" />
                    </div>
                </div>
                </a></Link>
                </div>
            </div>
            <Navbar />
        
       </div>
    </div>
    </div>
  )
}
