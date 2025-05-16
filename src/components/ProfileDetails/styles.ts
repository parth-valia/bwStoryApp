import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 34,
    marginBottom: 24,
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 16,
  },
  profile: {height: 84, width: 84, borderRadius: 99},
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {color: Colors.black, fontSize: 16, fontWeight: 'bold'},
  userDetailsTxt: {fontSize: 16, marginLeft: 8},
  userDetailsContainer: {gap: 6},
  separator: {
    height: 40,
    width: 1,
    backgroundColor: Colors.gray,
    marginHorizontal: 24,
  },
  userDetailsList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: Colors.dark_blue,
    paddingVertical: 8,
    paddingHorizontal: 20,
    maxHeight: 40,
    borderRadius: 99,
  },
  btnTxt: {color: Colors.white, fontSize: 16, fontWeight: 'bold'},
});
