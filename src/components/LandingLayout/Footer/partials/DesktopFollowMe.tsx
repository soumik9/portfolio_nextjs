import { socialItems } from '@config/constants'
import { navItemType } from '@config/types/types'
import { Typography } from '@mui/material'
import React from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {}

const DesktopFollowMe = (props: Props) => {
    return (
        <div className='lg:flex hidden items-center pointer-events-none hover:pointer-events-auto group my-10 3xl:mb-0'>

            <Typography variant="body2" gutterBottom className="sm-header uppercase cursor-pointer pointer-events-auto">
                Follow me on
            </Typography>

            <div className="line w-[4rem] h-[3px] bg-white mx-[1rem] scale-x-[0.2] origin-left transition-[transform_0.5s] group-hover:scale-x-[1]">

            </div>

            <ul className="flex gap-2">
                {socialItems.map((item: navItemType, index: number) => <li key={`footerSocial${index}`} className={cx(
                    'footer-social-item group-hover:opacity-[1] group-hover:translate-y-0',
                    index === 4 && 'relative -top-1'
                )}>
                    <a href={item.url} target='_blank' rel='noreferrer'>
                        {item.icon}
                    </a>
                </li>)}

            </ul>

        </div>
    )
}

export default DesktopFollowMe