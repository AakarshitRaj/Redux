import React from 'react'
import { buyIceCream } from '../redux/icecream/icecreamAction'
import {connect} from 'react-redux'

function IceCreamContainer (props){
  return (
    <div>
      <h2>Number of iceCream-{props.numOficeCreams}</h2>
      <button onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return {
        numOficeCreams:state.iceCream.numOficeCreams
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
