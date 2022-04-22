import React, { useEffect } from 'react';
import { LinearGradient, Stop, Defs } from 'react-native-svg';
import { LineChart } from 'react-native-svg-charts';
import { View, Text } from 'react-native';
import { Grid } from 'react-native-svg-charts';
import { YAxis } from 'react-native-svg-charts';

const Chart = ({ data }) => {

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
                <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
            </LinearGradient>
        </Defs>
    );
    if (data === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 300 }}>

            </View>
        )
    }
    return (

        <View style={{ height: 300, padding: 20, flexDirection: 'row' }}>
            <LineChart
                style={{ flex: 1, marginRight: 16 }}
                data={data}
                svg={{ stroke: 'url(#gradient)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
                <Gradient />
            </LineChart>
            <YAxis
                data={data}
                contentInset={{ left: 20, right: 20, top: 20, bottom: 20, marginLeft: 10 }}
                svg={{
                    fill: "#fff",
                    fontSize: 12,
                    color: "white"
                }}
                formatLabel={value => `${value}`}
            />
        </View>
    );
}

export default Chart;