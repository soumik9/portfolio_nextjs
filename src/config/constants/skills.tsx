import { skillItemType } from '@config/types/types';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsFiletypeCss, BsBootstrap } from 'react-icons/bs';
import { BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from 'react-icons/bi';
import { RiJavascriptLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { cx } from 'src/hooks/helpers';

const commonCls = 'text-primary text-[26px]'

export const skillItems: skillItemType[] = [
    {
        _id: 'skill_1',
        title: 'HTML',
        icon: <AiOutlineHtml5 className={cx(commonCls)} />,
    },
    {
        _id: 'skill_2',
        title: 'CSS',
        icon: <BsFiletypeCss className={cx(commonCls)} />,
    },
    {
        _id: 'skill_3',
        title: 'JavaScript',
        icon: <RiJavascriptLine className={cx(commonCls)} />,
    },
    {
        _id: 'skill_4',
        title: 'Bootstrap',
        icon: <BsBootstrap className={cx(commonCls)} />,
    },
    {
        _id: 'skill_5',
        title: 'TailwindCSS',
        icon: <BiLogoTailwindCss className={cx(commonCls)} />,
    },
    {
        _id: 'skill_6',
        title: 'ReactJS',
        icon: <BiLogoReact className={cx(commonCls)} />,
    },
    {
        _id: 'skill_7',
        title: 'NextJS',
        icon: <TbBrandNextjs className={cx(commonCls)} />,
    },
    {
        _id: 'skill_8',
        title: 'Redux Toolkit',
        icon: <BiLogoRedux className={cx(commonCls)} />,
    },
]