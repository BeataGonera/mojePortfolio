import { NavBarMobile } from "../LandingPage/NavBarMobile";

export const ContactPageMobile = () => {
    return ( 
        <div className="bg-black h-screen w-full">
            <div className="bg-silver h-4/6 w-full flex flex-col gap-8 justify-center pl-8 rounded-b-[30px]">
                <h1 className="text-orange-yellow text-xl text-yellow-orange">Contact me:</h1>
                <p className='text-yellow-orange text-sm text-white'><span className="text-yellow-orange">Phone:</span><br></br>+48 665 725 451</p>
                <p className='text-yellow-orange text-sm text-white'><span className="text-yellow-orange">Email address:</span><br></br>beataiwonagonera@gmail.com</p>
                <p className='text-yellow-orange text-sm text-white'><span className="text-yellow-orange">LinkedIn:</span><br></br>https://www.linkedin.com/in/beataiwonagonera/</p>
            </div>
            <div className="fixed bottom-0"><NavBarMobile/></div>
        </div>
     );
}
 
