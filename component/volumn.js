import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Volume = ({ title, vol, percent }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tradingVolume}>{title}</Text>
            <View style={styles.row}>
                <Text style={styles.volumn}>${(vol)}</Text>
                <Text style={[styles.percent, percent > 0 ? styles.green : styles.red]}>{percent === '' ? '' : `${percent}%`}</Text>
            </View>
        </View>
    )
}

export default Volume;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        borderBottomColor: 'rgba(255,255,255,0.5)',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    tradingVolume: {
        fontFamily: "roboto-regular",
        color: "#fff",
        fontSize: 14,
        opacity: 0.86,

    },
    row: {
        height: 24,
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "space-between",
    },
    volumn: {
        fontFamily: "roboto-700",
        color: "#fff",
        height: 24,
        width: 105,
        fontWeight: "bold",
    },

    percent: {
        fontFamily: "roboto-700",
        height: 24,
        width: 94,
        textAlign: "right"
    },
    green: {
        color: '#2ecc71',
    },
    red: {
        color: '#e74c3c',
    },

});
