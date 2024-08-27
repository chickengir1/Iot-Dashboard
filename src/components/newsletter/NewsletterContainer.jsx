import NewsletterUi from "./NewsletterUi";
import { getNewsletterData } from "@services/newsLetterApi";
import { useEffect, useState } from "react";
import { getFormattedDateWithoutHyphen } from "@utils/dateUtils";

const NewsletterContainer = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await getNewsletterData(
          getFormattedDateWithoutHyphen() - 1,
          getFormattedDateWithoutHyphen()
        );
        setNewsData(response.response.body.items.item);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLocation();
  }, []);

  return <NewsletterUi newsData={newsData} />;
};

export default NewsletterContainer;
