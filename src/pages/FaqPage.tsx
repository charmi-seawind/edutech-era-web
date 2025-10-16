import FaqBanner from "../module/FaqBanner"
import {Faq} from "../module/home/Faq"
import * as React from 'react'

const FaqPage = () => {
  return (
    <div>
        <FaqBanner/>
      <Faq/>
    </div>
  )
}

export default FaqPage