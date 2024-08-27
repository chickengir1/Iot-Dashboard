export const getFormattedDate = () => {
  const date = new Date();
  const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return koreanDate.toISOString().split("T")[0];
};

export const getFormattedDateWithoutHyphen = () => {
  return getFormattedDate().replace(/-/g, "");
};

export const getYesterdayDate = () => {
  const date = new Date();
  const koreanDate = new Date(
    date.getTime() + 9 * 60 * 60 * 1000 - 24 * 60 * 60 * 1000
  );
  return koreanDate.toISOString().split("T")[0];
};

export const getYesterDateWithoutHypen = () => {
  return getYesterdayDate().replace(/-/g, "");
};
