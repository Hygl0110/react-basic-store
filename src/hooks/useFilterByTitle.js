import { useEffect, useState } from "react";

const useFilterByTitle = (initialData) => {
  const [filteredData, setFilteredData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = initialData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [initialData, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return [filteredData, searchTerm, handleSearch];
};

export default useFilterByTitle;
