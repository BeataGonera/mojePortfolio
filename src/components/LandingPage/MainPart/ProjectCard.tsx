import { FC } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../../components/LanguageProvider';

interface link{
    linkNameEng: string;
    linkNamePl: string;
    link: string;
}

interface ProjectCard{
    projectName: string;
    projectImage: string;
    projectDescriptionEng: string;
    projectDescriptionPl: string;
    technologies: string[];
    links:link[]
}

export const ProjectCard:FC<ProjectCard> = ({projectName, projectImage, projectDescriptionEng, projectDescriptionPl, technologies, links }) => {

    const {polish} = useContext(LanguageContext)


    return ( 
        <div className="project-card w-full lg:min-h-32 md:min-h-96 mb-2 md:mb-4 bg-silver text-white relative">
            <figure className='flex justify-between items-center p-4 md:p-6 gap-8'>
                <div className='w-full self-start'>
                    <figcaption className='md:text-center text-[1rem] md:text-2xl mb-2 md:mb-8'>{projectName}</figcaption>
                    <div className='project-details mr-2 mb-12 lg:mb-0'>
                        {!polish && <p className='mb-4 text-sm md:text-lg font-light md:font-normal'>{projectDescriptionEng}</p>}
                        {polish && <p className='mb-4 text-sm md:text-lg font-light md:font-normal'>{projectDescriptionPl}</p>}

                        {!polish && <p className='hidden md:block mb-2'>Technologies I used:</p>}
                        {polish &&<p className='hidden md:block mb-2'>Technologie:</p>}

                        <ul className='hidden md:block'>
                            {technologies.map((technology, number)=> (
                                <li key={number} className='font-light'>{technology}</li>
                                ))
                            }    
                            
                        </ul>
                    </div>
                    
                    
                    {!polish && 
                        <button className='md:hidden text-sm text-yellow-orange bg-silver font-light mt-2 h-4'>Show details</button>
                        }

                        {polish && 
                        <button className='md:hidden text-sm text-yellow-orange bg-silver font-light pl-4 mt-2 h-4'>Rozwiń</button>
                        }
                </div>
                <img src={projectImage} alt="" className='flex md:hidden lg:flex w-32 h-full md:w-[40%] md:h-full'/>
            </figure>

            <div className='w-full'>
                        {!polish && 
                        <div className='text-yellow-orange font-light hidden md:flex lg:w-full underline justify-start lg:justify-start gap-2 lg:gap-12 mx-1 lg:mx-8 h-12'>
                            {links.map((link, number)=> (
                                <div key={number}><a href={link.link}>{link.linkNameEng}</a></div>
                            )
                            )}

                        </div>
                        }

                        {polish && 
                        <div className='text-yellow-orange font-light hidden md:flex lg:w-full underline justify-between lg:justify-start gap-2 lg:gap-12 mx-1 lg:mx-8 h-12'>
                            {links.map((link)=> (
                                <div><a href={link.link}>{link.linkNamePl}</a></div>
                            )
                            )}
                        </div>
                        }
                    </div>
          
        </div>
     );
}
 
