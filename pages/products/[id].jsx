
import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import { useRouter } from "next/dist/client/router";
import Loader from "react-loader-spinner";
import Link from 'next/dist/client/link';


const Product = () => {
  
  const Router = useRouter();
  let id = Router.query.id;
    const[posts,setPosts] = useState([]);
    const[post,setPost] = useState([]);
    const[loading,setLoading] = useState(true);


      useEffect(()=>{
        if(!Router.isReady) return;
     
        var requestOptions = {
          method: 'GET',
          headers: {"content-type":"aplication/json",
      "x-auth-token":`${localStorage.getItem('token')}`},
          redirect: 'follow'
        };
      fetch(`https://server.hunterpartapp.com/api/admin/product`, requestOptions)
      .then(res => res.json())
      .then(res => {
     
          if (res.data) {
              setPosts(res.data.products);
              setPost(res.data.products.filter(post => post._id == id));
       
           
              setLoading(false);
        
          }
         
      }
      )

  
      
     
    }, [Router.isReady]);



      function xdelete() {
        var requestOptions = {
            method: 'DELETE',
            headers:  {"content-type":"aplication/json",
            "x-auth-token":`${localStorage.getItem('token')}`},
            redirect: 'follow'
          };
          
          fetch(`https://server.hunterpartapp.com/api/admin/product/${Router.query.id}`, requestOptions)
            .then(response => {response.text();
            if (response.status == 200) {
              Router.push("/products");
            }
            })
           
            .catch(error => console.log('error', error));
    }

    function openModal3() {
    
      var modal = document.getElementById("myModal3");
     var pm = document.getElementsByClassName("pm")[0]
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


    return ( <div className="product">
            <Head>
    <title> ?????????????? - ??????????</title>
        </Head>
        <Header />
        <div id="myModal3" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>    ??????  ?????????? ?????? ?????????? ????. ?????????? ???????????? 


</p>
<div className="modal-btn">
   <a ><button onClick={xdelete} id="delBtn">??????????</button></a>
   <a ><button className="close">????????????</button></a>
</div>


</div>
</div>
</div>
        { loading &&
    <div className="loader">
    <Loader
        type="Rings"
        color="#F58222"
        height={300}
        width={300}
        
      />
    </div>
}
{!loading &&
  
    <div className="pm">
        <div className="profile-main">
        <Link href="/products"><a > <p id="back">&larr; ???????????? ???? ???????? ??????</p> </a></Link>
        <div className="slider">

    {
      post[0] && post[0].images && post[0].images.map(item => <img src={"https://server.hunterpartapp.com/" + item.image} key={item._id}/>)
    }
      </div>
      <div className="product-main">
        <p id="product-title">{post[0] && post[0].title}</p>
        <div className="product-info2">
          <div className="pi3">
            <p>????????????</p>
            <div className="pi-line"></div>
            <p>{post[0] && post[0].productNumber}</p>
          </div>
          <div className="pi3">
            <p>??????????</p>
            <div className="pi-line"></div>
            <p>{post[0] && post[0].carModel}</p>
          </div>
          <div className="pi3">
            <p>????????</p>
            <div className="pi-line"></div>
            <p>{post[0].brand && post[0].brand.title}</p>
          </div>
          <div className="pi3">
            <p>?????????? ??????????</p>
            <div className="pi-line"></div>
            <p>{ post[0] && post[0].stock}</p>
          </div>
          
           
          <div className="pi3">
            <p>????????</p>
            <div className="pi-line"></div>
            <p>{post[0] &&  post[0].price}</p>
          </div>
        </div>
        <div className="p-cat">
          <div className="pc1">
          {post[0] && post[0].category && post[0].category.map((item,index) => <p key={index} id="pcat">{item.title}</p>)}
          </div>
        
          <p>???????? ???????? ??????????:</p>
        </div>
        <div className="p-tag">
          <p>?????????? ?????? ??????????:</p>
          <div className="pc1">
         {post[0] && post[0].tags && post[0].tags.map((item,index) => <p key={index} >{item+ " "}</p>)}
          </div>
        </div>
        <div className="info-btn">
          <button onClick={openModal3} id="del-btn">?????? ??????????</button>
       <Link href={"/products/edit/" + Router.query.id}><a><button > ????????????  ??????????   </button></a></Link>   
        </div>
      </div>
        </div>
        <Navbar />
    </div>
}
    </div>
     );
}
 
export default Product;