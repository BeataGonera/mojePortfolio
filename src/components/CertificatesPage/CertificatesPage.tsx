import { NavBar } from "../LandingPage/NavBar";
import { NavBarMobile } from "../LandingPage/NavBarMobile";
import { CertificatesCarousel } from "./CertificatesCarousel";
import { useContext } from "react";
import { LanguageContext} from "../LanguageProvider";
// import { useTranslation } from "react-i18next";


export const CertificatesPage = () => {

    const {polish} = useContext(LanguageContext)

    // const { t, i18n } = useTranslation();
      

    return ( 
        <div className="flex bg-black w-screen h-screen">
            <div className="w-screen md:w-[92%] flex flex-col md:justify-center mt-36 md:mt-0 items-center gap-12 p-4 md:p-12">
                {!polish && <h1 className="text-[1.5rem] md:text-[2.5rem] text-yellow-orange">My certificates:</h1>}
                {polish && <h1 className="text-[1.5rem] md:text-[2.5rem] text-yellow-orange">Moje certyfikaty:</h1>}
                
                <CertificatesCarousel/>
            </div>
            <div className="hidden md:flex fixed right-0"><NavBar/></div>
            <div className="fixed bottom-0"><NavBarMobile/></div>
        </div>
        
     );
}



 
