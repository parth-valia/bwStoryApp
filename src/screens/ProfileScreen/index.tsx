/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { posts } from '../../constants/constants';

import React from 'react';
import DiscoverPostItem from '../../components/DiscoverPostItem';
import Header from '../../components/Header';
import ProfileDetails from '../../components/ProfileDetails';
import { styles } from './styles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileDetails/>
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>About me</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DiscoverPostItem item={item} ownPost />}
      />
    </View>
  );
};

export default ProfileScreen;
