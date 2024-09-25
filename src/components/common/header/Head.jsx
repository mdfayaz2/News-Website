import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB '>
          <div className='logo'>
            <img src='/news-website/images/logo1.png' alt='' />
          </div>
          <div  style={{ 
  textAlign: 'center', 
  padding: '2px', 
  backgroundColor: '#1e1e1e', 
  color: '#fff', 
  borderBottom: '5px solid #f44336'
}}>
            <h1 style={{ 
    fontFamily: 'Arial, sans-serif', 
    fontWeight: 'bold', 
    fontSize: '4rem', 
    letterSpacing: '3px' 
  }} >NEWS CHANNEL</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
