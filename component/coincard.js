import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";


const CoinCard = ({ data, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.description}>
                <Image source={{ uri: data.image }} style={styles.img}></Image>
                <View>
                    <Text style={styles.coinname}>{data.name}</Text>
                    <Text style={styles.vol}>Vol. {Math.round(data.total_volume / 1000000)}M</Text>
                </View>
            </View>
            <View >
                <Text style={styles.price}>${data.current_price}</Text>
                <Text style={[styles.percent, data.price_change_24h > 0 ? styles.green : styles.red]}>{`${Math.round(data.price_change_percentage_24h * 100) / 100}%`}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 90,
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 20,
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
    },
    percent: {
        fontSize: 13,
        marginTop: 4,
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    green: {
        color: '#2ecc71',
    },
    red: {
        color: '#e74c3c',
    },
})

export default CoinCard;