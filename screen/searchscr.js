import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, Dimensions, Animated } from 'react-native';
import CoinCardSearch from '../component/coincardsearch';

const SearchScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const searchData = async (text) => {
        setSearch(text);
        const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${text}`);
        const json = await response.json();
        setData(json.coins)
    }

    const handleCoin = (id, navigation) => {
        navigation.navigate('CoinDes', {
            data: id,
        });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Search Screen</Text>

            <TextInput style={styles.search} placeholder="Search..." value={search} onChangeText={(text) => searchData(text)} />

            <FlatList
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <CoinCardSearch data={item} onPress={() => handleCoin(item.id, navigation)} />}
                style={styles.list}
                st
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(31, 30, 29)',
        height: Dimensions.get('window').height,

        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        paddingBottom: 60,

    },
    header: {
        height: 80,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    search: {
        width: Dimensions.get('window').width - 60,
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginTop: 25,
        paddingHorizontal: 20,
        fontSize: 18,
        borderRadius: 10,
        justifyContent: 'center',
    },
    list: {
        marginTop: 25,
    },
})