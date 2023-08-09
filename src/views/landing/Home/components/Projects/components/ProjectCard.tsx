import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';
import { cx } from 'src/hooks/helpers';
import { IProject } from '@config/types/types';
import { backendDevelopment, frontendDevelopment, fullStackWebDevelopment } from '@config/constants/projects';
import { BsCheck } from 'react-icons/bs';

type Props = {
    data: IProject;
}

const ProjectCard = ({ data }: Props) => {

    // global
    const router = useRouter();

    return (
        <div className="shadow p-4 rounded bg-lightDark min-h-[600px]">

            <div>

                <div className="flex justify-center relative rounded-lg overflow-hidden h-80">
                    <div className="relative overflow-hidden transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                        <Image src={data.thumbnail} alt={data.title} fill={true} className=' object-cover rounded' />
                    </div>
                </div>

                <div className='border-b border-dashed mt-2'></div>

                <div className="mt-3.5 flex justify-between items-center">
                    <h2 className="font-medium text-base md:text-lg text-secondary">
                        {data.title}
                    </h2>
                    <p className={cx(
                        "text-sm  px-2 py-1 rounded",
                        data.category === fullStackWebDevelopment && 'bg-purple text-bgDark',
                        data.category === backendDevelopment && 'bg-purple-600 text-secondary',
                        data.category === frontendDevelopment && 'bg-purple-700 text-primary-300',
                    )}>
                        {data.category}
                    </p>
                </div>

                <ul className="mt-8">
                    {data.features.slice(0, 3).map((item: string, index: number) =>
                        <li className='flex gap-1.5 my-3.5' key={`projectFeature${index}`}>
                            <BsCheck className='text-primary text-[24px] ' />
                            <p className='text-[0.9rem] tracking-wide'>{item}</p>
                        </li>
                    )}
                </ul>

            </div>

            {/* <div className='mt-3.5'>
                        <Button
                            text={}
                            classes='w-full'
                            type='button'
                        />
                    </div> */}
        </div>
    )
}

export default ProjectCard