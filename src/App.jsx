import React from 'react'
import './app.css'


import AHeader from './components/AHeader';
import BCommunityIntro from './components/BCommunityIntro';
import BNewsletter from './components/BNewsletter';
import CLearningAndJammingBluegrass from './components/CLearningAndJammingBluegrass';
import DJoinOurEvents from './components/DJoinOurEvents';
import FContactUS from './components/FContactUS';



export default function App() {
  return (
    <div>
        <AHeader />
        <BCommunityIntro />
        <BNewsletter />
        <CLearningAndJammingBluegrass />
        <DJoinOurEvents />
        <FContactUS />
    </div>
  );
}
