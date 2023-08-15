import Image from 'next/image';
import React from 'react'
import { cx } from 'src/hooks/helpers';
import { IProject } from '@config/types/types';
import { backendDevelopment, frontendDevelopment, fullStackWebDevelopment } from '@config/constants/projects';
import { BsCheck } from 'react-icons/bs';
import Button from '@components/Button/Button';

type Props = {
    data: IProject;
    open: boolean;
    setOpen: (open: boolean) => void;
    setDetailsData: (detailsData: IProject | undefined) => void;
}

const ProjectCard = ({ open, data, setOpen, setDetailsData }: Props) => {
    return (
        <>
            <div className="shadow p-4 rounded bg-lightDark min-h-[600px] overflow-hidden">
                <div>

                    <div className="flex justify-center relative rounded-lg overflow-hidden h-80">
                        <div className="relative overflow-hidden transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                            <Image src={data.thumbnail} alt={data.title} fill={true} className=' object-cover rounded' />
                        </div>
                    </div>

                    <div className='border-b border-dashed mt-2'></div>

                    <div className="mt-3.5 flex flex-col md:flex-row gap-y-1 md:gap-y-0 justify-between items-center">
                        <h2 className="font-medium text-base md:text-lg text-secondary">
                            {data.title}
                        </h2>
                        <p className={cx(
                            "text-sm px-2 py-1 rounded",
                            data.category === fullStackWebDevelopment && 'bg-purple text-bgDark',
                            data.category === backendDevelopment && 'bg-purple-600 text-secondary',
                            data.category === frontendDevelopment && 'bg-purple-700 text-primary-300',
                        )}>
                            {data.category}
                        </p>
                    </div>

                    <ul className="mt-6 md:mt-8">
                        {data.features.slice(0, 3).map((item: string, index: number) =>
                            <li className='flex gap-1.5 my-3.5 w-full' key={`projectFeature${index}`}>
                                <BsCheck className='text-primary text-[24px]' />
                                <p className='text-[0.9rem] tracking-wide overflow-hidden whitespace-nowrap text-ellipsis' title={item}>{item}</p>
                            </li>
                        )}
                    </ul>


                    <div className='mt-5 md:mt-7 flex justify-between items-center'>
                        <a href={data.links[0].link} target='_blank' rel="noreferrer" className='bg-white text-purple-700 hover:text-purple-600 border border-primary focus:text-white p-[10px] text-sm focus:bg-smartian rounded-sm font-medium button-arounder'>{data.links[0].name}</a>

                        <Button
                            text='Show More'
                            classes='p-[10px] text-sm'
                            onClick={() => {
                                setOpen(!open);
                                setDetailsData(data);
                            }}
                        />
                    </div>


                </div>
            </div>
        </>
    )
}

export default ProjectCard