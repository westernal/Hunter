import Head from 'next/head'
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { useEffect,useState } from 'react'
import Link from 'next/dist/client/link';
import { useRouter } from "next/dist/client/router";
import Loader from "react-loader-spinner";



const Edit = () => {

    let i = 0;
  
    let images=[];

    function x(e) {
        let fileInput = document.getElementsByClassName("aii")[0];
        let div = document.getElementsByClassName("add-img")[0];
        
        
        if (i<6) {
           
         let div2 =   fileInput.cloneNode(true);
         let img2 = document.getElementsByClassName("edit-img")[i+1];
         div2.removeAttribute('id','img-hid');
         div2.querySelector("#file").addEventListener('change',x);
            img2.src= URL.createObjectURL(e.target.files[0]);
            images.push(e.target.files[0]);
            div.appendChild(div2);
            document.getElementsByClassName("img-p")[i+1].innerText = e.target.files[0].name;
        }
         i++;
        
    }
   

    const Router = useRouter();
    let id = Router.query.id;
      const[posts,setPosts] = useState([]);
      const[posts2,setPosts2] = useState([]);
      const[brands,setBrands] = useState([]);
      const[post,setPost] = useState([]);
      const[loading,setLoading] = useState(false);
      var stock = 1;
  
  
        useEffect(()=>{
          if(!Router.isReady) return;
       
          var requestOptions = {
            method: 'GET',
            headers: {"content-type":"aplication/json",
        "x-auth-token":`${localStorage.getItem('token')}`},
            redirect: 'follow'
          };
        fetch(`https://hunter-server.oben.design/api/admin/product`, requestOptions)
        .then(res => res.json())
        .then(res => {
         
            if (res.data) {
                setPosts2(res.data.products);
                setPost(res.data.products.filter(post => post._id == id));
         
              
               
          
            }
           
        }
        )
        if (post[0]) {
            stock=post[0].stock;
        }

        if (post[0]) {
            images=post[0].images;
        }
  
    
        var requestOptions = {
            method: 'GET',
            headers: {
        "x-auth-token":`${localStorage.getItem('token')}`},
            redirect: 'follow'
          };
        fetch("https://hunter-server.oben.design/api/admin/product/category", requestOptions)
        .then(res => res.json())
        .then(res => setPosts(res.data.categories))

        var requestOptions2 = {
            method: 'GET',
            headers: {"content-type":"aplication/json",
        "x-auth-token":`${localStorage.getItem('token')}`},
            redirect: 'follow'
          };
        fetch("https://hunter-server.oben.design/api/admin/product/brand", requestOptions2)
        .then(res => res.json())
        .then(res => setBrands(res.data.brands))
       
      }, [Router.isReady]);
  
    let offprice;
    function off() {
         offprice = document.getElementById("pprice").value - document.getElementById("poff").value;
         document.getElementById("off").innerText = offprice;
    }
   

    async function submit() {
        setLoading(true);
        let input = [];
         input[0] = document.getElementById("pname");
       input[1] = document.getElementById("pprice");
        input[2]= document.getElementById("ptag");
        input[3] = document.getElementById("poff");
        input[4] = document.getElementsByClassName("pcat")[0];
        input[5] = document.getElementsByClassName("pbrand")[0];
        
    
for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
        input[i].value = input[i].placeholder;
    }
    
}

        var formdata = new FormData();

        formdata.append("title", input[0].value);
for (let i = 0; i < images.length; i++) {
    formdata.append("image",images[i]);
    
}

