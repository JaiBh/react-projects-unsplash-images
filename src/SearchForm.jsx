import { useGlobalContext } from "./context";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const SearchForm = () => {
  const { setSearchInput } = useGlobalContext();
  const formSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      toast.error("please provide a value");
    }
    setSearchInput(searchValue);
    toast.success("Images updated");
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={formSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
