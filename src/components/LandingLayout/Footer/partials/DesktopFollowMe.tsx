import { socialItems } from '@config/constants'
import { navItemType } from '@config/types/types'
import React from 'react'
import { cx } from 'src/hooks/helpers'

const DesktopFollowMe: React.FC = () => {
    return (
        <div className='lg:flex hidden items-center my-10 3xl:mb-0'>

            <p className="text-sm uppercase cursor-pointer relative top-[-1px]">
                Follow me on
            </p>

            <div className="line w-[4rem] h-[2px] bg-secondary mx-[1rem] scale-x-[1] origin-left transition-[transform_0.5s]">

            </div>

            <ul className="flex gap-4">
                {socialItems.map((item: navItemType, index: number) => <li
                    key={`footerSocial${index}`}
                    className={cx(
                        '',
                        index === 4 && 'relative -top-1'
                    )}>
                    <a href={item.url} target='_blank' rel='noreferrer' aria-label={item.title}>
                        {item.icon}
                    </a>
                </li>)}

            </ul>

        </div>
    )
}

export default DesktopFollowMe