import { FlatList, View } from 'react-native';

import React from 'react';
import DiscoverPostItem from '../../components/DiscoverPostItem';
import Header from '../../components/Header';
import { posts } from '../../constants/constants';
import { styles } from './styles';

const DiscoverScreen = () => {
  return (
    <View  style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DiscoverPostItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default DiscoverScreen;
