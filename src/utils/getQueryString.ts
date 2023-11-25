interface GetQueryString {
  pathString: string;
  findQuery: string;
}

const getQueryString = ({ pathString, findQuery }: GetQueryString) => {
  const queryParams = new URLSearchParams(pathString);
  const queryString = queryParams.get(findQuery);
  console.log(queryString);
  if (!queryString) {
    throw new Error(`해당하는 쿼리가 존재하지 않습니다.`);
  }

  return queryString;
};

export default getQueryString;
