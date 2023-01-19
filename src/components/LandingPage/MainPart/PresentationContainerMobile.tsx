import { useNavigate } from "react-router"

export const PresentationContainerMobile = () => {

    const navigate = useNavigate()

    const navigateToContactPage = () => {
        navigate('/contact-mobile')
    }

    return ( 
        <div className="bg-silver h-[14rem] p-8 w-screen flex flex-col justify-evenly rounded-b-[30px] text-white text-lg">
            <h1>I'm Beata Gonera</h1>
            <h2><span className="text-yellow-orange">Front-end </span>Developer</h2>
            <p>with strong <br></br>interest in UX</p>
            <button className="bg-yellow-orange text-black h-9 w-28 rounded-sm text-[0.8rem] hover:bg-white mt-4" onClick={navigateToContactPage}>Contact me</button>
            <img src='/my-photo.png' className="absolute top-10 right-5 rounded-[50px]" width='135' height='232'/>
        </div>
     );
}
 
