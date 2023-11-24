import React, { useEffect, useState } from 'react'
import serie from './Formula'
import img from './assets/serie.png'

const App = () => {
    const [number,setNumber]=useState(0)
    const [result,setResult]= useState(0)

    useEffect(() => {
      setResult(serie(parseInt(number)))
    }, [number])
    
    const submit = (e) =>{
        e.preventDefault()
        setNumber(e.target[0].value)
    }

  return (
    <>
    <div style={{width: 400}} className='card m-auto text-center mt-5 border rounded'>
  <img src={img} className="card-img-top" alt="imagen de la serie"/>
  <div className="card-body">
  <h5 className="card-title my-3">Introduce el valor de n</h5>
    <form className='my-3 container' onSubmit={(e)=>submit(e)}>
      <input className='form-control' type='number'placeholder='valor de n'/>
      <button className='btn btn-dark my-3' type="submit">Solucion</button>
    </form>
    <h5 className="card-title my-3">El valor de n={number}</h5>
    <p className="card-text my-3">La solucion de la serie con n</p>
    <p className="card-text my-3">Serie({number})={result}</p>
  </div>
</div>
    </>
  )
}

export default App