import { Text, View, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';
import styleInFeedItem from '../styles/styleInFeedItem';
import { COVER_RESIZING, RADIUS_CARD } from '../constants';
import * as React from 'react';

const InFeedItem = ({ icon, text, title, media, time, source, textButton }) => {
  return (
    <Card borderRadius={RADIUS_CARD}>
      <View style={styleInFeedItem.containerNative}>
        <View style={styleInFeedItem.containerImage}>
          <Image
            style={styleInFeedItem.imageLogoItem}
            resizeMode={COVER_RESIZING}
            source={{
              uri: icon,
            }}
          />
        </View>
        <View style={styleInFeedItem.containerDetails}>
          <Text style={styleInFeedItem.lignDetails}>{source}</Text>
          <Text style={styleInFeedItem.lignDetails}>{time}min</Text>
        </View>
        <View style={styleInFeedItem.containerButtonNative}>
          <Button
            buttonStyle={styleInFeedItem.buttonNative}
            title={textButton}
          />
        </View>
      </View>
      <Card.Title>{title}</Card.Title>
      <Text style={styleInFeedItem.lignDetails}>{text}</Text>
      <Image
        style={styleInFeedItem.mainItemImage}
        resizeMode={COVER_RESIZING}
        source={{
          uri: media,
        }}
      />
    </Card>
  );
};

export default InFeedItem;
