import { NavBar } from "../LandingPage/NavBar";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export const ContactPage = () => {

    const {polish} = useContext(LanguageContext)

    return ( 
        <>
        {!polish && 
        
        <div className='bg-black flex h-screen'>
            <div className="bg-silver w-2/6 flex flex-col items-end pr-8 py-48">
                <h1 className="text-yellow-orange text-5xl mb-24">Contact me:</h1>
                <p className="text-white text-3xl mb-12">Phone:</p>
                <p className="text-white text-3xl mb-12">Email address:</p>
                <p className="text-white text-3xl mb-12">LinkedIn:</p>
            </div>
            <div className="text-white text-3xl flex flex-col items-start pl-8 py-48 mt-36">
                <p className="mb-12">+48 665 725 451</p>
                <p className="mb-12">beataiwonagonera@gmail.com</p>
                <p className="mb-12 underline"><a href='https://www.linkedin.com/in/beataiwonagonera/'>https://www.linkedin.com/in/beataiwonagonera/</a></p>

            </div>
            <div className="fixed right-0"><NavBar/></div>
        </div>
        }

        {polish && 
        
        <div className='bg-black flex h-screen'>
            <div className="bg-silver w-2/6 flex flex-col items-end pr-8 py-48">
                <h1 className="text-yellow-orange text-5xl mb-24">Dane kontaktowe:</h1>
                <p className="text-white text-3xl mb-12">Telefon:</p>
                <p className="text-white text-3xl mb-12">Email:</p>
                <p className="text-white text-3xl mb-12">LinkedIn:</p>
            </div>
            <div className="text-white text-3xl flex flex-col items-start pl-8 py-48 mt-36">
                <p className="mb-12">+48 665 725 451</p>
                <p className="mb-12">beataiwonagonera@gmail.com</p>
                <p className="mb-12 underline"><a href='https://www.linkedin.com/in/beataiwonagonera/'>https://www.linkedin.com/in/beataiwonagonera/</a></p>

            </div>
            <div className="fixed right-0"><NavBar/></div>
        </div>
        }


        </>
     );
}
 