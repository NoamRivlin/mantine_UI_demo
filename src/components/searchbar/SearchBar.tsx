import { TextInput } from "@mantine/core";
import { BsSearchHeart } from "react-icons/bs";
import { SearchBarProps } from "../../types/search";
import { useIsLargeScreen } from "../../utils/breakpointsUtil";

function SearchBar({ searchTerm, onSearchChange, placeholder = "Search products..." }: SearchBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };
  const isLargeScreen = useIsLargeScreen();

  return (
    <TextInput
      placeholder={placeholder}
      size="md"
      leftSection={<BsSearchHeart size={25} />}
      value={searchTerm}
      onChange={handleSearchChange}
      style={{
        width: isLargeScreen ? "45%" : "85%",
      }}
    />
  );
}

export default SearchBar;
