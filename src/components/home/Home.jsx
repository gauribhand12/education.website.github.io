import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testiomonal/test'
import Hblog from './hero/Hblog'
import Hprice from './hero/Hprice'
function Home() {
  return (
    <>
<Hero />
    <AboutCard />
    <HAbout />
    < Test/>
    <Hblog />
    <Hprice/>
    </>
  )
}

export default Home