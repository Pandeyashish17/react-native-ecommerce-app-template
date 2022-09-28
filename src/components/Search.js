import { View, Text } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useStateContext } from "../../context/StateContext";

const Search = () => {
  const { setSearchQuery, searchQuery } = useStateContext();
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      className="rounded-xl mb-6"
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
