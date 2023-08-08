import { skillItemType } from '@config/types/types';
import { AiOutlineFileExcel, AiOutlineFileWord, AiOutlineHtml5 } from 'react-icons/ai';
import { BsFiletypeCss, BsBootstrap } from 'react-icons/bs';
import { BiLogoTailwindCss, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript, BiLogoHeroku, BiLogoNetlify } from 'react-icons/bi';
import { RiJavascriptLine } from 'react-icons/ri';
import { FiGithub, FiTrello } from 'react-icons/fi';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { SiExpress, SiMongoose, SiMysql, SiPostgresql } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { LiaFilePowerpointSolid } from 'react-icons/lia';
import { cx } from 'src/hooks/helpers';

const commonCls = 'text-primary text-[22px] md:text-[26px]'

export const skillItems: skillItemType[] = [
    {
        _id: 'skill_1',
        title: "HTML ",
        icon: <AiOutlineHtml5 className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_2',
        title: 'CSS',
        icon: <BsFiletypeCss className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_3',
        title: 'JavaScript',
        icon: <RiJavascriptLine className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_4',
        title: 'Bootstrap',
        icon: <BsBootstrap className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_5',
        title: 'TailwindCSS',
        icon: <BiLogoTailwindCss className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_3xs',
        title: 'TypeScript',
        icon: <TbBrandTypescript className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_6',
        title: 'ReactJS',
        icon: <BiLogoReact className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_7',
        title: 'NextJS',
        icon: <TbBrandNextjs className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_8',
        title: 'Redux Toolkit',
        icon: <BiLogoRedux className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_9',
        title: 'NodeJS',
        icon: <BiLogoNodejs className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_10',
        title: 'Express',
        icon: <SiExpress className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_11',
        title: 'MongoDB',
        icon: <BiLogoMongodb className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_12',
        title: 'Mongoose',
        icon: <SiMongoose className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_13',
        title: 'MySQL',
        icon: <SiMysql className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_14',
        title: 'PostgreSQL',
        icon: <SiPostgresql className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_15',
        title: 'Laravel',
        icon: <FaLaravel className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_16',
        title: 'Github',
        icon: <FiGithub className={cx(commonCls)} />,
        isExpert: true
    },
    {
        _id: 'skill_17',
        title: 'Trello',
        icon: <FiTrello className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_18',
        title: 'Heroku',
        icon: <BiLogoHeroku className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_19',
        title: 'Netlify',
        icon: <BiLogoNetlify className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_20',
        title: 'MS Word',
        icon: <AiOutlineFileWord className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_21',
        title: 'MS Excel',
        icon: <AiOutlineFileExcel className={cx(commonCls)} />,
        isExpert: false
    },
    {
        _id: 'skill_22',
        title: 'MS Powerpoint',
        icon: <LiaFilePowerpointSolid className={cx(commonCls)} />,
        isExpert: false
    },
]