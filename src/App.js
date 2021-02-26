import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import IconWin from './IconWin';
import { getPrice } from './api';

function formatMaiCoin(str, digits) {
  if (str === '') return str;

  return 'NT$ ' +(new Intl.NumberFormat(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(str));
}

function formatBitoEX(str) {
  if (str === '') return str;
  return 'NT$ ' + str;
}

function compareBuy(price1, price2) {
  if (price1 === '' || price2 === '') return false;

  const p1 = Number(price1.replace('NT$', '').replace(',',''));
  const p2 = Number(price2.replace('NT$', '').replace(',',''));
  return p1 < p2;
}

function compareSell(price1, price2) {
  if (price1 === '' || price2 === '') return false;

  const p1 = Number(price1.replace('NT$', '').replace(',',''));
  const p2 = Number(price2.replace('NT$', '').replace(',',''));
  return p1 > p2;
}

class App extends Component {
  state = {
    bitoex: {
      btc: { buy: '', sell: '', history: [] },
      eth: { buy: '', sell: '', history: [] },
      usdt: { buy: '', sell: '', history: [] },
    },
    maicoin: {
      btc: { buy: '', sell: '', history: []},
      eth: { buy: '', sell: '', history: []},
      ltc: { buy: '', sell: '', history: []},
      usdt: { buy: '', sell: '', history: []},
    },
  };

  getData = () => {
    getPrice().then(price => {
      const { bitoex, maicoin } = price;
      this.setState({
        bitoex: {
          btc: {
            buy: bitoex.BTC[0],
            sell: bitoex.BTC[1],
          },
          eth: {
            buy: bitoex.ETH[0],
            sell: bitoex.ETH[1]
          },
          usdt: {
            buy: bitoex.USDT[0],
            sell: bitoex.USDT[1]
          },
        },
        maicoin: {
          btc: {
            buy: maicoin.BTC.formatted_buy_price_in_twd,
            sell: maicoin.BTC.formatted_sell_price_in_twd,
          },
          eth:{
            buy: maicoin.ETH.formatted_buy_price_in_twd,
            sell: maicoin.ETH.formatted_sell_price_in_twd,
          },
          ltc: {
            buy: maicoin.LTC.formatted_buy_price_in_twd,
            sell: maicoin.LTC.formatted_sell_price_in_twd,
          },
          usdt: {
            buy: maicoin.USDT.formatted_buy_price_in_twd,
            sell: maicoin.USDT.formatted_sell_price_in_twd,
          },
        },
      })
    });
  };

  componentDidMount() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 15*1000)
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          {/* MaiCoin */}
          <View style={[styles.wrapper, styles.maicoin]}>
            <View style={styles.header}>
              <Text style={styles.headerText}>MaiCoin</Text>
            </View>
            {/* BTC */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>BTC</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.btc.buy, 0)}</Text>
                  { compareBuy(this.state.maicoin.btc.buy, this.state.bitoex.btc.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.btc.sell, 0)}</Text>
                  { compareSell(this.state.maicoin.btc.sell, this.state.bitoex.btc.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
            {/* ETH */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>ETH</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.eth.buy, 0)}</Text>
                  { compareBuy(this.state.maicoin.eth.buy, this.state.bitoex.eth.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.eth.sell, 0)}</Text>
                  { compareSell(this.state.maicoin.eth.sell, this.state.bitoex.eth.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
            {/* LTC */}
            {/* USDT */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>USDT</Text>
              </View>
              <View>
                <View style={styles.row}>
                <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.usdt.buy, 2)}</Text>
                  { compareBuy(this.state.maicoin.usdt.buy, this.state.bitoex.usdt.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.usdt.sell, 2)}</Text>
                  { compareSell(this.state.maicoin.usdt.sell, this.state.bitoex.usdt.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
          </View>
          {/* BitoEX */}
          <View style={[styles.wrapper, styles.bitoex]}>
            <View style={styles.header}>
              <Text style={styles.headerText}>BitoEX</Text>
            </View>
            {/* BTC */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>BTC</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.btc.buy)}</Text>
                  { compareBuy(this.state.bitoex.btc.buy, this.state.maicoin.btc.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatBitoEX(this.state.bitoex.btc.sell)}</Text>
                  { compareSell(this.state.bitoex.btc.sell, this.state.maicoin.btc.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
            {/* ETH */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>ETH</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.eth.buy)}</Text>
                  { compareBuy(this.state.bitoex.eth.buy, this.state.maicoin.eth.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatBitoEX(this.state.bitoex.eth.sell)}</Text>
                  { compareSell(this.state.bitoex.eth.sell, this.state.maicoin.eth.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
            {/* USDT */}
            <View style={styles.block}>
              <View style={styles.blockCurrency}>
                <Text style={styles.blockCurrencyText}>USDT</Text>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Buy</Text>
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.usdt.buy)}</Text>
                  { compareBuy(this.state.bitoex.usdt.buy, this.state.maicoin.usdt.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>Sell</Text>
                  <Text style={styles.blockPriceText}>{formatBitoEX(this.state.bitoex.usdt.sell)}</Text>
                  { compareSell(this.state.bitoex.usdt.sell, this.state.maicoin.usdt.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  blockCurrency: {
    paddingRight: 20, justifyContent: 'center',
  },
  blockCurrencyText: {
    fontSize: 24,
    color: '#fff',
  },
  blockPrice: {

  },
  blockPriceText: {
    fontSize: 16,
    color: '#fff',
    padding: 5,
  },
  maicoin: {
    backgroundColor: '#e54',
  },
  bitoex: {
    backgroundColor: '#13b9e6',
  },
  row: {
    flexDirection: 'row',
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
