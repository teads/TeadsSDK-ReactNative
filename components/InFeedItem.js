import { Text, View, Button, Image } from 'react-native'
import { Card } from 'react-native-elements'
import styles from '../styles/styles'
import { COVER_RESIZING, RADIUS_CARD } from '../constants'
import * as React from 'react'

const InFeedItem = ({ icon, text, title, media, time, source, textButton }) => {
  return (
    <Card borderRadius={RADIUS_CARD}>
      <View style={styles.containerNative}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imageLogoItem}
            resizeMode={COVER_RESIZING}
            source={{
              uri: icon
            }}
          />
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.lignDetails}>{source}</Text>
          <Text style={styles.lignDetails}>{time}min</Text>
        </View>
        <View style={styles.containerButtonNative}>
          <Button buttonStyle={styles.buttonNative} title={textButton} />
        </View>
      </View>
      <Card.Title>{title}</Card.Title>
      <Text style={styles.lignDetails}>{text}</Text>
      <Image
        style={styles.mainItemImage}
        resizeMode={COVER_RESIZING}
        source={{
          uri: media
        }}
      />
    </Card>
  )
}

export default InFeedItem
