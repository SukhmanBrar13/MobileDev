import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const handleAlert = () => {
    Alert.alert("Alert Button pressed!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>OOTD_EVERYDAY</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
      </View>

      {/* Post Section */}
      <View style={styles.post}>
        {/* Profile Info */}
        <View style={styles.profile}>
          <Image
            source={require('./assets/IMG_0672.jpg')}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.postDetails}>via frenchie_fry39</Text>
          </View>
        </View>

        {/* Post Image */}
        <Image
          source={require('./assets/IMG_0672.jpg')}  
          style={styles.postImage}
        />

        {/* Post Actions */}
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="paper-plane-outline" size={24} color="black" />
          </View>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </View>

        {/* Post Info */}
        <Text style={styles.likes}>Liked by paisley.print.48 and 7 others</Text>
        <Text style={styles.comment}>
          <Text style={styles.bold}>frenchie_fry39</Text> Fresh shot on a sunny day! ☀️
        </Text>
        <Text style={styles.viewComments}>View all 12 comments</Text>
        <Text style={styles.comment}>
          <Text style={styles.bold}>lil_wyatt838</Text> Awesome tones
        </Text>
        <Text style={styles.comment}>
          <Text style={styles.bold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
        </Text>
        <Text style={styles.time}>1 day ago</Text>
      </View>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alertButton} onPress={handleAlert}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="black" />
        <Ionicons name="search-outline" size={28} color="black" />
        <FontAwesome name="plus-square-o" size={28} color="black" />
        <Ionicons name="heart-outline" size={28} color="black" />
        <Ionicons name="person-outline" size={28} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 50, // Adjust this value to move the header down
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  post: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Adjusted for better spacing
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postDetails: {
    color: 'gray',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 400, // Reduced height to make room for comments
    borderRadius: 8,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Increased margin for better spacing
  },
  leftActions: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  comment: {
    marginBottom: 8, // Increased spacing between comments
  },
  bold: {
    fontWeight: 'bold',
  },
  viewComments: {
    color: 'gray',
    marginBottom: 10, // Spacing below "View all comments"
  },
  time: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10, // Added spacing below time
  },
  alertButton: {
    backgroundColor: '#f09',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 20,
  },
  alertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});
