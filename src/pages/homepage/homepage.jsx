import Card from "../../camponants/card/card"
import './hompage.css'
import {fakedata} from '../../fakedata/fakedata'
import { useEffect, useState } from "react"
import axios from 'axios'
import Basket from "../../camponants/basket/basket"
const Homepage = () => {
      const [productList , setproductList] = useState([]) 
      const [basketList , setbasketList] = useState([])   //xxxxxxxxxxxxxxxxxxx
      useEffect(() =>{
            //get offline data
            //setproductList(fakedata.filter(item => item.rating.rate >=3))
            axios.get('https://fakestoreapi.com/products')
            .then((data) => setproductList(data.data))
            // .catch is for eror
            .catch((err) => console.log(err))
            } , [] )
      return(
            <div dir="rtl" className="bg-light d-flex  gap-1" >
  
                   <div className="w-25 h-100">
                         <Basket
                         basketList = {basketList}  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                         setbasketList = {setbasketList}  //xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                         />
                   </div> 

                  <div className="w-100 h-100  d-flex flex-wrap justify-content-center align-items-center p-2 gap-3 ">
                     {productList .map(item => {
                           
                           return(
                                 <div key={`productList-${item.id}`} className="hompage">
                                 <Card
                                 productId = {item.id}  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 productTag='موجودی محدود'
                                 productPrice={item.price}
                                 productRateCount={item.rating.count}
                                 productRate={item.rating.rate}
                                 Category={item.category}
                                 productName={item.title}
                                 productImg={item.image}
                                 basketList = {basketList}  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 setbasketList = {setbasketList}  //xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 />
                           </div>
                           )
                     })}
                  </div>
            </div>
      )
}
export default Homepage