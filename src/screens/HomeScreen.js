import { View, ScrollView, TouchableOpacity } from "react-native";
import Search from "../components/Search";
import Card from "../components/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useStateContext } from "../../context/StateContext";
import Loader from "../components/Loader";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const { loading, setLoading, searchQuery } = useStateContext();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <View className="mt-14 px-3">
        <Search />
        {loading ? (
          <Loader />
        ) : (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Banner />
              {data
                .filter((val) => {
                  const { title, description } = val;
                  return searchQuery === ""
                    ? val
                    : description.toLowerCase().includes(searchQuery);
                })
                .map((item) => {
                  const { id, title, price, description, category, image } =
                    item;
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Details", {
                          id: id,
                          title: title,
                          price: price,
                          description: description,
                          category: category,
                          image: image,
                        });
                      }}
                      key={id}
                    >
                      <Card
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                        category={category}
                      />
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </>
        )}
      </View>
    </>
  );
};

export default HomeScreen;
