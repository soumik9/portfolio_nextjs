import React, { useState } from 'react'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { projectItems } from '@config/constants/projects'
import { IProject } from '@config/types/types'
import ProjectCard from '../Home/components/Projects/components/ProjectCard'
import ProjectDetailsModal from '../Home/components/Projects/components/ProjectDetailsModal'

const Project: React.FC = () => {

    // states
    const [open, setOpen] = useState<boolean>(false);
    const [detailsData, setDetailsData] = useState<IProject | undefined>();

    return (
        <main className='bg-bgDark'>
            <SectionLayout >
                <SectionTop
                    subTitle='👌 Recent Works'
                    title='Creative'
                    titleSpan={`Projects (${projectItems.length})`}
                />

                <div className='grid xll:grid-cols-2 gap-[30px]'>
                    {projectItems.map((item: IProject) => <ProjectCard
                        key={item._id}
                        data={item}
                        open={open}
                        setOpen={setOpen}
                        setDetailsData={setDetailsData}
                    />)}
                </div>

                <ProjectDetailsModal open={open} setOpen={setOpen} data={detailsData} />
            </SectionLayout>
        </main>
    )
}

export default Project