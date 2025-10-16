import  * as React from 'react'
import HomeBanner from './HomeBanner'
import Service from './HomeServices'
import HomeAbout from './HomeAbout'
import StatsSection from './StateSection'
import Work from './Work'
import TabSection from './TabSection'
import HomeBlog from './HomeBlog'
import { Faq } from './Faq'
import { VisionCard } from './VisionCard'
import Category from './Category'



const Home = () => {
  return (
    <div>
        <HomeBanner/>
        <VisionCard/>
        <Category/>
        <HomeAbout/>
        {/* <StatsSection/> */}
        <Work/>
        <Service/>
        <TabSection/>
        {/* <HomeBlog/>  */}
        <Faq/> 
        
    </div>
  )
}

export default Home