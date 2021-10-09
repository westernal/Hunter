import Link from "next/link"
import Head from "next/head";
import { useEffect } from 'react'
import fetch from "node-fetch"



const Header = () => {

    useEffect(() => {   
      
        if (localStorage.getItem('token') != "" && localStorage.getItem('token') != null ) {
          
          
  
          
          var requestOptions = {
            method: 'GET',
            headers: { 'x-auth-token': `${localStorage.getItem('token')}`
          },
            redirect: 'follow',
            
          };
          
          fetch("http://193.39.9.72:5000/api/admin/user", requestOptions)
            .then(response => response.json())
            .then(result => {
                
                let name = result.data.user.firstname + " " + result.data.user.lastname
                localStorage.setItem('name', name);

                if (result.data.user.firstname != undefined) {
                  document.getElementById('mpp').style.display = "flex";
                document.getElementById('mpi').style.display = "none";
                document.getElementById('username').innerText = name;
                }
                
                
               
        
            })
            .catch(error => console.log('error', error));
        }
          
     
          
              
               
              
  
              
  
    },[])


    function opennav(e) {
        e.preventDefault();
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closenav() {
        document.getElementById("myNav").style.width = "0%";
      }
    return (  <div className="header">
        <Head>
        <meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<meta name="description" content="هانتر پخش" />
<meta name="keywords" content="Keywords" />
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"/>
            </Head>
    <div id="myNav" className="overlay">
    <a href="#" className="closebtn" onClick={closenav} >&times;</a>
    <div className="overlay-content">
    <Link href="/"  className="mactive"><a >  صفحه اصلی
         </a> 
    </Link>
        <Link href="/categories" className="sactive">   دسته بندی ها  </Link>
        <Link href="/brands"  className="wactive"> برند های ما  </Link>
        <Link href="/offers" className="aactive">    طرح های شگفت انگیز و جوایز </Link>
        <Link href="/contact" className="cactive"><a >  درباره و مکاتبه با ما    </a></Link>
        <a href="https://nilooz.com/" className="bactive">  بلاگ</a>
        <Link href="/sign-in">ورود به حساب کاربری</Link>
        <a  href="#">خروج از حساب کاربری</a>
    </div>
  </div>
  <div className="mp-responsive">
            <div className="mprr">
            <img src="/Images/menu (1).svg"  alt="back button"/>
                <img src="/Images/menu.svg" alt="notifications"  />
               
            </div>
       <a > <img src="/Images/menu (2).svg" alt="Burger menu" className="burger-menu" onClick={opennav}/> </a>
       </div>

       

    <div className="mp-header">
    <div className="mph-info" id="mpi">
                
                <Link href="/sign-in"><a > <p>ورود</p>  </a></Link> 
               
     </div>
        <div className="mpr">
            
            <a href="#" className="mp-profile"   id="mpp"> <img src="/Images/Group 12998.svg" alt="Profile picture" /> <p id="username"> </p>
              </a>
            
      
      
 
     
    </div>
    
        <div className="mp-nav">
            
           
           <ul>
           
             <li><Link href="/contact" className="navItem" id="cactive" ><a > <div className="active-"></div> درباره و مکاتبه با ما   </a></Link></li> 
            <li><Link href="/offers" className="navItem" id="aactive" ><a > <div className="active-"></div> طرح های شگفت انگیز و جوایز </a></Link></li> 
             <li><Link href="/brands" className="navItem" id="wactive" ><a > <div className="active-"></div> برند های ما </a></Link></li> 
              <li><Link href="/categories"  className="navItem" id="sactive" ><a > <div className="active-"></div>دسته بندي ها </a></Link></li> 
            <li><Link href="/" className="navItem" id="mactive"><a > <div className="active-"></div>صفحه اصلی </a></Link></li> 
           </ul>
       </div>
       <div className="mp-logo">
         <Link href="/"><a > <img src="/Images/hunterpakhsh-logo 1.svg" alt="Hunter logo"/> 
         </a> 
          </Link>
       </div>
    </div>
    </div> );
}
 
export default Header;