import dynamic from "next/dynamic";
const Intro = dynamic(() => import('@/components/Intro'), { ssr: false })
const Service = dynamic(() => import('@/components/Service'), { ssr: false })
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Testimonial = dynamic(() => import('@/components/Testimonial'), { ssr: false })
const Comapny = dynamic(() => import('@/components/Comapny'), { ssr: false })
const Blog = dynamic(() => import('@/components/Blog'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })


export default function Home() {
  return (
    <>
    <Intro/>
    <Service/>
    <Skills/>
    <Clients/>
    <Projects/>
    <Testimonial/>
    <Comapny/>
    <Blog/>
    </>
  );
}
