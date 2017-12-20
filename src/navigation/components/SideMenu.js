import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { Header, Footer } from './';

export default props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>        
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Header />
        <DrawerItems {...props} />
        <Footer />
      </SafeAreaView>
    </ScrollView>
  );
}