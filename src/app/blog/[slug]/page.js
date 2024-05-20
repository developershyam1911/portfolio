import SingleBlog from '@/components/SingleBlog';
import Link from 'next/link'
// import { useParams } from 'next/navigation';

const page = ({params}) => {
  const {slug} = params;
  // console.log(slug,'slug'); 
  return (
    <>
      <SingleBlog slug= {slug}/>   
    </>
  )
}

export default page
