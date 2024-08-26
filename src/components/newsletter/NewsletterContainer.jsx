import NewsletterUi from "./NewsletterUi";
import { getNewsletterData } from "@services/newsLetterApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

const NewsletterContainer = () => {
  const [newsData, setNewsData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocation = async () => {
      dispatch(startLoading());
      try {
        const response = await getNewsletterData(20240826, 20240826);
        console.log(response.response.body.items.item);
        setNewsData(response.response.body.items.item);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(stopLoading());
      }
    };
    fetchLocation();
  }, [dispatch]);

  return <NewsletterUi newsData={newsData} />;
};

export default NewsletterContainer;
