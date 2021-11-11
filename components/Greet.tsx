import useSWR from "swr";
import queryFetcher from "../utils/fetcher";

const Greet = () => {
  const { data, error } = useSWR("{ greet { message } }", queryFetcher);

  if (error) {
    return <h1>OOPS!</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const {
    greet: { message },
  } = data;

  return <h1>{message}</h1>;
};

export default Greet;
