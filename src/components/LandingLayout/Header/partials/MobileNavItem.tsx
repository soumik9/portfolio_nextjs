import { navItemType } from '@config/types/types';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {
    item: navItemType;
    setShowSideNav: (showSideNav: boolean) => void;
};

const MobileNavItem = ({ item, setShowSideNav }: Props) => {

    // global
    const { route } = useRouter();

    return (
        <li
            //   onClick={() => setOpen(!open)}
            className={cx(
                "mb-1 relative",
            )}
        >
            <Link href={item.url} legacyBehavior>
                <a
                    className={cx(
                        "block py-[15px] px-[40px]",
                        route === item.url ? "text-primary-300 bg-lightDark" : "bg-transparent text-lightDark",
                    )}
                    href="#"
                    onClick={() => setShowSideNav(false)}
                >
                    {item.title}
                </a>
            </Link>
        </li>
    )
}

export default MobileNavItem