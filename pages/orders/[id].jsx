import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from 'react'
import moment from 'moment-jalaali'
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";

const Order = () => {
    const Router = useRouter();
    let id = Router.query.id;
    let status;
    const[posts,setPosts] = useState([]);
    const[post,setPost] = useState([]);
    const[loading,setLoading] = useState(false);
   
      
        

        useEffect(() => { 
      
            if(!Router.isReady) return;
              var requestOptions = {
                          method: 'GET',
                          headers: {"content-type":"aplication/json",
                      "x-auth-token":`${localStorage.getItem('token')}`},
                          redirect: 'follow'
                        };
                      fetch(`https://server.hunterpartapp.com/api/admin/checkout`, requestOptions)
                      .then(res => res.json())
                      .then(res => {
                      
                          if (res.data) {
                              setPosts(res.data.other);
                              setPost(res.data.other.filter(post => post._id == id));
                            
                          }
                      }
                      )
      
                     
          
      
      }, [Router.isReady])
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

    function submitStatus() {
        setLoading(true);
        let error = document.getElementById("error");
        let success = document.getElementById("success");

        error.style.display = "none";
        success.style.display = "none";

        var requestOptions = {
            method: 'PUT',
            headers:  {"content-type":"application/json",
            "x-auth-token":`${localStorage.getItem('token')}`},
            body:  JSON.stringify({
               "status": status
              })
            ,
            redirect: 'follow'
          };
          
          fetch(`https://server.hunterpartapp.com/api/admin/checkout/${Router.query.id}`, requestOptions)
            .then(response =>{ response.json();
               
            if (response.status == 200) {
                setLoading(false);
                success.style.display = "block";
                document.getElementById("st-btn").innerText = status;
            }else error.style.display = "block";
          
            })
        
            .catch(err => {console.log('error', err);
            error.style.display="block";
      
        });
    }
    return ( <div className="order-page">

                    <Head>
                <title>    ?????????????? - ??????????</title>
                    </Head>
                    <Header />
                    <div id="myModal" className="modal">

                    <div className="modal-content">
  <div className="modal-main">
    <div className="modal-title">
        <p> ?????????? ??????????</p>
    </div>
   <div className="shipping-info2">
       <div className="si2">
        <div className="circle" onClick={check}><p className="hidden">&#10003;</p> </div>
        <p style={{color: "#838383"}} className="status">???? ?????? ????????????</p>
       </div>
       <div className="si2">
        <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
        <p style={{color: "#DFBC04"}} className="status">???? ?????? ??????????</p>
       </div>
       <div className="si2">
            <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
            <p style={{color: " #01B533"}} className="status">?????????? ??????</p>
       </div>
       <div className="si2">
            <div className="circle" onClick={check}><p className="hidden">&#10003;</p></div>
            <p style={{color: " #B31111"}} className="status">?????? ??????</p>
       </div>
   </div>
</div>

<div className="info-btn">
    <button className="close" onClick={submitStatus}>??????</button>
</div>
</div>
</div>
                    <div className="profile-header">
                    <p> ??????????????</p>
                </div>

               <div className="pm">
               <div className="profile-main">
                <div className="dash-title" id="main-title">
                <Link href="/orders"><a > <p id="back">&larr; ???????????? ???? ???????? ??????</p> </a></Link>
                    <p>???????????? ?????????? </p>
                </div>
                <div className="order-info">
                <p id="situation"> {status && status}</p>
                <div className="oi1">
                        <p>?????????? ????????????:</p>
                        <p id="infspec">{post[0] && post[0].orderNumber}</p>
                    </div>
                    <div className="oi1">
                        <p>?????????? ??????????:</p>
                        <p id="infspec">{post[0] && moment(post[0].createdAt, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')} </p>
                    </div>
                </div>
                <div className="buyer-info">
                <div className="dash-title">
                    <p>???????????? ???????????? </p>
                </div>
                <div className="oi1">
                        <p>?????? ?? ?????? ???????????????? ????????????: </p>
                        <p id="infspec"> {post[0] && post[0].address.receiverName}</p>
                    </div>
                    <div className="oi1">
                        <p>?????????? ????????:</p>
                        <p id="infspec"> {post[0] && post[0].address.phoneNumber}</p>
                    </div>
                    <div className="oi1">
                        <p>?????????? ????????????:</p>
                        <p id="infspec">  {post[0] && post[0].address.receiverName}</p>
                    </div>
                    <div className="oi1">
                        <p>????????:</p>
                        <p id="infspec"> {post[0] && post[0].address.address}</p>
                    </div>
                    <div className="oi1">
                        <p>???? ????????:</p>
                        <p id="infspec"> {post[0] && post[0].address.postalCode}</p>
                    </div>
                </div>
                <div className="shipping">
                <div className="dash-title">
                    <p>?????????????? ?????????? </p>
                </div>
                <div className="shipping-info">
                <div className="order-btn">
                { loading &&
    <div className="loader">
    <Loader
        type="Rings"
        color="#F58222"
        height={50}
        width={50}
        
      />
      <p>???? ?????? ????????????</p>
    </div>
}
                <p id="success">?????????? ?????????? ????</p>
                    <p id="error">?????????? ???? ???????????? ?????????? ?????? ?????? ???????? ???????????? ???????? ????????</p>
                        <button onClick={openModal1} id="st-btn">?????????? ?????????? <img src="/Images/Vector 96.svg" alt="dropdown" /></button>
                    </div>
                <div className="oi1">
                        <p>?????? ??????????:</p>
                        <p id="infspec"> {post[0] && post[0].deliveryType}</p>
                    </div>
               
                </div>
                </div>
                <div className="cart">
                <div className="dash-title">
                    <p>???????????? ?????? ???????? </p>
                </div>
                <div className="oi1">
                        <p>?????????? ??????????????:</p>
                        <p id="infspec"> {post[0] && post[0].products.length}</p>
                    </div>
                    <div className="cart-list">
                   {post[0] && post[0].products.map(item => {
                       return(
                        <div className="cart-item" key={item._id}>
                        <div className="cart-info">
                        <p id="cart-title">    {item.title}</p>
                        <div className="cart-price">
                        <div className="oi1">
                    <p>????????:</p>
                    <p id="ospec">{item.price} ??????????</p>
                </div>
                <div className="oi1">
                    <p>?????? ??????????:</p>
                    <p id="infspec">{post[0].deliveryType}</p>
                </div>
                        </div>
                        </div>
                        <div className="cart-pic">
                            <img src={"https://server.hunterpartapp.com/"+item.images[0].image} alt="Order picture" />
                        </div>
                    </div>
                       )
                   })}
                      
                    </div>
                    <div className="order-time">
                    <div className="oi1">
                        <p> ?????????? ??????????:</p>
                        <p id="infspec">{post[0] && moment(post[0].createdAt, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')} </p>
                    </div>
                    <div className="oi1">
                        <p>???????? ??????????:</p>
                        <p id="infspec">{post[0] && moment(post[0].createdAt, 'YYYY-M-D HH:mm:ss').format('HH:mm ')} </p>
                    </div>
                    </div>
                </div>
                <div className="paying-info">
                <div className="dash-title">
                    <p>???????????? ???????????? </p>
                </div>
                <div className="pi2">
                <div className="oi1">
                        <p> ???????? ????:</p>
                        <p id="infspec">{post[0] && post[0].amount.subTotal} ??????????</p>
                    </div>
                    <div className="oi1">
                        <p> ?????????? ??????????:</p>
                        <p id="infspec">{post[0] && post[0].amount.delivery}  ??????????</p>
                    </div>
                    <div className="oi1">
                        <p> ??????????:</p>
                        <p id="infspec">{post[0] && post[0].amount.promotion}  ??????????</p>
                    </div>
                </div>
                <div className="oi1">
                        <p>???????? ???? ???????????? ??????:</p>
                        <p id="ospec">{post[0] && post[0].amount.total}  ??????????</p>
                    </div>
                </div>
                </div>
                <Navbar />
               </div>
                
                </div> );
}
 
export default Order;