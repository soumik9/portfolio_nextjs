
import { navItemType } from "@config/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cx } from "src/hooks/helpers";

type Props = {
    item: navItemType;
    index: number;
    last: boolean;
};

const NavItem = ({ item, index, last }: Props) => {

    // global
    const { route } = useRouter();


    return (
        <li className="relative group menu py-5 cursor-pointer">
            <Link href={item.url} legacyBehavior>
                <a
                    className={cx(
                        " group-hover:text-primary trans block text-secondary text-base font-medium",
                        route === item.url &&
                        "!text-primary hover:text-primary-400 before:content-[''] before:absolute before:bottom-[20px] before:border-[1px] before:border-primary before:w-[30%] before:left-2",
                    )}
                    href="#"
                    aria-label={item.title}
                >
                    {item.title}
                </a>
            </Link>
        </li>
    );
};

export default NavItem;
