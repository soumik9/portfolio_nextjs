import { navItemType } from '@config/types/types'
import Link from 'next/link';
import React from 'react'

type Props = {
    array: navItemType[];
    title: string;
}

const FooterLinksDiv = ({ title, array }: Props) => {
    return (
        <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-sm font-semibold text-white">{title}</span>
            <ul className="mt-4">
                {array.map((item: navItemType) => <li>
                    <Link href={item.url} legacyBehavior>
                        <a className="text-secondary font-secondary hover:text-primary-300 font-semibold trans block py-2 text-sm" href="">
                            {item.title}
                        </a>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default FooterLinksDiv