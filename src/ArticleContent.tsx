import { Text, StyleSheet } from 'react-native';

export default function ArticleContent() {
  return (
    <>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        purus ac magna hendrerit tincidunt. Sed finibus, lorem id iaculis
        venenatis, mauris est maximus nisi, vel posuere velit nulla at quam.
      </Text>
      <Text style={styles.content}>
        Donec vehicula turpis nec ex venenatis, vel maximus velit consectetur.
        Curabitur at enim ac risus pharetra gravida. Sed bibendum, odio eget
        congue sodales, quam augue malesuada lorem, vel faucibus orci ligula
        eget mi.
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: 'black',
  },
});
