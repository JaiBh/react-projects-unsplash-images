import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import customFetch from "./utils";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchInput } = useGlobalContext();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["images", searchInput],
    queryFn: async () => {
      console.log(searchInput);
      const result = await customFetch.get(`${searchInput}`);
      return result.data;
    },
  });

  if (isError) {
    return (
      <section className="image-container">
        <h4>{error}</h4>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        const { slug: title, id } = item;
        const url = item.urls?.regular;
        return <img key={id} src={url} alt={title} className="img"></img>;
      })}
    </section>
  );
};
export default Gallery;
