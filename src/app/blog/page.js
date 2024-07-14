import dynamic from "next/dynamic";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DynamicBlogList = dynamic(() => import("@/components/BlogList.js"), {
  loading: () => (
    <div className="col-md-3">
      <SkeletonTheme highlightColor="#A5FFF2" baseColor="#EEFFFD">
        <div className="m-2">
          <Skeleton height={150} width={300} />
          {/* <Skeleton count={2} height={30} /> */}
        </div>
      </SkeletonTheme>
    </div>
  ),
});
export async function generateMetadata() {
  return {
    title: "Tech Insights & Updates - Shyam Mishra's Blog | DevShyamTech",
    description:
      "Explore the latest tech insights, updates, and industry trends with Shyam Mishra, a seasoned software engineer passionate about web development, software solutions, and more.",
    keywords: [
      "Tech Insights",
      "updates",
      "Shyam Mishra's Blog",
      "software engineer",
      "web development",
      "software solutions",
      "technology trends",
      "DevShyamTeck",
    ],
    icons: {
      icon: "/assets/images/logo/favicon.png",
      shortcut: "/assets/images/logo/favicon.png",
      apple: "/assets/images/logo/favicon.png",
    },
    openGraph: {
      title: "Tech Insights & Updates - Shyam Mishra's Blog | DevShyamTech",
      description:
        "Explore the latest tech insights, updates, and industry trends with Shyam Mishra, a seasoned software engineer passionate about web development, software solutions, and more.",
      images: "/assets/images/logo/ogImage.jpg",
    },
  };
}

const page = () => {
  return (
    <>
      <DynamicBlogList />
      {/* <Comapny/> */}
    </>
  );
};

export default page;
