import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {Link} from 'react-router-dom';

export const SkillsMobile = () => {
    return ( 
        <div className="w-full min-h-[12rem] text-white flex flex-col mt-8 px-4">

          <div className='text-black text-[0.8rem] flex justify-center gap-4 mb-6 mt-4'>
               <button type='button' className="bg-yellow-orange w-9 h-9 rounded-full hover:bg-white"><a href='https://github.com/BeataGonera'><GitHubIcon/></a></button>
               <button type='button' className="bg-yellow-orange w-9 h-9 rounded-full hover:bg-white"><a href='https://www.linkedin.com/in/beataiwonagonera/'><LinkedInIcon/></a></button>
               <button 
                type='button' 
                className="bg-yellow-orange min-w-32 h-9 rounded hover:bg-white px-2"
            >
                <Link to='/CVEnglish.pdf' target='_blank' download>
                <FileDownloadOutlinedIcon className='mr-2'/>
                Download CV
                </Link>  
            </button>
          </div>
            <div>My skills</div>
            <div className="bg-grey w-full h-[0.07rem] mb-4"></div>
            <div className="skills flex justify-between font-light">
               <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Typescript</li>
               </ul>

               <ul>
                    <li>Git</li>
                    <li>Jest</li>
                    <li>Cypress</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
               </ul>

               <ul>
                    <li>Material UI</li>
                    <li>Tailwind</li>
                    <li>REST API</li>
                    <li>UX Design</li>
                    <li>Figma</li>
               </ul>
            </div>


        </div>
     );
}
 
