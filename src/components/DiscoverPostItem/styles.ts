import { Colors } from '../../styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: Colors.dark_blue,
  },
  followBtn: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    backgroundColor: Colors.dark_blue,
  },
  outlineFollowBtn: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: Colors.dark_blue,
  },
  outlineFollowText: {
    fontSize: 12,
    color: Colors.dark_blue,
  },
  followText: {
    fontSize: 12,
    color: Colors.white,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  slider: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    marginTop: 5,
    color: Colors.dark_blue,
    fontSize: 16,
  },
  actionBar: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  separator: {
    height: 16,
    width: 1,
    backgroundColor: Colors.dark_blue,
    marginHorizontal: 8,
  },
  txt: {color: Colors.dark_blue},
  share: {marginLeft: 16},
});
