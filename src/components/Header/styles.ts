import {Colors} from '../../styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark_blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 16,
  },
  search: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 16,
    borderRadius: 8,
    minHeight: 40,
  },
  searchIcon: {position: 'absolute', right: '20%'},
});
