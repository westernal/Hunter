import Head from 'next/head'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react'
import Link from 'next/dist/client/link';
import Loader from "react-loader-spinner";


const ADD = () => {

    const[posts,setPosts] = useState([]);
    const[brands,setBrands] = useState([]);
    const[loading,setLoading] = useState(false);

    let images=[];

let i =0;
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
   

    useEffect(() => { 
         
        
            var requestOptions = {
                        method: 'GET',
                        headers: {
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://server.hunterpartapp.com/api/admin/product/category", requestOptions)
                    .then(res => res.json())
                    .then(res => setPosts(res.data.categories))

                    var requestOptions2 = {
                        method: 'GET',
                        headers: {"content-type":"aplication/json",
                    "x-auth-token":`${localStorage.getItem('token')}`},
                        redirect: 'follow'
                      };
                    fetch("https://server.hunterpartapp.com/api/admin/product/brand", requestOptions2)
                    .then(res => res.json())
                    .then(res => setBrands(res.data.brands))
        
    
    }, [])
    var stock = 1;
    let offprice;
    function off(params) {
         offprice = document.getElementById("pprice").value - document.getElementById("poff").value;
         document.getElementById("off").innerText = offprice;
    }
   

    async function submit() {
        setLoading(true);
        let name = document.getElementById("pname").value;
        let car = document.getElementById("pcar").value;
        let price = document.getElementById("pprice").value;
        let tag = document.getElementById("ptag").value;
        let off = document.getElementById("poff").value;
        let cat = document.getElementsByClassName("pcat")[0].value;
        let brand = document.getElementsByClassName("pbrand")[0].value;
        let img = document.getElementById("file");
    

        var formdata = new FormData();

        formdata.append("title", name);
for (let i = 0; i < images.length; i++) {
    formdata.append("image",images[i]);
    
}

formdata.append("category", cat);
formdata.append("brand", brand);
formdata.append("tags", tag);
formdata.append("price", price);
formdata.append("offPrice", off);
formdata.append("stock", stock);
formdata.append("carModel", car);

        var requestOptions = {
            method: 'POST',
            headers: {
           "x-auth-token":`${localStorage.getItem('token')}`},
            body:formdata,
            redirect: 'follow'
          };
        let res = await fetch("https://server.hunterpartapp.com/api/admin/product/add", requestOptions);
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
                <title>    ?????????????? - ??????????</title>
                    </Head>
                    <Header />
                    <div id="myModal2" className="modal">

<div className="modal-content">
  <div className="modal-main">
   <p>??????????  ???????? ?????? ???? </p>
<div className="info-btn">
   <Link href="/products"><a ><button className="close">??????????</button></a></Link> 
</div>


</div>
</div>
</div>
                    <div className="profile-header">
                    <p> ??????????????</p>
                </div>
                <div className="pm">
                <div className="profile-main">
                <div className="dash-title" id="main-title">
                <Link href="/products"><a > <p id="back">&larr; ???????????? ???? ???????? ??????</p> </a></Link>
                    <p>???????????? ?????????? </p>
                </div>
                <div className="dash-title" id="fsize">
                    <p> ?????? ?? ???????? ???????? ?????????? </p>
                </div>
              <div className="ap-res">
             
                <div className="add-form">
        <p>?????? ??????????</p>
        <input type="text" placeholder="????????: ???????? ?????????? ??????" id="pname" />
    </div>
    <div className="add-form">
        <p>?????? ??????????</p>
        <input type="text" placeholder="????????:   ??????" id="pcar" />
    </div>
    <div className="add-form" >
        <p>???????????? ???????? ????????</p>
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
        <p>????????????  ????????</p>
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
        <p>?????????? ??????????</p>
        <input type="text" placeholder="????????: ???????? ?????????? ??????" id="ptag" />
    </div>
              </div>
    <div className="add-img">
        <p id="fsize">???????????? ??????????</p>
        <div className="aii" id="img-hid">
       <div className="ai" >
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  multiple onChange={x}/><p className="img-p">?????????? ??????????</p></div>
            
        </div>
        <img src="" alt="img" className="edit-img" />
       </div>
       <div className="aii">
       <div className="ai" >
        <img src="/Images/image placeholder.svg" alt="upload image" />
            <div className="ai1"><input id="file" type="file"  multiple onChange={x}/><p className="img-p">?????????? ??????????</p></div>
            
        </div>
        <img src="" alt="img" className="edit-img" />
       </div>
        <div className="after-off">
         <p>???????? ???? ?????????? ?????????? 1 ?? ???????????? 6 ?????????? ???????????????? ????????.</p>
          <div className="ao"></div>
      </div> 
    </div>
    <div className="dash-title" id="fsize">
                    <p> ???????? ?? ???????????? </p>
                </div>
    <div className="add-form" id="stock">
       <div className="stock1">
       <p>????????</p>
        <input type="text" placeholder="????????: 124,000 ??????????" id="pprice" />
       </div>
<div className="stck">

    <div className="stock2">
    <p>?????????? ??????????</p>
        <div className="stock">
           <a href="#"> <div className="add-btn" onClick={decStock} style={{fontSize: "50px"}}>-</div> </a>
            <p id="pstock">{stock}</p>
           <a href="#"> <div className="add-btn" onClick={incStock}>+</div> </a>
        </div>
    </div>
</div>
    </div>
    <div className="dash-title" id="fsize">
                    <p> ?????????? </p>
                </div>
                <div className="add-form">
        <p> ?????????? ??????????</p>
      <div className="add-inp">
      <input type="text" placeholder="0" id="poff" onChange={off}/> 
      <p>??????????</p>
          </div> 
          <div className="after-off">
          <p>?????????????? ?????? ???? ???? ??????????: <span id="off"></span> ??????????</p>
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
      <p>???? ?????? ??????</p>
    </div>
}
    <div className="info-btn">
        <button onClick={submit}>?????? ?? ???????????? ??????????</button>
        </div>
                </div>
                <Navbar />
                </div>
              
    </div> );
}
 
export default ADD;