import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [liked, setLiked] = useState(false);

  const travelMemory = {
    name: 'Princeraj Parmar',
    location: 'Taj Mahal, India',
    date: 'March 20, 2024',
    note: 'Explored the Taj Mahal at sunset',
    image:
      'https://thumbs.dreamstime.com/b/breathtaking-sunset-taj-mahal-agra-experience-mesmerizing-beauty-s-iconic-dusk-picture-perfect-moment-where-vibrant-290640402.jpg',
  };

  const handleShare = () => {
    console.log('Shared Travel Memory:');
    console.log(`Name: ${travelMemory.name}`);
    console.log(`Location: ${travelMemory.location}`);
    console.log(`Date: ${travelMemory.date}`);
    console.log(`Note: ${travelMemory.note}`);
    Alert.alert('✅ Shared!', 'Travel memory details logged to console.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.fullName}>{travelMemory.name}</Text>

      <View style={styles.card}>
        <Image source={{uri: travelMemory.image}} style={styles.image} />
        <View style={styles.overlay} />

        <Text style={styles.title}>{travelMemory.location}</Text>
        <Text style={styles.date}>{travelMemory.date}</Text>
        <Text style={styles.note}>{travelMemory.note}</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => setLiked(!liked)}
            style={styles.button}>
            <Text style={[styles.buttonText, {color: liked ? 'red' : 'white'}]}>
              {liked ? '♥ Liked' : '♡ Like'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare} style={styles.button}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  card: {
    width: 300,
    height: 450,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  date: {
    fontSize: 14,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 4,
  },
  note: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  button: {
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
