import React, { useEffect, useState } from 'react'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { projectCategoryOptions, projectItems } from '@config/constants/projects'
import { IProject, selectItemType } from '@config/types/types'
import ProjectCard from '../Home/components/Projects/components/ProjectCard'
import ProjectDetailsModal from '../Home/components/Projects/components/ProjectDetailsModal'
import SelectCustom from '@components/Forms/SelectCustom'

const Project: React.FC = () => {

    // states
    const [open, setOpen] = useState<boolean>(false);
    const [detailsData, setDetailsData] = useState<IProject | undefined>();
    const [selectedCategory, setSelectedCategory] = useState<selectItemType | undefined>(projectCategoryOptions[0]);
    const [filterProjectItems, setFilterProjectItems] = useState<IProject[]>(projectItems);

    // filtering project items
    useEffect(() => {
        if (selectedCategory?.value) {
            setFilterProjectItems(projectItems.filter((item: IProject) => item.category === selectedCategory.value));
        } else {
            setFilterProjectItems(projectItems)
        }
    }, [selectedCategory?.value])

    return (
        <main className='bg-bgDark'>
            <SectionLayout >
                <SectionTop
                    subTitle='👌 Recent Works'
                    title='Creative'
                    titleSpan={`Projects (${filterProjectItems.length})`}
                />

                <div className='mb-[15px] md:mb-[25px] lg:mb-[60px]'>
                    <div className='flex justify-end w-full'>
                        <SelectCustom
                            value={selectedCategory}
                            defaultValue={selectedCategory}
                            onChange={(option: selectItemType) => setSelectedCategory(option)}
                            options={projectCategoryOptions}
                            label='Categories'
                            placeHolder='Select Rank'
                        />
                    </div>
                </div>


                <div className='grid xll:grid-cols-2 gap-[30px]'>
                    {filterProjectItems.map((item: IProject) => <ProjectCard
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