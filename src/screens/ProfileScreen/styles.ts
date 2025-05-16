import {Colors} from '../../styles/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  title: {color: Colors.black, fontSize: 16, fontWeight: 'bold'},
  btn: {
    backgroundColor: Colors.dark_blue,
    paddingVertical: 8,
    paddingHorizontal: 20,
    maxHeight: 40,
    borderRadius: 99,
  },
  btnTxt: {color: Colors.white, fontSize: 16, fontWeight: 'bold'},

  aboutContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  btnContainer: {flexDirection: 'row', alignItems: 'center', gap: 16},
});
