import React, { Component} from 'react'
import Component2 from './component2.react'
import Component3 from './component3.react'
class Component1 extends Component {
   render() {
       return(
           <div>
           <div id="component1">Hello Component1</div>
           <Component2 />
           <Component3 />
           </div>
       )
   }
}
export default Component1
