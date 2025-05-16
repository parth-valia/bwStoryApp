/* eslint-disable react/no-unstable-nested-components */
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Images, userDetails } from '../../constants/constants';

import React from 'react';
import Icon from 'react-native-easy-icon';
import { formatFollowers } from '../../helpers/functions';
import { globalStyle } from '../../styles/global-style';
import { styles } from './styles';

const ProfileDetails = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={Images.profile} style={styles.profile} />
        <View style={globalStyle.flex1}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Parth Valia</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userDetailsContainer}>
            <View style={globalStyle.flexRowAlignCenter}>
              <Icon name="location-arrow" type="font-awesome" size={24} />
              <Text style={styles.userDetailsTxt}>Surat, Gujarat</Text>
            </View>
            <View style={globalStyle.flexRowAlignCenter}>
              <Icon name="bag" type="simple-line-icon" size={20} />
              <Text style={styles.userDetailsTxt}>Anchor</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={userDetails}
          horizontal
          contentContainerStyle={styles.userDetailsList}
          keyExtractor={item => item?.id?.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <View key={item?.id} style={globalStyle.alignCenter}>
              <Text style={styles.name}>
                {item?.id === 1 ? item?.count : formatFollowers(item?.count)}
              </Text>
              <Text>{item?.tilte}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ProfileDetails;
