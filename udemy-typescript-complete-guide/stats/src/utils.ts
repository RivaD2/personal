export const dateStringToDate = (dateString: string): Date => {
  // Ex: 28/10/2018 ---> ['28','10', '2018]
  const dateParts = dateString
  .split('/')
  .map((value: string): number => {
    return parseInt(value);
  });

  // year/month/day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};