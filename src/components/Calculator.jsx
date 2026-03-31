import React, { useState } from 'react'

function Calculator() {
  const[result,setResult] = useState('');
  const clickHandle = (e) =>{
    setResult(result.concat(e.target.value))//concat means one by one number keep coming
  }
  const clearScreen =()=>{
    setResult("");
  }
  const calculate =()=>{
 setResult(eval(result).toString());//eval is js method used to calculate and toString is used to convert the result into string so if it is not number then it will not show error but it will show the result in string form
  }
  return (
    <div className="bg-gray-800  
    text-white w-screen h-screen
     flex items-center justify-center">
      <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-600">
      <div className="screen p-2">
        <input type="text" value={result} //here we take value result cause we want to show the result on screen and then call onclick down
      className="text-black w-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] 
      placeholder-black px-1 bg-gray-100 rounded-lg text-2xl pt-10 outline-none text-right" placeholder='0' />
      </div>
      <div className="brand bg-gray-200 bg-opacity-90 mb-2">
        <h1 className='text-gray-900 text-xs font-bold text-center'>Anchal</h1>
      </div>

      <div className="keyword">
        <div className="flex justify-between m-2">
          <button  value="C" onClick={clearScreen} className='bg-red-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>C</button>
          <button  value="<" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>←</button>
          <button  value="%" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>%</button>
          <button  value="/" onClick={clickHandle} className='bg-pink-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>/</button>
        </div>

        <div className="flex justify-between m-2">
          <button  value="7" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>7</button>
          <button  value="8" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>8</button>
          <button  value="9" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>9</button>
          <button  value="*" onClick={clickHandle} className='bg-green-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>*</button>
        </div>

        <div className="flex justify-between m-2">
          <button  value="4" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>4</button>
          <button  value="5" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>5</button>
          <button  value="6" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>6</button>
          <button  value="-" onClick={clickHandle} className='bg-purple-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>-</button>
        </div>

        <div className="flex justify-between m-2">
          <button  value="1" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>1</button>
          <button  value="2" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>2</button>
          <button  value="3" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>3</button>
          <button  value="+" onClick={clickHandle} className='bg-violet-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>+</button>
        </div>

        <div className="flex justify-between m-2">
          <button  value="0" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>0</button>
          <button  value="00" onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>00</button>
          <button  value="." onClick={clickHandle} className='bg-gray-200 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>.</button>
          <button  value="=" onClick={calculate} className='bg-orange-300 cursor-pointer w-12 h-12 shadow-md rounded-lg text-center text-black font-medium'>=</button>
        </div>


      </div>
      </div>
      </div>
  )
}

export default Calculator