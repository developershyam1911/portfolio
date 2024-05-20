
import Contact from "@/components/Contact"


export async function generateMetadata() {
  return {
    title: 'Contact Shyam Mishra - Get in Touch | DevShyamTech',
    description: 'Welcome to the portfolio of Shyam Mishra, a skilled software engineer specializing in web development, software solutions, and more.',
    keywords:[
      'Contact Shyam Mishra',
      'get in touch',
      'Contact Engineer Shyam',
      'software engineer Shyam',
      'web development',
      'software solutions',
      'contact DevShyamTech',
      'inquiries',
    ],
    icons: {
      icon: '/assets/images/logo/favicon.png',
      shortcut: '/assets/images/logo/favicon.png',
      apple: '/assets/images/logo/favicon.png',
    },
    openGraph: {
      title: 'Contact Shyam Mishra - Get in Touch | DevShyamTech',
      description: 'Contact Shyam Mishra for inquiries, collaborations, or to discuss your software engineering needs. Get in touch with a skilled professional passionate about web development and software solutions.',
      images: '/assets/images/logo/ogImage.jpg',
    },
}
}

const page = () => {
  return (
    <>
     <Contact/> 
    </>
  )
}

export default page
