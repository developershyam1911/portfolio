import SingleBlog from "@/components/SingleBlog";
import { ENDPOINT } from "@/config/constant";
import axios from "axios";
export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const response = await axios.get(`${ENDPOINT}/api/blogs/${slug}`);
    if (response.status !== 200) {
      throw new Error("Network response was not ok.");
    }
    const item = response.data.res;
    console.log("current item", item);
    return {
      title: item[0]?.title,
      description: item[0]?.desc,
      keywords: [item[0]?.keyword],
      icons: {
        icon: "/images/favicon.png",
        shortcut: "/images/favicon.png",
        apple: "/images/favicon.png",
      },
      openGraph: {
        title: item[0]?.title,
        description: item[0]?.desc,
        images: item[0]?.image,
      },
    };
  } catch (error) {
    console.error("Error fetching Data:", error);
    return [];
  }
}
const page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <SingleBlog slug={slug} />
    </>
  );
};

export default page;
