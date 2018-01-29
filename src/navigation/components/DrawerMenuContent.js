import React, { Component } from 'react-native';

class DrawerMenuContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Quando</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Onde</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>{'Programação'}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Palestrantes</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Sobre</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Scan</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemSideMenu}>
            <Text style={styles.itemTextSideMenu}>Sair</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // DrawerMenu.js
  // ---
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16 
  },
  itemSideMenu: {
    backgroundColor: 'gray',
    padding: 16
  },
  itemTextSideMenu: {
    color: 'gray',
    fontFamily: 'Regular-Light',
    fontSize: 22
  },
});

export default DrawerMenuContent;