import { Text, View, Button, Image } from 'react-native'
import { Card } from 'react-native-elements'

import * as React from 'react'

const InFeedItem = ({ icon, text, title, media, time, source, textButton }) => {
  return (
    <Card borderRadius={20}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          marginBottom: 10
        }}
      >
        <View style={{ width: '20%', marginLeft: 10 }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            resizeMode="cover"
            source={{
              uri: icon
            }}
          />
        </View>
        <View
          style={{
            width: '50%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'stretch',
            marginBottom: 10
          }}
        >
          <Text style={{ marginBottom: 1 }}>{source}</Text>
          <Text style={{ marginBottom: 1 }}>{time}min</Text>
        </View>
        <View style={{ width: '30%' }}>
          <Button
            buttonStyle={{ borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title={textButton}
          />
        </View>
      </View>
      <Card.Title>{title}</Card.Title>
      <Text style={{ marginBottom: 10 }}>{text}</Text>
      <Image
        style={{ width: '100%', height: 150, borderRadius: 20 }}
        resizeMode="cover"
        source={{
          uri: media
        }}
      />
    </Card>
  )
}

export default InFeedItem
