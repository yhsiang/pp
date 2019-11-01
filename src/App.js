import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { getBitoEXPrice, getMaiCoinPrice } from './api';


class App extends Component {
  state = {
    bitoex: {
      btc: { buy: '', sell: ''},
      eth: { buy: '', sell: ''},
    },
    maicoin: {
      btc: { buy: '', sell: ''},
      eth: { buy: '', sell: ''},
      ltc: { buy: '', sell: ''},
      usdt: { buy: '', sell: ''},
    },
  };

  getPrice = () => {
    Promise.all([
      getBitoEXPrice(),
      getMaiCoinPrice('btc'),
      getMaiCoinPrice('eth'),
      getMaiCoinPrice('ltc'),
      getMaiCoinPrice('usdt'),
    ]).then(([bito, mbtc, meth, mltc, musdt])=> {
      this.setState({
        bitoex: {
          btc: { buy: bito.BTC[0], sell: bito.BTC[1] },
          eth: { buy: bito.ETH[0], sell: bito.ETH[1] },
        },
        maicoin: {
          btc: {
            buy: mbtc.formatted_buy_price_in_twd.replace('NT$', ''),
            sell: mbtc.formatted_sell_price_in_twd.replace('NT$', ''),
          },
          eth:{
            buy: meth.formatted_buy_price_in_twd.replace('NT$', ''),
            sell: meth.formatted_sell_price_in_twd.replace('NT$', ''),
          },
          ltc: {
            buy: mltc.formatted_buy_price_in_twd.replace('NT$', ''),
            sell: mltc.formatted_sell_price_in_twd.replace('NT$', ''),
          },
          usdt: {
            buy: musdt.formatted_buy_price_in_twd.replace('NT$', ''),
            sell: musdt.formatted_sell_price_in_twd.replace('NT$', ''),
          },
        },
      })
    });
  };

  componentDidMount() {
    this.getPrice();
    setInterval(() => {
      this.getPrice();
    }, 60*1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
          <View style={{ flexDirection: 'row'}}>
            <Text style={{ paddingRight: 10, width: 70 }}>BitoEX</Text>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>BTC Buy</Text>
                <Text>{this.state.bitoex.btc.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>BTC Sell</Text>
                <Text>{this.state.bitoex.btc.sell}</Text>
              </View>
            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>ETH Buy</Text>
                <Text>{this.state.bitoex.eth.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>ETH Sell</Text>
                <Text>{this.state.bitoex.eth.sell}</Text>
              </View>
            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>

            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>

            </View>
          </View>
        </View>
{/* maicoin */}
        <View style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
          <View style={{ flexDirection: 'row'}}>
            <Text style={{ paddingRight: 10, width: 70 }}>MaiCoin</Text>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>BTC Buy</Text>
                <Text>{this.state.maicoin.btc.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>BTC Sell</Text>
                <Text>{this.state.maicoin.btc.sell}</Text>
              </View>
            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>ETH Buy</Text>
                <Text>{this.state.maicoin.eth.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>ETH Sell</Text>
                <Text>{this.state.maicoin.eth.sell}</Text>
              </View>
            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>LTC Buy</Text>
                <Text>{this.state.maicoin.ltc.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 70 }}>LTC Sell</Text>
                <Text>{this.state.maicoin.ltc.sell}</Text>
              </View>
            </View>
            <View  style={{ flex: 1, borderColor: 'black', borderWidth: 1, padding: 10 }}>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 80 }}>USDT Buy</Text>
                <Text>{this.state.maicoin.usdt.buy}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ paddingRight: 10, width: 80 }}>USDT Sell</Text>
                <Text>{this.state.maicoin.usdt.sell}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
