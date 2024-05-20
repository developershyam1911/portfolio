'use client'
import SingleBlog from '@/components/SingleBlog';
import Link from 'next/link'
import { useParams } from 'next/navigation';

const page = () => {
 const {slug} = useParams()
  console.log(slug); 
  return (
    <>
      <SingleBlog slug= {slug}/>   
    </>
  )
}

export default page
