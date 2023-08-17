export { getReadableDate, transformDateForService };

const getReadableDate = (pgDate) => {
  const date = new Date(pgDate);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const transformDateForService = (dt) => {
  const dateSlashArr = dt.split("/");
  const dateHyphenArr = dt.split("-");
  const dateArr = dateSlashArr.length === 3 ? dateSlashArr : dateHyphenArr;
  const month = dateArr[0].padStart(2, "0");
  const day = dateArr[1].padStart(2, "0");
  const year = dateArr[2];
  return `${year}-${month}-${day}`;
};