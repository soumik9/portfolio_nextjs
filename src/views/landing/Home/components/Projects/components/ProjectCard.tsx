import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { cx } from 'src/hooks/helpers';
import { IProject } from '@config/types/types';

type Props = {
    data: IProject;
}

const ProjectCard = ({ data }: Props) => {

    // global
    const router = useRouter();

    return (
        <div className="shadow p-4 rounded bg-lightDark">

            <div>
                <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full border-b-2 border-dashed">
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                        {/* <Image src={data.image} alt={data.name} layout='fill' /> */}
                    </div>

                    <span className={cx(
                        "absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10  text-sm font-medium text-white select-none",
                        // data.status === 'In Stock' ? 'bg-success' : 'bg-error'
                    )}>
                        {/* {data.status} */}
                    </span>
                </div>

                <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                        {/* {data.name} */}
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 line-clamp-1">
                        {/* {data.category} */}
                    </p>
                </div>

                <div className="grid grid-cols-2 mt-8">

                    <div className="flex justify-end items-center">
                        <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl text-lg">
                            {/* <span className='text-[28px]'>{bdtSymbol}</span>
                                    <span className="">{data.price}</span> */}
                        </p>
                    </div>
                </div>
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