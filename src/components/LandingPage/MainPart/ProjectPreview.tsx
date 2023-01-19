import { useRef, FC } from 'react';

interface ProjectPreview{
    videoSrc?: string;
}


export const ProjectPreview:FC<ProjectPreview> = ({videoSrc}) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    const setPlayBack = (event:any) => {
        if(videoRef.current){
            videoRef.current.playbackRate = 2.5;
        }
    }

    return ( 

        <video ref={videoRef} width="550" height="700" controls onCanPlay={setPlayBack}>
            <source src={videoSrc} type="video/mp4" />
        </video>
     );
}
 
