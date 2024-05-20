import ProjectList from "@/components/ProjectList"


export async function generateMetadata() {
  return {
    title: 'Projects Portfolio - Shyam Mishra\'s Work | DevShyamTech',
    description: 'Explore Shyam Mishra\'s portfolio showcasing his diverse projects in web development, software solutions, and more. Discover innovative solutions and expertise in action.',
    keywords:[
      'Projects Portfolio',
      'Shyam Mishra projects',
      'Developer Shyam Mishra',
      'web development',
      'software solutions',
      'portfolio showcase',
      'innovative solutions',
      'DevShyamTech',
      'expertise',
    ],
    icons: {
      icon: '/assets/images/logo/favicon.png',
      shortcut: '/assets/images/logo/favicon.png',
      apple: '/assets/images/logo/favicon.png',
    },
    openGraph: {
      title: 'Projects Portfolio - Shyam Mishra\'s Work | DevShyamTech',
      description: 'Explore Shyam Mishra\'s portfolio showcasing his diverse projects in web development, software solutions, and more. Discover innovative solutions and expertise in action.',
      images: '/assets/images/logo/ogImage.jpg',
    },
}
}

const page = () => {
  return (
    <>
      <ProjectList/>
    </>
  )
}

export default page
