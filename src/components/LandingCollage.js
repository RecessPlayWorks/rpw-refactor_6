import React from './node_modules/react';

import collageStyles from './collage.module.scss';



const LandingCollageBG = () => (
    <div className={collageStyles.grid}></div>
)

export default LandingCollageBG;

/*
previous


// import boy from '../../images/boy.jpg';
// import women from '../../images/women.jpg';
// import painting from '../../images/painting.jpg';
// import meeting from '../../images/meeting.jpg';
// import girlandrobot from '../../images/girlandrobot.jpg';
// import twokids from '../../images/twokids.jpg';


// const StyledCollage = styled.div`
//     background: rgba(0,0,0,0.5);
//     background: #000;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     width: 100vw;
//     background: pink;
//     width: 100vw;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
// `

*********************************
   <div className="cell">
        <img src={women} alt="women" />
    </div>
    
    <div className="cell">
        <img src={girlandrobot} alt="girlandrobot" />
    </div>
    <div className="cell">
        <img src={painting} alt="painting" />
    </div>
    <div className="cell">
        <img src={twokids} alt="twokids" />
    </div>
    <div className="cell">
        <img src={boy} alt="boy" />
    </div>
    <div className="cell">
        <img src={meeting} alt="meeting" />
    </div> 


    */