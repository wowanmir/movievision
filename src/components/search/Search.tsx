import { useEffect, useState } from "react";
import { SearchIcon } from "../icons";
import "./Search.css";
import axios from "axios";
import { BASE_API_URL } from "../../data";
export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();

  const fetchSearch = async () => {
   const {data} = await axios.get(`${BASE_API_URL}/search-by-keyword?keyword=${searchText}`);
  setContent(data.results)
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <div className="search-panel" >
      <button className="search-button">
        <SearchIcon size={20} />
      </button>
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
  );
};
