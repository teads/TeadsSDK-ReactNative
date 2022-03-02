import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 170
  },
  listText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: '#0818B3'
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
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center'
  },
  textUnpressed: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#0818B3'
  },
  containerRow: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    paddingBottom: 10
  },

  textIntegrations: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#A9BCD1'
  },
  containerColumn: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  integrationsItems: {
    flex: 0.49,
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#A9BCD1',
    borderRadius: 10
  },
  imageItems: {
    flex: 0.75,
    padding: 10
  },
  textItems: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  integrationsImages: { width: '100%', height: 120, resizeMode: 'contain' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
