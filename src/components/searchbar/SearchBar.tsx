import { TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BsSearchHeart } from "react-icons/bs";
import { SearchBarProps } from "../../types/search";

function SearchBar({ searchTerm, onSearchChange, placeholder = "Search products..." }: SearchBarProps) {
  const isLargeScreen = useMediaQuery("( min-width: 1200px )");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      size="md"
      leftSection={<BsSearchHeart size={25} />}
      value={searchTerm}
      onChange={handleSearchChange}
      style={{
        width: isLargeScreen ? "45%" : "85%",
        margin: isLargeScreen ? "0.5rem auto" : "2rem auto",
      }}
    />
  );
}

export default SearchBar;
