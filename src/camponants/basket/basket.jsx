import './basket.css'
import {Button} from 'react-bootstrap'

const Basket = (props) => 
{
      return(
            <div className="basket-container w-100 h-100 bg-white">
                  <div className="w-100 basket-itemlist">
                       
                           {props.basketList.map (item =>{ //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                 return(
                              <div className="w-100 d-flex justify-between align-items-center">
                                    <p className="w-75 cart-textfixer ">{item.productName}</p>  
                                    <div key={`basketList${item.productId}`}>
                                    <span>{item.productPrice}</span>
                                    <Button variant='danger'
                                    onClick={ ()=> props.setbasketList(props.basketList.filter(product => product.productId != item.productId)) }  //xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                     >-</Button>
                                    </div>
                                 </div>   
                                 )
                           })}
                        

                  </div>
                  <div className="w-100 h-25 d-flex flex-column justify-content-center align-items-center">
                        <h3>
                              <span>{props.basketList.reduce((sum,current) => sum+current.productPrice , 0)}</span> 
                              $
                       </h3>
                        <button className='btn-basket ' >خرید</button>

                  </div>

            </div>
      )
}
export default Basket