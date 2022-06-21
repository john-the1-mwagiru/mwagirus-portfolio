import React from 'react'
import Projects from './Projects'
const Productlist = () => {
  return (
<div className='pl'>
     <div className="pl-texts">
         <h1 className='pl-title'>My Projects</h1>
         <p className='pl-desc'>
          These are some of the projects that i've worked on.
         </p>
     </div>
    <div className="pl-list">
    <Projects/>
    </div>
</div>
  )
}

export default Productlist