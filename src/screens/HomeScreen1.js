import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {w, h} from 'react-native-responsiveness';

const Data = [
  {
    id: '1',
    mainsrc: require('../assets/ShoePic1.png'),
    bmarksrc: require('../assets/bookmarkimg.png'),
    headingText: 'Nike Air Max',
    price: '45$',
  },
  {
    id: '2',
    mainsrc: require('../assets/ShoePic2.png'),
    bmarksrc: require('../assets/bookmarkimg.png'),
    headingText: 'Nike Runner',
    price: '34$',
  },
  {
    id: '3',
    mainsrc: require('../assets/ShoePic3.png'),
    bmarksrc: require('../assets/bookmarkimg.png'),
    headingText: 'Nike Air Max',
    price: '45$',
  },
  {
    id: '4',
    mainsrc: require('../assets/ShoePic4.png'),
    bmarksrc: require('../assets/bookmarkimg.png'),
    headingText: 'Nike Air Max',
    price: '45$',
  },
];

export const HomeScreen1 = () => {
  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.container2}>
              <View style={styles.bookmarkcontainerstyle}>
                <Image source={item.bmarksrc} style={styles.imgstyle} />
              </View>
              <View style={styles.mainimgcontainerstyle}>
                <Image source={item.mainsrc} />
              </View>
              <View style={styles.lastcontainerstyle}>
                <Text style={styles.headingstyle}>{item.headingText}</Text>
                <View style={styles.priceandiconcontainerstyle}>
                  <Text style={styles.pricetxtstyle}>{item.price}</Text>
                  <View style={styles.bagimgcontainerstyle}>
                    <Image
                      source={require('../assets/ShopingBag.png')}
                      style={styles.bagimgstyle}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    width: w('55%'),
    height: h('40%'),
    backgroundColor: '#ebf1fa',
    borderRadius: h('1%'),
    margin: h('2.5%'),
    overflow: 'hidden',
  },
  bookmarkcontainerstyle: {
    height: '14%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imgstyle: {
    height: '50%',
    width: '11%',
    margin: h('1.4%'),
  },
  mainimgcontainerstyle: {
    width: '95%',
    height: '55%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastcontainerstyle: {
    width: '95%',
    height: '29%',
    alignSelf: 'center',
  },
  headingstyle: {
    fontSize: h('2%'),
    color: 'grey',
  },
  priceandiconcontainerstyle: {
    flexDirection: 'row',
    height: '70%',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  pricetxtstyle: {
    fontSize: h('3.3%'),
    margin: '6%',
    fontWeight: '600',
  },

  bagimgcontainerstyle: {
    padding: '8%',
    height: '100%',
    width: '32%',
    backgroundColor: '#4D79D7',
    borderTopLeftRadius: h('2%'),
    borderBottomRightRadius: h('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
