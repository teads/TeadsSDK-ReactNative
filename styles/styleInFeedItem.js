import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerNative: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginBottom: 10,
  },
  containerImage: { width: '20%', marginLeft: 10 },
  imageLogoItem: { width: 40, height: 40, borderRadius: 20 },
  containerDetails: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginBottom: 10,
  },
  lignDetails: { marginBottom: 1 },
  containerButtonNative: { width: '30%' },
  buttonNative: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  mainItemImage: { width: '100%', height: 150, borderRadius: 20 },
});
