import { navItemType } from '@config/types/types'
import Link from 'next/link';
import React from 'react'

type Props = {
    array: navItemType[];
    title: string;
}

const FooterLinksDiv = ({ title, array }: Props) => {
    return (
        <>
            <span className="block uppercase text-sm font-semibold lg:text-white text-primary">{title}</span>

            <ul className="mt-4">
                {array.map((item: navItemType) => <li key={item._id} className='w-max'>
                    <Link href={item.url} legacyBehavior>
                        <a className="text-secondary font-secondary hover:text-primary-300 font-semibold trans block py-[9px] text-sm group" href="">
                            {item.title}

                            {/* <span className="line w-[4rem] h-[2px] bg-secondary scale-x-[0.2] origin-left transition-[transform_0.5s] group-hover:scale-x-[1]">

                            </span> */}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </>
    )
}

export default FooterLinksDiv