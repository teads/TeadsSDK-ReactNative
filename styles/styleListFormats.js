import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  formatContainerRow: { flex: 0.48 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: '#0818B3',
  },
  buttonUnpressed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: 'white',
    borderColor: '#0818B3',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
  },
  textUnpressed: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#0818B3',
  },
});
