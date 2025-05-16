import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-easy-icon';
import { Colors } from '../../styles/colors';
import { styles } from './styles';

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.dark_blue}
        barStyle={'light-content'}
      />
      <TouchableOpacity>
        <Icon name="menu" type="feather" size={28} color={Colors.white} />
      </TouchableOpacity>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        style={styles.search}
        placeholderTextColor={Colors.gray}
      />
      <Icon
        name="search"
        type="feather"
        size={24}
        style={styles.searchIcon}
        color={Colors.dark_blue}
      />
      <TouchableOpacity>
        <Icon
          name="options-outline"
          type="ionicon"
          size={28}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
