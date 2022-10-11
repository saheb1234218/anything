import React from 'react'
import "./common.css"
export default function Bar(props) {
    return (
        <div className='d-flex flex-column mt-4'>
            <div className='d-flex flex-row gap-2'>
                <circle className='circle'></circle>
                <span className='side-text'>Basic Details</span>

            </div>
            <div className="progress-bar-vertical" style={{backgroundColor: `${props.part>=2?'#06960d':'rgb(243, 239, 239)'}`}}>
                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div className='d-flex flex-row gap-2'>
                <circle style={{backgroundColor: `${props.part>=3?'#06960d':'rgb(243, 239, 239)'}`}} className='circle'></circle>
                <span className='side-text'>Employment Details</span>

            </div>
            <div className="progress-bar-vertical" style={{backgroundColor: `${props.part>=3?'#06960d':'rgb(243, 239, 239)'}`}}>
                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div className='d-flex flex-row gap-2'>
                <circle className='circle' style={{backgroundColor: `${props.part>=4?'#06960d':'rgb(243, 239, 239)'}`}}></circle>
                <span className='side-text'>Education Details</span>

            </div>
            <div className="progress-bar-vertical" style={{backgroundColor: `${props.part>=4?'#06960d':'rgb(243, 239, 239)'}`}}>
                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <div className='d-flex flex-row gap-2'>
                <circle className='circle' style={{backgroundColor: `${props.part>=4?'#06960d':'rgb(243, 239, 239)'}`}}></circle>
                <span className='side-text'>Last Steps</span>

            </div>

        </div>
    )
}
