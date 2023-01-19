import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export const NavBar = () => {
    
    const {polish, setPolish} = useContext(LanguageContext)

    return ( 
        <div className="h-screen w-[6rem] fixed right-0 bg-silver flex flex-col items-center text-white text-sm p-2">

        {!polish &&   
            <button type='button' className="flex flex-col items-center mt-10 w-full p-4" onClick={() => setPolish(true)}>
                <img className='object-fill mb-1' src='PolishFlag.png' width='30px' height='50px'/>
                <p className="hover:text-yellow-orange text-sm">PL</p>
            </button>
        }

        {polish && 
            <button type='button' className="flex flex-col items-center mt-10 w-full p-4" onClick={() => setPolish(false)}>
                <img className='object-fill mb-1' src='ENG.png' width='30px' height='50px'/>
                <p className="hover:text-yellow-orange text-sm">ENG</p>
            </button>    
        }    

            <nav className="h-[15rem] flex flex-col justify-evenly mt-28">
                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/" end
                    >
                        <div className="flex flex-col items-center justify-between h-12">
                        <HomeOutlinedIcon className="mb-2"/>
                            <p>Home</p>
                        </div>
                </NavLink>

                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/certificates" end
                    >
                        <div className="flex flex-col items-center">
                        <SchoolOutlinedIcon className="mb-2"/>

                        {!polish && 
                            <p>Certificates</p>
                        }

                        {polish && 
                            <p>Certyfikaty</p>
                        }

                        
                        </div>
                </NavLink>

                <NavLink 
                    className= {({ isActive }) => (isActive ? "active" : 'non-active')} 
                    to="/contact" end
                    >
                        <div className="flex flex-col items-center">
                        <PhoneEnabledOutlinedIcon className="mb-2"/>

                        {!polish && 
                            <p>Contact</p>
                        }

                        {polish && 
                            <p>Kontakt</p>
                        }

                        </div>
                </NavLink>
            </nav>

        </div>
     );
}
 
