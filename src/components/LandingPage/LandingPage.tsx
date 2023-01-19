import { MainPart } from "./MainPart/MainPart";
import { NavBar } from "./NavBar";
import { PresentationContainer } from "./MainPart/PresentationContainer";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer";
import { PresentationContainerMobile } from "./MainPart/PresentationContainerMobile";
import { NavBarMobile } from "../../components/LandingPage/NavBarMobile";
import { SkillsMobile } from "../SkillsContainer/SkillsMobile";
import { MyProjectsContainer } from "./MainPart/MyProjectsContainer";

export const LandingPage = () => {
    return ( 
    <div>

        <div className='hidden md:flex bg-black w-screen h-full gap-4' >
            <SkillsContainer/>
            <MainPart/>
            <NavBar/>
        </div>


        <div className='md:hidden bg-black flex flex-col w-screen gap-4' >
            <PresentationContainerMobile/>
            <SkillsMobile/>
            <MyProjectsContainer/>
            <div className="fixed bottom-0"><NavBarMobile/></div>
        </div>

    </div>
       

          
     );
}
 
