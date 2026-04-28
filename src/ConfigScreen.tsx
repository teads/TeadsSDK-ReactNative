import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import type { ConfigScreenProps } from './types';

const ConfigScreen = ({ navigation }: ConfigScreenProps) => {
  // Teads Placement configuration
  const [pid, setPid] = useState('84242');
  const [url, setUrl] = useState('http://t.teads.tv/');

  // Feed Placement configuration
  const [widgetId, setWidgetId] = useState('MB_2');
  const [articleUrl, setArticleUrl] = useState(
    'https://mobile-demo.outbrain.com'
  );

  const handleNavigateToArticle = () => {
    navigation.push('ArticlePage', {
      teadsConfig: { pid, url },
      feedConfig: { widgetId, articleUrl },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>QA Configuration</Text>

        {/* Teads Placement Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Teads Placement</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>PID (Select or Enter Custom):</Text>
            <Picker
              selectedValue={pid}
              onValueChange={(itemValue) => setPid(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Landscape - 84242" value="84242" />
              <Picker.Item label="Vertical - 127546" value="127546" />
              <Picker.Item label="Square - 127547" value="127547" />
              <Picker.Item label="Carousel - 128779" value="128779" />
              <Picker.Item label="Custom (use text input below)" value={pid.match(/^(84242|127546|127547|128779)$/) ? '' : pid} />
            </Picker>
            <Text style={styles.subLabel}>Or enter custom PID:</Text>
            <TextInput
              style={styles.input}
              value={pid}
              onChangeText={setPid}
              placeholder="Enter custom PID"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>URL:</Text>
            <TextInput
              style={styles.input}
              value={url}
              onChangeText={setUrl}
              placeholder="Enter URL"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Feed Placement Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Feed Placement</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Widget ID:</Text>
            <TextInput
              style={styles.input}
              value={widgetId}
              onChangeText={setWidgetId}
              placeholder="Enter Widget ID"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Article URL:</Text>
            <TextInput
              style={styles.input}
              value={articleUrl}
              onChangeText={setArticleUrl}
              placeholder="Enter Article URL"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Go to Article Screen"
            onPress={handleNavigateToArticle}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#002bff',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#555',
  },
  subLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 8,
    color: '#777',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fafafa',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 32,
  },
});

export default ConfigScreen;
