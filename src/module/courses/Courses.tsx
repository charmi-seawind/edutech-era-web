import * as React from 'react'
import CourseCard from './CourseCard'
import CourseDetails from './CoursesDetails'

const Courses = () => {
  return (
    <div className='py-20'>
        <CourseCard/>
        <CourseDetails/>
    </div>
  )
}

export default Courses