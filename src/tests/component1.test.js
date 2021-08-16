import React, {Component} from 'react'
import {render, container} from '@testing-library/react'
import Component1 from '../components/component1.react'
  
// arrange - mock setup
jest.mock('../components/component2.react', () => () => <div id="mockComponent2">Hello Mock Component2</div>)
jest.mock('../components/component3.react', () => () => <div id="mockComponent3">Hello Mock Component3</div>)
 
describe("mock component tests", () => {
   test("mocked components in react", () => {
       // act
       const {container} = render(<Component1 />)
  
       // assert
       console.log(container.outerHTML)
       const mockComponent2 = container.querySelector('div#mockComponent2')
       const mockComponent3 = container.querySelector('div#mockComponent3')
       expect(mockComponent2).toBeInTheDocument()
       expect(mockComponent3).toBeInTheDocument()
   })
})