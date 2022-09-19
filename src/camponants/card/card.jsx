
import {FaStoreAlt} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineAttachMoney} from 'react-icons/md'
import {Button} from 'react-bootstrap'
import './card.css'

const Card = (props) => {
      return(
            <div className=" w-100  bg-white  p-4">
              <div className="w-100  position-relative card-img">
                  <img className="w-100 h-100" src={props.productImg} />
                  <div className='cart-tag px-3 py-1 position-absolute  top-0'>{props.productTag}</div>
              </div>
              <h5 className='mt-2 mb-1 cart-textfixer'>{props.productName}</h5>
              <p className='d-flex align-items-center gap-1 mb-1'>
                <FaStoreAlt/>
                <span className='text-black-50 cart-textfixer'>{props.Category}</span>
              </p>
              <p className='d-flex align-items-center gap-1 mb-1 '>
                 <AiFillStar className='text-black-50' /> 
                <h6 className=' m-0 cart-textfixer'>{props.productRate}</h6>
                <span className='text-black-50' >
                      (
                            <span >{props.productRateCount}</span>نظر
                      )
                </span>
              </p>
             <div className='d-flex justify-content-between align-items-center'>
                   <div>
                         <button className='card-btn' 
                         onClick={()=> props.setbasketList([...props.basketList 
                                     , {productName : props.productName 
                                     , productPrice : props.productPrice
                                     , productId : props.productId}]) }  //xxxxxxxxxxxxxxxxxxxxxxxx
                         >+</button>
                   
                   </div>
                   <div>
                         
                         <span>{props.productPrice}</span>
                         <MdOutlineAttachMoney/>
                   </div>
             </div>


            </div>
      )
}

export default Card