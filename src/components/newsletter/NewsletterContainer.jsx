import NewsletterUi from "./NewsletterUi";
import { getNewsletterData } from "@services/newsLetterApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { getFormattedDateWithoutHyphen } from "@utils/dateUtils";

const NewsletterContainer = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await getNewsletterData(
          getFormattedDateWithoutHyphen(),
          getFormattedDateWithoutHyphen()
        );
        console.log(response.response.body.items.item);
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
