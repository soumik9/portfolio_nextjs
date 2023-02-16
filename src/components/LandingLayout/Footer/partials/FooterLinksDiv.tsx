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
                {array.map((item: navItemType) => <li key={item._id}>
                    <Link href={item.url} legacyBehavior>
                        <a className="text-secondary font-secondary hover:text-primary-300 font-semibold trans block py-[9px] text-sm" href="">
                            {item.title}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </>
    )
}

export default FooterLinksDiv