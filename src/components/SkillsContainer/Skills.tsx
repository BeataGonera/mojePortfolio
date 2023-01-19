import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

interface skill{
    skill: string;
    level: string;
}

interface language{
    language: string;
    level: string;
}


export const Skills = () => {

    const {polish} = useContext(LanguageContext)

    const skills:skill[] = [
        {skill: 'HTML', level: '85%'},
        {skill: 'CSS', level: '85%'}, 
        {skill: 'JavaScript', level: '85%'}, 
        {skill: 'React.js', level: '75%'}, 
        {skill: 'Typescript', level: '75%'}
    ]

    const otherSkills:string[] = [
        'Tailwind',
        'Bootstrap 5',
        'Material UI',
        'Cypress', 
        'Jest', 
        'Figma', 
        'Visual Studio', 
        'Node.js', 
        'Git', 
        'UX Design'
    ]

    const languagesEng:language[] = [
        {language: 'Polish', level: '100%'}, 
        {language: 'English', level: '98%'}, 
        {language: 'Italian', level: '55%'}
    ]

    const languagesPl:language[] = [
        {language: 'Polski', level: '100%'}, 
        {language: 'Angielski', level: '98%'}, 
        {language: 'Włoski', level: '55%'}
    ]

    const googleCourses = [
        'Foundation of User Experience Design', 
        'Start the UX Design Process: Emphatize, Define, Ideate',
        'Build wireframes and low-fidelity prototypes',
        'Conduct UX research and test early concepts',
        'Create high-fidelity designs and prototypes in Figma'
    ]

    const interestsEng = [
        'UX and UI', 
        'Boardgames'
    ]

    const interestsPl = [
        'UX i UI', 
        'Gry planszowe'
    ]

    return (

        <div className="h-96 w-full">

            {/* Skills */}
            {!polish && <h2 className="text-white text-lg">Skills</h2>}
            {polish && <h2 className="text-white text-lg">Umiejętności</h2>}

            <div className="bg-grey w-full h-[0.07rem] mb-6"></div>
          
                {skills.map((skill, number)=> (
                    <div key={number}>
                        <p className="text-white font-light mt-2">{skill.skill}</p>
                        <div className="flex w-full justify-between items-center h-6">
                            <div className="w-5/6 bg-light-yellow h-1">
                                <div className="bg-yellow-orange h-1" style={{width:`${skill.level}`}}></div>
                            </div>
                            <div className="text-white font-light">{skill.level}</div>
                        </div>
                    </div>
                ))}

            {/* Other skills */}
            {!polish && <h2 className="text-white text-lg mt-12">Other skills</h2>}
            {polish && <h2 className="text-white text-lg mt-12">Inne umiejętności</h2>}

            <div className="bg-grey w-full h-[0.07rem] mb-6"></div>

                <ul className='list-disc px-4'>
                {otherSkills.map((otherSkill, number) => (
                    <li  key={number} className="text-white font-light mb-2">{otherSkill}</li>
                ))}
                </ul>

            {/* Languages */}
            {!polish && <h2 className="text-white text-lg mt-12">Languages</h2>}
            {polish && <h2 className="text-white text-lg mt-12">Języki obce</h2>}

            <div className="bg-grey w-full h-[0.07rem] mb-6"></div>
          
                {!polish && languagesEng.map((language, number)=> (
                    <div key={number}>
                        <p className="text-white font-light mt-2">{language.language}</p>
                        <div className="flex w-full justify-between items-center h-6">
                            <div className="w-5/6 bg-light-yellow h-1">
                                <div className="bg-yellow-orange h-1" style={{width:`${language.level}`}}></div>
                            </div>
                            <div className="text-white font-light">{language.level}</div>
                        </div>
                    </div>
                ))}

                {polish && languagesPl.map((language, number)=> (
                    <div key={number}>
                        <p className="text-white font-light mt-2">{language.language}</p>
                        <div className="flex w-full justify-between items-center h-6">
                            <div className="w-5/6 bg-light-yellow h-1">
                                <div className="bg-yellow-orange h-1" style={{width:`${language.level}`}}></div>
                            </div>
                            <div className="text-white font-light">{language.level}</div>
                        </div>
                    </div>
                ))}

            {/* Courses */}

            {!polish && <h2 className="text-white text-lg mt-12">Courses</h2>}
            {polish && <h2 className="text-white text-lg mt-12">Kursy</h2>}

            <div className="bg-grey w-full h-[0.07rem] mb-6"></div>
            
            <p className="text-white text-md font-light">Google UX Design Professional Certificate</p>
            {!polish && <p className="text-white text-md font-light mb-4 text-grey">5 Coursera courses - around 5 weeks each</p>}
            {polish && <p className="text-white text-md font-light mb-4 text-grey">5 Coursera courses - kazdy trwajacy ok. 5 tygodni</p>}


                <ul className='list-disc px-4'>
                {googleCourses.map((course, number) => (
                    <li key={number} className="text-white font-light mb-2">{course}</li>
                ))}
                </ul>

            {/* Interests */}

            {!polish && <h2 className="text-white text-lg mt-12">Interests</h2>}
            {polish && <h2 className="text-white text-lg mt-12">Zainteresowania</h2>}

            <div className="bg-grey w-full h-[0.07rem] mb-6"></div>

                <ul className='list-disc px-4'>
                {!polish && interestsEng.map((interest, number) => (
                    <li  key={number} className="text-white font-light mb-2">{interest}</li>
                ))}

                {polish && interestsPl.map((interest, number) => (
                    <li  key={number} className="text-white font-light mb-2">{interest}</li>
                ))}
                </ul>

        </div>
      );
}
 
