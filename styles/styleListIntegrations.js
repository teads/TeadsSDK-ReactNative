import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  integrationsItems: {
    marginTop: 10,
    width: '48%',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#A9BCD1',
    borderRadius: 10,
  },
  containerColumn: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  imageItems: {
    flex: 0.75,
    padding: 10,
  },
  integrationsImages: { width: '100%', height: 120, resizeMode: 'contain' },
  textItems: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIntegrations: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#A9BCD1',
  },
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  containerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignContent: 'space-around',
  },
});
