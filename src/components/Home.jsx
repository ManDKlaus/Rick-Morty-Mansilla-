import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home' >
        <div className='cont'>
            <div className='cont2' >
                <p id='fixed'>I´m </p>
                <ul className='dynamicText'>
                    <li><span>Nicolás</span></li>
                    <li><span>Daniel</span></li>
                    <li><span>Mansilla</span></li>
                    <li><span>student</span></li>
                    <li><span>developer</span></li>
                </ul>
            </div>
            <div className='cont2' >
                <p id='fixed2'>I´m </p>
                <ul className='dynamicText'>
                    <li><span>tired</span></li>
                    <li><span>destroyed</span></li>
                    <li><span>drained</span></li>
                    <li><span>fatigued</span></li>
                    <li><span>exhausted</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
