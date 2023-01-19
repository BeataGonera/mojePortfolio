import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageProvider";

export const NavBarMobile = () => {

    const {polish, setPolish} = useContext(LanguageContext)


    return ( 
        <div className="md:hidden w-screen h-[4rem] bg-silver flex text-white justify-evenly items-center text-[12px]">
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
                    to="/contact-mobile" end
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
        </div>
     );
}
 
