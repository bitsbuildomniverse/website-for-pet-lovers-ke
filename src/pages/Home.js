import React from 'react'
import './style.css'
import videos from './dogEating.mp4'

export default function index() {
    return (
        <main>
        <div className="video-container">
            
            <video autoplay="autoplay" muted loop="loop" className="cover-video">
                <source src={videos} type="video/mp4" onEnded/>
            </video>
            
        </div>
        <div className="overlay">
        </div>
        </main>
    )
}