import { useContext } from "react";
import { LanguageContext } from "../../LanguageProvider"; 
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useNavigate } from "react-router";

export const PresentationContainer = () => {

    const navigate = useNavigate()

    const navigateToContactPage = () => {
        navigate('/contact')
    }

    const {polish} = useContext(LanguageContext)


    return ( 
        <div className="bg-silver h-[30rem] p-2 lg:p-10 flex justify-around">

    {!polish && 

            <div className="my-description ml-4 h-full lg:w-3/6 flex flex-col justify-center">
                <h1 className="sm:text-3xl 2xl:text-5xl text-white mb-2">I'm Beata Gonera.</h1>
                <h1 className="sm:text-3xl 2xl:text-5xl text-white mb-8 2xl:text-right"><span className="text-yellow-orange">Front-end </span>Developer</h1>
                <div className="w-4/5">
                <p className="text-sm text-white leading-6">After getting some experience in UX Design, 
                    I have decided that coding is something I would like to do. 
                    After graudating from Frontend Bootcamp, I have started designing 
                    my first apps, prototyping and creating them. </p>
                <p className="text-sm text-white mb-8 leading-6">I have built this responsive portfolio with Tailwind after I had <span className="text-yellow-orange underline"><a href='https://www.figma.com/file/E4NgJZBsA2kNd6vwA4nHRX/Portfolio?node-id=0%3A1&t=CSnqWtrrbiyW0OEi-1'>prototyped</a></span> it in Figma</p>
                </div>
                <button className="bg-yellow-orange h-9 w-28 rounded-sm text-sm hover:bg-white" onClick={navigateToContactPage}>Contact me</button>
            </div>
    }

    {polish && 

         <div className="my-description ml-4 h-full lg:w-3/6 flex flex-col justify-center">
                <h1 className="sm:text-3xl 2xl:text-5xl text-white mb-2">Beata Gonera</h1>
                <h1 className="sm:text-3xl 2xl:text-5xl text-white mb-8 2xl:text-right"><span className="text-yellow-orange">Front-end </span>Developer</h1>
                <div className="w-4/5">
                <p className="text-sm text-white lg:mb-8 leading-6">Moja przygoda ze światem IT zaczęła się od UX Designu. Kiedy poznałam podstawy UX i zaczęłam tworzyć prototypy aplikacji, doszłam do wniosku, że chcę nauczyć się zamieniać je w działające aplikacje.</p>
                <p className="text-sm text-white mb-8 leading-6">Do stworzenia mojego responsywnego portfolio skorzystałam z biblioteki Tailwind i z Figmy, by zaprojektować <span className="text-yellow-orange underline"><a href='https://www.figma.com/file/E4NgJZBsA2kNd6vwA4nHRX/Portfolio?node-id=0%3A1&t=CSnqWtrrbiyW0OEi-1'>prototyp.</a></span></p>

                </div>
                <button className="bg-yellow-orange h-9 w-28 rounded-sm text-sm hover:bg-white" onClick={navigateToContactPage}>Kontakt</button>
            </div>

    }

            <div className="photo hidden lg:block xl:w-[19rem] xl:h-[32rem] bg-cover mt-8" style={{backgroundImage: "url(My-photo.webp)"}}></div>
        </div>
     );
}
 
