import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import type { ArticlePageProps } from './types';
import { TeadsAdPlacementFeed, TeadsAdPlacementMedia } from 'teads-react-native';
import ArticleContent from './ArticleContent';

const ArticleScreen = ({ navigation, route }: ArticlePageProps) => {
  const { teadsConfig, feedConfig } = route.params;
  const [darkMode, setDarkMode] = React.useState(false);

  // Use config values from route params or default values
  const pid = teadsConfig?.pid ?? '84242';
  const url = teadsConfig?.url ?? 'http://t.teads.tv/';
  const widgetId = feedConfig?.widgetId ?? 'MB_2';
  const articleUrl =
    feedConfig?.articleUrl ?? 'https://mobile-demo.outbrain.com';

  // toggle dark mode every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      // setDarkMode((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Button
        title="Go to Article Page"
        onPress={() =>
          navigation.push('ArticlePage', {
            teadsConfig,
            feedConfig,
          })
        }
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.childOfContainer}
      >
        <View style={styles.configContainer}>
          <Text style={styles.configTitle}>Current Configuration</Text>
          <Text style={styles.configLabel}>
            Teads PID: <Text style={styles.configValue}>{pid}</Text>
          </Text>
          <Text style={styles.configLabel}>
            Teads URL: <Text style={styles.configValue}>{url}</Text>
          </Text>
          <Text style={styles.configLabel}>
            Feed Widget ID: <Text style={styles.configValue}>{widgetId}</Text>
          </Text>
          <Text style={styles.configLabel}>
            Feed Article URL: <Text style={styles.configValue}>{articleUrl}</Text>
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/c5r52rbifxn2srhp9no0',
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Article Header</Text>
          <Text style={styles.subheader}>Article Sub-header</Text>
          <ArticleContent />
          <ArticleContent />
          <TeadsAdPlacementMedia
            key={`teads-media-${pid}-${url}`}
            pid={pid}
            url={url}
          />
          <ArticleContent />
          <ArticleContent />
          <TeadsAdPlacementFeed
            key={`teads-feed-${widgetId}-${articleUrl}`}
            widgetId={widgetId}
            widgetIndex={0}
            articleUrl={articleUrl}
            partnerKey="NANOWDGT01"
            darkMode={darkMode}
            extId="my_ext_id"
            extSecondaryId="my_scndry_ext_id"
            pubImpId="my_pub_imp_id"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  childOfContainer: {
    backgroundColor: '#fff',
  },
  configContainer: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#002bff',
  },
  configTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#002bff',
  },
  configLabel: {
    fontSize: 13,
    marginBottom: 4,
    color: '#333',
    fontWeight: '600',
  },
  configValue: {
    fontWeight: '400',
    color: '#666',
    fontFamily: 'monospace',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  textContainer: {
    padding: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#002bff',
    color: 'white',
    padding: 8,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 16,
    padding: 4,
  },
});

export default ArticleScreen;
