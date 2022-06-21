import React from 'react'
const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro' >Hello, My name is</h2>
                <h1 className='i-name'>John Mwagiru</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                       <div className="i-title-item">Web Developer</div>
                       
                    </div>
                </div>
                <div className="i-desc">
                    I'm a web developer based in Nairobi.I specialize in creating modern websites.I'm quite versatile in technologies such as JavaScript,React Js,HTML5 and CSS.
                </div>
            </div>
        </div>
        <div className="i-right">
             <img src="./assets/john.jpeg" alt="" className="i-img" />
        </div>

    </div>
  )
}

export default Intro