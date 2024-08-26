import axios from "axios";

export const getNewsletterData = async (
  startDate,
  endDate,
  page = 1,
  rowsPerPage = 10
) => {
  try {
    const serviceKey = import.meta.env.VITE_NEWS_API_KEY;

    const response = await axios.get("/open-api/B500001/drghtNewInfo/list", {
      params: {
        serviceKey: serviceKey,
        pageNo: page,
        numOfRows: rowsPerPage,
        stDt: startDate,
        edDt: endDate,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch newsletter data:", error);
    throw error;
  }
};
