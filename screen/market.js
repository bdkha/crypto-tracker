import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Dimensions } from 'react-native';
import CoinCard from '../component/coincard';

const Market = ({ navigation }) => {
    const [data, setData] = useState(null);

    const loadMarketData = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false');
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        loadMarketData();
    }, []);


    const handleCoin = (id, navigation) => {
        navigation.navigate('CoinDes', {
            data: id,
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Spot Market</Text>


            <View>
                {data === null ? (<View style={styles.list}></View>) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => <CoinCard data={item} onPress={() => handleCoin(item.id, navigation)} />}
                        style={styles.list}
                        showsVerticalScrollIndicator={false}
                    />
                )
                }
            </View>
            <View style={styles.footer}></View>
        </View>
    )
}

export default Market;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        height: Dimensions.get('window').height,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        paddingBottom: 50,

    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    list: {

        marginTop: 20,
        marginBottom: 60,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    footer: {
        height: 60,
    }
})