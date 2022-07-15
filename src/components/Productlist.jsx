import React from 'react'
import Projects from './Projects'
import Project2 from './Project2'
import Project3 from './Project3'
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
    <Project2/>
    <Project3/>
    </div>

</div>
  )
}

export default Productlist