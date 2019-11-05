import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Chart from 'react-apexcharts'
import IconWin from './IconWin';
import { getBitoEXPrice, getMaiCoinPrice, getBitoEXHistory, getMaiCoinHistory } from './api';

function formatMaiCoin(str) {
  if (str === '') return str;

  const strs = str.split('.');
  const deciaml = Number('0.' + strs[1]).toFixed(2);
  return (strs[0] + '.' + deciaml.split('.')[1]).replace('NT$', 'NT$ ').replace(',', ', ');
}

function formatBitoEX(str) {
  if (str === '') return str;
  return 'NT$ ' + str.replace(',', ', ');
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

  getPrice = () => {
    Promise.all([
      getBitoEXPrice(),
      getMaiCoinPrice('btc'),
      getMaiCoinPrice('eth'),
      getMaiCoinPrice('ltc'),
      getMaiCoinPrice('usdt'),
      getBitoEXHistory('btc'),
      getMaiCoinHistory('btc'),
    ]).then(([bito, mbtc, meth, mltc, musdt, bitoHistorybtc, mHistorybtc])=> {
      this.setState({
        bitoex: {
          btc: {
            buy: bito.BTC[0],
            sell: bito.BTC[1],
            history: bitoHistorybtc,
          },
          eth: {
            buy: bito.ETH[0],
            sell: bito.ETH[1]
          },
          usdt: {
            buy: bito.USDT[0],
            sell: bito.USDT[1]
          },
        },
        maicoin: {
          btc: {
            buy: mbtc.formatted_buy_price_in_twd,
            sell: mbtc.formatted_sell_price_in_twd,
            history: mHistorybtc,
          },
          eth:{
            buy: meth.formatted_buy_price_in_twd,
            sell: meth.formatted_sell_price_in_twd,
          },
          ltc: {
            buy: mltc.formatted_buy_price_in_twd,
            sell: mltc.formatted_sell_price_in_twd,
          },
          usdt: {
            buy: musdt.formatted_buy_price_in_twd,
            sell: musdt.formatted_sell_price_in_twd,
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.btc.buy)}</Text>
                  { compareBuy(this.state.maicoin.btc.buy, this.state.bitoex.btc.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.btc.sell)}</Text>
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.eth.buy)}</Text>
                  { compareBuy(this.state.maicoin.eth.buy, this.state.bitoex.eth.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.eth.sell)}</Text>
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatMaiCoin(this.state.maicoin.usdt.buy)}</Text>
                  { compareBuy(this.state.maicoin.usdt.buy, this.state.bitoex.usdt.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={styles.blockPriceText}>{formatMaiCoin(this.state.maicoin.usdt.sell)}</Text>
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.btc.buy)}</Text>
                  { compareBuy(this.state.bitoex.btc.buy, this.state.maicoin.btc.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.eth.buy)}</Text>
                  { compareBuy(this.state.bitoex.eth.buy, this.state.maicoin.eth.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
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
                  <Text style={[styles.blockPriceText, { paddingRight: 5 }]}>{formatBitoEX(this.state.bitoex.usdt.buy)}</Text>
                  { compareBuy(this.state.bitoex.usdt.buy, this.state.maicoin.usdt.buy) && <IconWin size={40} color="yellow" /> }
                </View>
                <View style={styles.row}>
                  <Text style={styles.blockPriceText}>{formatBitoEX(this.state.bitoex.usdt.sell)}</Text>
                  { compareSell(this.state.bitoex.usdt.sell, this.state.maicoin.usdt.sell) && <IconWin size={40} color="yellow" /> }
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Charts */}
        <View>
          <Chart options={
             {
              chart: {
                stacked: false,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              plotOptions: {
                line: {
                  curve: 'smooth',
                }
              },
              dataLabels: {
                enabled: false
              },

              markers: {
                size: 0,
                style: 'full',
              },
              colors: ['#e54', '#13b9e6'],
              title: {
                text: '價格走勢',
                align: 'left'
              },
              yaxis: {
                labels: {
                  formatter: function (val) {
                    return val.toFixed(0);
                  },
                },
                title: {
                  text: 'Price'
                },
              },
              xaxis: {
                type: 'datetime',
              },

              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              }
            }
          } series={[
            { name: 'maicoin btc', data: this.state.maicoin.btc.history},
            { name: 'bitoex btc', data: this.state.bitoex.btc.history},

          ]} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
