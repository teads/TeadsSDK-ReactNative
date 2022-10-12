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
  textUnpressed: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#0818B3'
  },
  containerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignContent: 'space-around'
  },
  textIntegrations: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#A9BCD1'
  },
  containerColumn: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  integrationsItems: {
    marginTop: 10,
    width: '48%',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderColor: '#A9BCD1',
    borderRadius: 10
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  buttonClose: {
    backgroundColor: '#2196F3'
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
  buttonModal: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 18,
    elevation: 3,
    backgroundColor: '#0818B3'
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center'
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
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    textAlign: 'center'
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 84,
    textAlign: 'center'
  },
  titleBody: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  subtitleBody: {
    color: 'black',
    fontSize: 20,
    textAlign: 'justify'
  },
  fakeArticle: {
    height: 10,
    width: '100%',
    backgroundColor: '#cfcfcf',
    opacity: 0.32,
    borderRadius: 10,
    marginTop: 10
  },
  mainScrollView: {
    flexGrow: 1
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  viewFullWidth: {
    width: '100%'
  },
  viewCollumn: {
    flex: 1,
    padding: 10,
    flexDirection: 'column'
  },
  viewWithMargin: {
    marginTop: 10
  },
  viewRow: { flexDirection: 'row' },
  logoImage: { width: 30, height: 28, resizeMode: 'cover' },
  logoTeads: { width: 150, height: 30, resizeMode: 'cover' },

  //native InFeedItem
  containerNative: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginBottom: 10
  },
  containerImage: { width: '20%', marginLeft: 10 },
  imageLogoItem: { width: 40, height: 40, borderRadius: 20 },
  containerDetails: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginBottom: 10
  },
  lignDetails: { marginBottom: 1 },
  containerButtonNative: { width: '30%' },
  buttonNative: { borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0 },
  mainItemImage: { width: '100%', height: 150, borderRadius: 20 }
})
