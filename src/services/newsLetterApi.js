import axios from "axios";

export const getNewsletterData = async (
  startDate,
  endDate,
  page = 1,
  rowsPerPage = 10
) => {
  try {
    const serviceKey =
      import.meta.env.VITE_NEWS_API_KEY ??
      "K1En4lCOFe4MNyzruwS6qdiUcRJDAeC3K2DwskjKAMIYG1www1SJgZbI1xC2k7cDTMMnRKRgWCWE5i8lcLaJ/w==";

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
    console.error(error);
  }
};
