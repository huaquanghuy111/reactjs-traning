import React from 'react'

const nums = [1,2,3,4,5,1]
const Test = () =>{
    const listNums = nums.map(element => <li key={element}> this is {element} </li>)
    return <ul>{listNums}</ul>
}

export default Test