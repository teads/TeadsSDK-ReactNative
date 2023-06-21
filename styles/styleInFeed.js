import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 170,
  },
  mainScrollView: {
    flexGrow: 1,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewFullWidth: {
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 84,
    textAlign: 'center',
  },
  viewCollumn: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
});
