import React ,{useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause, faBackward,faForward, faVolumeMute, faVolumeUp, faVolumeDown, faChevronRight, faChevronLeft, faAngleDown, faAngleUp, faDownload } from '@fortawesome/free-solid-svg-icons'

const Card=()=>{
    const [track,setTrack]=useState([{
                                        id:1,
                                        name:"Balkan's peace",
                                        src:"./audio/balkan's peace.wav",
                                        img_src:"./Images/body.jpg",
                                        duration:"01:55"   
                                    },
                                    {
                                        id:2,
                                        name:"Sad Owl",
                                        src:"./audio/sad owl.wav",
                                        img_src:"./Images/original.jpg",
                                        duration:"02:51"
                                    },
                                    {
                                        id:3,
                                        name:"Chillout",
                                        src:"./audio/Chillout.wav",
                                        img_src:"./Images/lama.jpg",
                                        duration:"01:31"
                                    },
                                    {
                                        id:4,
                                        name:"Kangaroo",
                                        src:"./audio/kangaroo.wav",
                                        img_src:"./Images/kengur.jpg",
                                        duration:"02:32"
                                    },
                                    {
                                        id:5,
                                        name:"Happy me",
                                        src:"./audio/happy me.wav",
                                        img_src:"./Images/slika4.jpg",
                                        duration:"02:49"
                                    },
                                    {
                                        id:6,
                                        name:"Palindrom",
                                        src:"./audio/palindrom.wav",
                                        img_src:"./Images/slika3.jfif",
                                        duration:"02:27"
                                    },
                                    {
                                        id:7,
                                        name:"Love",
                                        src:"./audio/love beat.wav",
                                        img_src:"./Images/slika2.webp",
                                        duration:"02:32"
                                    },
                                    {
                                        id:8,
                                        name:"Oldschool",
                                        src:"./audio/oldschool.wav",
                                        img_src:"./Images/kentaur.jfif",
                                        duration:"04:53"
                                    }
                                    ]);
    const [playing,setPlaying]=useState(false);
    const [mute,setMute]=useState(false);
    const [volume,setVolume]=useState(100);
    const range=useRef();
    const lista=useRef();
    const audio=useRef();
    const btnLista=useRef();
    const [id,setId]=useState(0);
 

    const playPause=()=>{
        const prev=playing;
        setPlaying(!prev);
        if(prev){
            audio.current.pause();     
        }
        else{
            audio.current.play();
        }        
    }
 
    useEffect(()=>{
        const interval = setInterval(()=>{
            range.current.value = Math.ceil((audio.current.currentTime*100)/audio.current.duration);
        },500);
         return () => {
            clearInterval(interval);
        }
    },[]);

    const durationChange=()=>{
        audio.current.currentTime=audio.current.duration * (range.current.value/100);
    }
    
    const forward=()=>{
        const prev=playing;
        if(prev){
            audio.current.currentTime+=10;
        }
    }
    const backward=()=>{
        const prev=playing;
        if(prev){
            audio.current.currentTime-=10;
        }
    }
    const volumeMute=()=>{
        const muted=mute;
        setMute(!muted);
        if(muted){
            audio.current.volume=0;
            setVolume(audio.current.volume*100);
        }
        else{
            audio.current.volume=1.0;
            setVolume(audio.current.volume*100);
        }
    }
    const volumeDown=()=>{
        if(audio.current.volume>0.0){
            audio.current.volume=(audio.current.volume-0.2).toFixed(2);
            setVolume(audio.current.volume*100);
        }
    }
    const volumeUp=()=>{    
        if(audio.current.volume<1.0){
            audio.current.volume=(audio.current.volume+0.2).toFixed(2);
            setVolume(audio.current.volume*100);
        }
    }
    const pastBeat=()=>{
        if(id>0){
            const newId=id-1;
            setId(newId);
            setPlaying(true);
        }
        else{
            setId(track.length-1);
        }
    }
    const nextBeat=()=>{
        if(id<track.length-1){
            const newId=id+1;
            setId(newId);
            setPlaying(true);
        }
        else{
            setId(0);
        }

    }
    function changeId(newId){
        setPlaying(true);
        setId(newId-1);
    }

    const prikaziListu=()=>{    
        lista.current.style.display="block";
        btnLista.current.style.display="none";
    }
    const sakriListu=()=>{
        btnLista.current.style.display="block";
        lista.current.style.display="none";
    }
    return(
        <div className="player">
            <div className="player-header">
                <div className="player-img-box">
                    <img src={track[id].img_src} className="player-img"/>
                </div>   
                <button className="player-cher player-cher-left" onClick={pastBeat}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button className="player-cher player-cher-right" onClick={nextBeat}><FontAwesomeIcon icon={faChevronRight}/></button>
                <button className="player-volume player-volumeMute" onClick={volumeMute} title="mute"><FontAwesomeIcon icon={faVolumeMute}/></button>   
                <button className="player-volume player-volumeUp" onClick={volumeUp} title="volume up"><FontAwesomeIcon icon={faVolumeUp}/></button> 
                <p className="player-volume player-volume-vol">{volume}</p>
                <button className="player-volume player-volumeDown" onClick={volumeDown} title="volume down"><FontAwesomeIcon icon={faVolumeDown}/></button>                         
            </div>
            <div className="player-body">
                <audio ref={audio} src={track[id].src} autoPlay="autoplay" onEnded={nextBeat} onPlaying={()=>{setPlaying(true)}}/>
                <button className="player-btn player-btn-back" onClick={backward} title="-10 sec"><FontAwesomeIcon icon={faBackward} /></button>
                <button className="player-btn player-btn-forw" onClick={forward} title="+10 sec"><FontAwesomeIcon icon={faForward} /></button>
                <button className={"player-btn player-btn-"+(playing?"pause":"play")} onClick={playPause}>{playing ? <FontAwesomeIcon icon={faPause} />:<FontAwesomeIcon icon={faPlay} />}</button>
                <a className="player-download-btn ho text-dark" href={track[id].src} title="Download beat" download={track[id].name}><FontAwesomeIcon icon={faDownload}/></a>
                <p className="player-song">{track[id].name}</p>
                <input onChange={durationChange} ref={range}  type="range"  min="0" max="100" className="player-range" step="1"></input>
                <ul ref={lista} className="player-listaBeatova">
                    {
                        track.map(track=>{
                            if(track.id==(id+1)){
                                if(playing){
                                    return(
                                        <li className="lista-song" key={track.id} onClick={()=>{changeId(track.id)}}><span className="lista-play text-success"><FontAwesomeIcon icon={faPause}/></span><p className="text-success">{track.name}<span className="lista-duration">{track.duration}</span></p></li>
                                    )
                                }    
                                else{
                                    return(
                                        <li className="lista-song" key={track.id} onClick={()=>{changeId(track.id)}}><span className="lista-play text-success"><FontAwesomeIcon icon={faPlay}/></span><p className="text-success">{track.name}<span className="lista-duration">{track.duration}</span></p></li>
                                    )
                                } 
                            }
                            else{
                                return(
                                <li className="lista-song" key={track.id} onClick={()=>{changeId(track.id)}}><span className="lista-play text-success"><FontAwesomeIcon icon={faPlay}/></span><p>{track.name}<span className="lista-duration">{track.duration}</span></p></li>
                                )
                            }
                        })
                    }
                    <button className="player-listaUp ho" onClick={sakriListu}><FontAwesomeIcon icon={faAngleUp}/></button>
                </ul>
                <button ref={btnLista}className="player-lista" onClick={prikaziListu}>Lista pesama <FontAwesomeIcon icon={faAngleDown}/></button>
            </div>
        </div>
    )
}

export default Card;