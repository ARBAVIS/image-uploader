import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import UploadImage from './UploadImage'
import ImgDisplay from './ImgDisplay'

function App() {
  
  
  const [originalImg,setOriginalImg]=useState('https://example.com/original-image.jpg')
  const[processedImg,setProcessedImg]=useState('')
  const ImgUplodHandle=(e)=>{
    const file=e.target.files[0];
    const reader=new Filereader()
    reader.onload=()=>{
      setOriginalImg(reader.result);
      setProcessedImg(reader.result)
    };
    reader.readDataURL(file)
  }
 
  return (
    <div className='App'>
      <Navbar/>
      <main>
    <UploadImage ImgUplodHandle={ImgUplodHandle}/>
    <ImgDisplay originalImg={originalImg} processedImg={processedImg}/>
    </main>
  
    </div>
    
    
  )
  
}

export default App
