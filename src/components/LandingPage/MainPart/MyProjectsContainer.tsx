import { ProjectCard } from "./ProjectCard";
import { useContext } from "react";
import { LanguageContext } from "../../../components/LanguageProvider"
import { BackToTopButton } from "./BackToTopButton/BackToTopButton";

export const MyProjectsContainer = () => {

    const {polish} = useContext(LanguageContext);

    return ( 
        <div className='projects-container px-4 md:px-0 w-full mb-20'>
            {!polish && 
            <div className="w-4/6 h-12 md:h-48 flex md:justify-center items-center"><h3 className='text-white text-[1rem] md:text-2xl'>My projects</h3></div>
            }

            {polish && 
            <div className="w-4/6 h-12 md:h-48 flex md:justify-center items-center"><h3 className='text-white text-[1rem] md:text-2xl'>Moje projekty</h3></div>
            }

            <ProjectCard 
                projectName="BookShare" 
                projectImage="BookShare.png" 
                projectDescriptionEng='Responsive application of my idea and design for sharing books among users.'
                projectDescriptionPl='Responsywna aplikacja oparta o Google Books API, która umozliwia dzielenie się ksiazkami.'
                technologies={['React.js', 'Typescript', 'Material UI', 'Google Books API', 'Firebase Database and Authentication']}
                links={[
                    {linkNameEng:'Screen recording', linkNamePl:'Nagranie ekranu', link:'https://firebasestorage.googleapis.com/v0/b/portfolio-ec6b9.appspot.com/o/BSlight.webm?alt=media&token=112b2cef-a0ee-4dda-9b5b-cf330f7eaba3'},
                    {linkNameEng: 'Application', linkNamePl:'Aplikacja', link:'https://bookshare-react.netlify.app/'},
                    {linkNameEng: 'Prototype', linkNamePl:'Prototyp', link:'https://www.figma.com/proto/HiDWWAOSVMWauUqFiFgX45/Bookshare?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2'},
                    {linkNameEng: 'Repozytory', linkNamePl:'Repositorium', link: 'https://github.com/rajmanski/BookShare'}
                ]}
                />

            <ProjectCard 
                projectName="HSNotes" 
                projectImage="HSNotes.png" 
                projectDescriptionEng="Partly responsive app created as a final bootcamp project. We worked in SCRUM methodology in a team of 3."
                projectDescriptionPl="Aplikacja, którą sworzyliśmy na zakończenie bootcampu, w 3-osobowym zespole. Pracowaliśmy przez 2 tygodnie w metodologii SCRUM." 
                technologies={['React.js', 'Typescript', 'Firebase Database and Autehntication']}
                links={[
                    {linkNameEng: 'Application', linkNamePl: 'Aplikacja', link:'https://hsnotes.netlify.app/#/login'},
                    {linkNameEng: 'Repository', linkNamePl:'Repozytorium', link: 'https://github.com/infoshareacademy/jfddr7-team-react-ninjas'}
                ]}
                />

            <ProjectCard 
                projectName="Cakee" 
                projectImage="Cakee.png" 
                projectDescriptionEng="Landing page of a sweetshop. Based on Bootstrap components customised with Sass." 
                projectDescriptionPl="Strona startowa cukierni, stworzona z użyciem biblioteki Bootstrap. Stylizowana za pomocą preprocesora Sass."
                technologies={['React.js', 'Typescript', 'Bootstrap', 'Sass', 'Firebase Database and Authentication']}
                links={[
                    {linkNameEng: 'Prototype',linkNamePl:'Prototyp', link:'https://www.figma.com/proto/pXOogdaP33VvnswHI0uKit/SweetShop?page-id=0%3A1&node-id=14%3A121191'},
                    {linkNameEng: 'Repository', linkNamePl:'Repozytorium', link:'https://github.com/BeataGonera/Sweetshop---Bootstrap-and-Sass'}
                ]}
                />

            <ProjectCard 
                projectName="Perfume line page responsive layout" 
                projectImage="PerfumeLine.png" 
                projectDescriptionEng="Responsive layout of perfume line created during bootcamp." 
                projectDescriptionPl="Responsywny layout stworzony w czasie kursu."
                technologies={['HTML 5', 'CSS']}
                links={[
                    {linkNameEng:'Repository', linkNamePl:'Repozytorium', link:'https://github.com/BeataGonera/CSS_responsive_layout'}
                ]}
               />

            <BackToTopButton/>
        </div>
     );
}
 
