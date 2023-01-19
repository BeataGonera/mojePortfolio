import { MyProjectsContainer } from "./MyProjectsContainer";
import { PresentationContainer } from "./PresentationContainer";

export const MainPart = () => {
    return ( 
        <div className="h-full w-full mr-28 flex-col">
            <div><PresentationContainer/></div>
            <div><MyProjectsContainer/></div>
        </div>
     );
}
 