formdata.append("category", input[4].value);
formdata.append("brand", input[5].value);
formdata.append("tags", input[2].value);
formdata.append("price", input[1].value);
formdata.append("offPrice", input[3].value);
formdata.append("stock", stock);

        var requestOptions = {
            method: 'PUT',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch(`https://hunter-server.oben.design/api/admin/product/${Router.query.id}`, requestOptions);
        if (res.status == 200) {
            setLoading(false);
            var modal = document.getElementById("myModal2");
            var pm = document.getElementsByClassName("pm")[0]
            pm.style.filter = "blur(10px)";
             
             var span = document.getElementsByClassName("close")[0];
               modal.style.display = "block";
            
             
             
             span.onclick = function() {
               modal.style.display = "none";
               pm.style.filter = "blur(0)";
             }
        }
        let posts = await res.json();
      
    }


 

    function incStock(e) {
        var p = document.getElementById("pstock");
        e.preventDefault();
        stock = stock + 1;
        p.innerText = stock;
    }

    function decStock(e) {
        var p = document.getElementById("pstock");
        e.preventDefault();
        stock = stock - 1;
        p.innerText = stock;
    }
    return ( <div className="products">
             <Head>
                <title>    محصولات - هانتر</title>
                    </Head>
                    <Header />
                    <div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>محصول   ویرایش شد </p>
<div className="info-btn">
   <Link href="/products"><a ><button className="close">تایید</button></a></Link> 
</div>


</div>
</div>
</div>
                    <div className="profile-header">
                    <p> محصولات</p>
                </div>
                <div className="pm">
                <div className="profile-main">
                <div className="dash-title" id="main-title">
                <Link href="/products"><a > <p id="back">&larr; بازگشت به صفحه قبل</p> </a></Link>
                    <p>ویرایش محصول </p>
                </div>
                <div className="dash-title" id="fsize">
                    <p> نام و دسته بندی محصول </p>
                </div>
              <div className="ap-res">
             
                <div className="add-form">
        <p>نام محصول</p>
        <input type="text" placeholder={post[0] && post[0].title} id="pname" />
    </div>
    <div className="add-form" >
        <p>انتخاب دسته بندی</p>
        <select name="category" id="cat-sel" className="pcat">
        {
           posts.map(post => {
          return(
            <option value={post._id} key={post._id}>{post.title}</option>
          )
           })
       }
        </select>
    </div>
    <div className="add-form">
        <p>انتخاب  برند</p>
        <select name="category" id="cat-sel" className="pbrand" >
        {
           brands.map(post => {
          return(
            <option value={post._id} key={post._id}>{post.title}</option>
          )
           })
       }
        </select>
    </div>
    <div className="add-form">
        <p>برچسب محصول</p>
        <input type="text" placeholder={post[0] && post[0].tags} id="ptag" />
    </div>
              </div>
    <div className="add-img">
        <p id="fsize">تغییر تصوير</p>
        <div className="aii" id="img-hid">
       <div className="ai" >
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  multiple onChange={x}/><p className="img-p">آپلود تصوير</p></div>
            
        </div>
        <img src="" alt="img" className="edit-img" />
       </div>
       <div className="aii">
       <div className="ai" >
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  multiple onChange={x}/><p className="img-p">آپلود تصوير</p></div>
            
        </div>
        <img src="" alt="img" className="edit-img" />
       </div>
        <div className="after-off">
         <p>برای هر محصول حداقل 1 و حداکثر 6 تصویر بارگذاری کنید.</p>
          <div className="ao"></div>
      </div> 
    </div>
    <div className="dash-title" id="fsize">
                    <p> قیمت و موجودی </p>
                </div>
    <div className="add-form" id="stock">
       <div className="stock1">
       <p>قیمت</p>
        <input type="text" placeholder={post[0] && post[0].price} id="pprice" />
       </div>
<div className="stck">

    <div className="stock2">
    <p>تعداد کارتن</p>
        <div className="stock">
           <a href="#"> <div className="add-btn" onClick={decStock} style={{fontSize: "50px"}}>-</div> </a>
            <p id="pstock">{stock}</p>
           <a href="#"> <div className="add-btn" onClick={incStock}>+</div> </a>
        </div>
    </div>
</div>
    </div>
    <div className="dash-title" id="fsize">
                    <p> تخفیف </p>
                </div>
                <div className="add-form">
        <p> اعمال تخفیف</p>
      <div className="add-inp">
      <input type="text" placeholder={post[0] && post[0].offPrice} id="poff" onChange={off}/> 
      <p>تومان</p>
          </div> 
          <div className="after-off">
          <p>دریافتی شما پس از تخفیف: <span id="off"></span> تومان</p>
          <div className="ao"></div>
      </div> 
    </div>
    { loading &&
    <div className="loader">
    <Loader
        type="Rings"
        color="#F58222"
        height={50}
        width={50}
        
      />
      <p>در حال ویرایش</p>
    </div>
}
    <div className="info-btn">
        <button onClick={submit}> ویرایش  محصول</button>
        </div>
                </div>
                <Navbar />
                </div>
              
    </div> );
}
 
export default Edit;