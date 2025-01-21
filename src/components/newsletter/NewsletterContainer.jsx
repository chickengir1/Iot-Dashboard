import NewsletterUi from "./NewsletterUi";
import { getNewsletterData } from "@services/newsLetterApi";
import { useEffect, useState } from "react";
import {
  getFormattedDateWithoutHyphen,
  getYesterDateWithoutHypen,
} from "@utils/dateUtils";

const NewsletterContainer = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await getNewsletterData(
          getYesterDateWithoutHypen(),
          getFormattedDateWithoutHyphen()
        );
        setNews(response.response.body.items.item);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLocation();
  }, []);

  return <NewsletterUi news={news} />;
};

export default NewsletterContainer;
