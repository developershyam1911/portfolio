import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});
const Comapny = dynamic(() => import("@/components/Comapny"), {
  ssr: false,
});
const Service = dynamic(() => import("@/components/Service"), {
  ssr: false,
});

export async function generateMetadata() {
  return {
    title: "Professional Services - Shyam Mishra's Offerings | DevShyamTech",
    description:
      "Explore Shyam Mishra's professional services including digital marketing, app development, web development, social media management, and SEO management. Get expert solutions for your digital needs.",
    keywords: [
      "Professional Services",
      "digital marketing",
      "app development",
      "web development",
      "social media management",
      "SEO management",
      "expert solutions",
      "DevShyamTech",
    ],
    icons: {
      icon: "/assets/images/logo/favicon.png",
      shortcut: "/assets/images/logo/favicon.png",
      apple: "/assets/images/logo/favicon.png",
    },
    openGraph: {
      title: "Professional Services - Shyam Mishra's Offerings | DevShyamTech",
      description:
        "Explore Shyam Mishra's professional services including digital marketing, app development, web development, social media management, and SEO management. Get expert solutions for your digital needs.",
      images: "/assets/images/logo/ogImage.jpg",
    },
  };
}

const page = () => {
  return (
    <>
      <Service />
      <Clients />
      <Comapny />
    </>
  );
};

export default page;
