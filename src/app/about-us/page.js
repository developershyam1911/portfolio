import About from '@/components/About'
import Clients from '@/components/Clients'


export async function generateMetadata() {
  return {
    title: 'About Shyam Mishra - Software Engineer | DevShyamTech',
    description: 'Learn more about Shyam Mishra, a skilled software engineer specializing in web development, software solutions, and more. Discover his journey, skills, and passion for technology.',
    keywords:[
      'about event planet developers',
      'about of devshyamtech',
      'about us engineer shyam',
      'full stack developer shyam',
      'who is devshyamtech',
      'software solutions with engineer shyam',
      'devshyamtech',
      'shyam mishra portfolio',
    ],
    icons: {
      icon: '/assets/images/logo/favicon.png',
      shortcut: '/assets/images/logo/favicon.png',
      apple: '/assets/images/logo/favicon.png',
    },
    openGraph: {
      title: 'About Shyam Mishra - Software Engineer | DevShyamTech',
      description: 'Learn more about Shyam Mishra, a skilled software engineer specializing in web development, software solutions, and more. Discover his journey, skills, and passion for technology.',
      images: '/assets/images/logo/ogImage.jpg',
    },
}
}
const ContactUs = () => {
  return (
    <div>
      <About user="shyam-mishra"/>
      <Clients/>
    </div>
  )
}

export default ContactUs
