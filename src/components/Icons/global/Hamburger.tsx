import React from 'react'

type Props = {}

const Hamburger = (props: Props) => {
    return (
        <svg className='fill-primary hover:fill-primary-400 trans' viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="m3.22461 5.97485c0-.41421.33579-.75.75-.75h15.99999c.4142 0 .75.33579.75.75 0 .41422-.3358.75-.75.75h-15.99999c-.41421 0-.75-.33578-.75-.75z" /><path d="m3.22461 11.9749c0-.4143.33579-.75.75-.75h15.99999c.4142 0 .75.3357.75.75 0 .4142-.3358.75-.75.75h-15.99999c-.41421 0-.75-.3358-.75-.75z" /><path d="m3.22461 17.9749c0-.4143.33579-.75.75-.75h15.99999c.4142 0 .75.3357.75.75 0 .4142-.3358.75-.75.75h-15.99999c-.41421 0-.75-.3358-.75-.75z" />
            </g>
        </svg>
    )
}

export default Hamburger