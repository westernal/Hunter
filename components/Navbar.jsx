import Link from "next/link"
import { useRouter } from "next/dist/client/router";

const Navbar = () => {
    const Router = useRouter();
    function logOut(e) {
        e.preventDefault();
        
        localStorage.setItem('token', "");
       
        Router.push('/sign-in');
      }
    return (   <div className="navbar">
    <div className="ds2-user">
        <img src="/Images/Group 12998.svg" alt="profile picture" />

    
    </div>
    <div className="ds2-nav">
    
   <Link href="/dashboard"><a> <div className="pi" id="ndash">
                        <p>پیشخوان</p>
                        <img src="/Images/category 2.svg" alt="counter" />
                    </div> </a></Link>
                    <Link href="/information"><a> <div className="pi" id="ninfo">
                        <p>مشخصات شما</p>
                        <img src="/Images/profile.svg" alt="your information" />
                    </div> </a></Link>
                    <Link href="/users"><a>  <div className="pi" id="nuser">
                        <p>کاربران</p>
                        <img src="/Images/teenyicons_users-outline.svg" alt="users" />
                    </div> </a></Link>
                    <Link href="/products"><a>  <div className="pi" id="nproducts">
                        <p>محصولات</p>
                        <img src="/Images/credit card.svg" alt="products" />
                    </div> </a></Link>
                    <Link href="/orders"><a> <div className="pi" id="norder">
                        <p>سفارشات</p>
                        <img src="/Images/cart 1.svg" alt="orders" />
                    </div> </a></Link>
                    <Link href="/categories"><a> <div className="pi" id="ncat">
                        <p>دسته بندی ها</p>
                        <img src="/Images/category.svg" alt="categories" />
                    </div> </a></Link>
                    <Link href="/brands"><a>  <div className="pi" id="nbrand">
                        <p>برند ها</p>
                        <img src="/Images/tag 3.svg" alt="brands" />
                    </div> </a></Link>
                    <Link href="/offers"><a>  <div className="pi" id="noffer">
                        <p>طرح های شگفت انگیز و جوایز</p>
                        <img src="/Images/premium 2.svg" alt="prizes" />
                    </div> </a></Link>
                    <Link href="/banner"><a> <div className="pi" id="nbanner">
                        <p>بنر پیشنهاد ویژه </p>
                        <img src="/Images/file 4.svg" alt="banner" />
                    </div> </a></Link>
   
        
        <a href="#" onClick={logOut} ><div className="ds2-out"  >
            <p> خروج از حساب کاربری</p>
            <img src="/Images/log out.svg" alt="" />
        </div>
        </a>
    </div>
</div>
);
}
 
export default Navbar;