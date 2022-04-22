import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chart from '../component/chart';
import Volume from '../component/volumn';
import axios from 'axios';

const CoinDes = ({ route, navigation }) => {
    const id = route.params.data;
    const [period, setPeriod] = useState(1);
    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState(null);

    const loadData = async () => {
        const urls = [
            `https://api.coingecko.com/api/v3/coins/${id}?localization=false`,
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${period}`
        ]
        Promise.all(urls.map(url => axios.get(url))).then(
            ([{ data: coin }, { data: chart }]) => {
                setData(coin);
                const chartData = [];
                chart.prices.map(
                    item => chartData.push(item[1])
                );
                setChartData(chartData);
            },
        );

    }


    useEffect(() => {
        loadData();
    }, [period]);

    if (data === null || chartData === null) {
        return (
            <View style={styles.container}></View>
        )
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back-ios' size={30} color='#fff' />
                </TouchableOpacity>
                <Text style={styles.name}>{data.symbol.toUpperCase()}</Text>
                <TouchableOpacity style={styles.button}>
                    <Icon name='share' size={30} color='#fff' />
                </TouchableOpacity>
            </View>

            <Text style={styles.price}>${data.market_data.current_price.usd}</Text>
            <Text style={[styles.percent, data.market_data.price_change_percentage_24h_in_currency.usd > 0 ? styles.green : styles.red]}>
                {data.market_data.price_change_percentage_24h_in_currency.usd}%
            </Text>
            <View style={styles.timebuttonview}>
                <TouchableOpacity style={[styles.timebutton, period == 1 ? styles.selected : styles.notselected]} onPress={() => setPeriod(1)}><Text>24H</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.timebutton, period == 7 ? styles.selected : styles.notselected]} onPress={() => setPeriod(7)}><Text>1W</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.timebutton, period == 30 ? styles.selected : styles.notselected]} onPress={() => setPeriod(30)}><Text>1M</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.timebutton, period == 365 ? styles.selected : styles.notselected]} onPress={() => setPeriod(365)}><Text>1Y</Text></TouchableOpacity>
            </View>
            <Chart data={chartData} />
            <View style={styles.volview}>
                <Volume title={'Trading Volume'}
                    vol={data.market_data.total_volume.usd}
                    percent={''} />
                < Volume title={'Market Cap'}
                    vol={data.market_data.market_cap.usd}
                    percent={data.market_data.market_cap_change_percentage_24h_in_currency.usd} />

                <Volume title={'High(24h)'}
                    vol={data.market_data.high_24h.usd}
                    percent={''} />
                <Volume title={'Low(24h)'}
                    vol={data.market_data.low_24h.usd}
                    percent={''} />
            </View>
        </ScrollView>
    )
}

export default CoinDes;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(31, 30, 29)',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 18,

    },
    price: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
    },
    percent: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    volview: {
        paddingHorizontal: 20,
    },
    timebuttonview: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30

    },
    timebutton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
    },
    selected: {
        borderBottomColor: 'rgba(255,255,255,1)',
        backgroundColor: 'rgb(45,45,45)',

    },
    notselected: {
        borderBottomColor: 'rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.5)',
    },
    green: {
        color: '#2ecc71',
    },
    red: {
        color: '#e74c3c',
    },





})