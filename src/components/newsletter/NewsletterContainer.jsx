import NewsletterUi from "./NewsletterUi";
import { getNewsletterData } from "@services/newsLetterApi";
import { useEffect, useState } from "react";

const NewsletterContainer = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await getNewsletterData(20240801, 20240831);
        console.log(response.response.body.items.item);
        setNewsData(response.response.body.items.item);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLocation();
  }, []);

  return (
    <>
      <NewsletterUi newsData={newsData} />
    </>
  );
};

export default NewsletterContainer;
