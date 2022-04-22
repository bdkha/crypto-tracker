import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const CoinCardSearch = ({ data, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.description}>
                <Image source={{ uri: data.large }} style={styles.img}></Image>
                <View>
                    <Text style={styles.coinname}>{data.name}</Text>
                    <Text style={styles.vol}>{data.symbol}</Text>
                </View>
            </View>
            <View >
                <Text style={styles.price}>Rank</Text>
                <Text style={styles.percent}>{data.market_cap_rank}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default CoinCardSearch;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 90,
        width: Dimensions.get('window').width - 30,
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,

        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    description: {
        flexDirection: "row",
    },
    img: {
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 25,
        marginRight: 15,
    },
    coinname: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
    },
    vol: {
        fontSize: 13,
        marginTop: 4,
        color: "#fff",
    },
    price: {
        fontSize: 15,
        color: "#fff",
        marginLeft: 'auto',
        marginRight: 0,
    },
    percent: {
        fontSize: 13,
        marginTop: 4,
        fontWeight: 'bold',
        marginLeft: 'auto',
        color: '#fff',
    },


})