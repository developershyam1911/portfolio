import SingleBlog from '@/components/SingleBlog';

const page = ({params}) => {
  const {slug} = params;
  return (
    <>
      <SingleBlog slug= {slug}/>   
    </>
  )
}

export default page
