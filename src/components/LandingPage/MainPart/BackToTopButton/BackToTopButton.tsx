import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

export const BackToTopButton = () => {
    
    const [visible, setVisible] = useState(false)


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop

        if(scrolled > 400){
            setVisible(true)
        }
        else if (scrolled <= 400){
            setVisible(false)
          }
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    window.addEventListener('scroll', toggleVisible)

    return ( 
        <button 
            className="rounded-full bg-yellow-orange w-12 h-12 fixed bottom-24 right-12 md:bottom-16 md:right-32" 
            onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}}
        >
            <KeyboardArrowUpIcon/>
        </button>
     );
}
 
