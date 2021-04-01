import React from 'react'
import InfoSec from '../Components/InfoSection/InfoSec'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './data'
import Pricing from '../Components/PricingSection/Pricing'
const home = () => {
    return (
        <>
            <InfoSec {...homeObjOne}/>
            <InfoSec {...homeObjTwo}/>
            <InfoSec {...homeObjThree}/>
            <Pricing/>
            <InfoSec {...homeObjFour}/>
        </>
    )
}

export default home
