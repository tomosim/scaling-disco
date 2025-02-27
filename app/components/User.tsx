import { ImageBackground, Text, StyleSheet, View } from "react-native";
import type { FullProfileSchema } from "../utils/schemas";
import type { z } from "zod";
import OnlineStatus from "./OnlineStatus";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const User = ({ profile }: { profile: z.infer<typeof FullProfileSchema> }) => {
  const styles = createStyles(profile.online_status === "OFFLINE");
  return (
    <ImageBackground
      source={{
        uri: profile.picture?.url ?? "https://placedog.net/500x500",
      }}
      style={styles.tile}
    >
      <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']} style={styles.gradient}>
        <View style={styles.name}>
          <Text style={[styles.text, { fontSize: 20 }]}>{profile.name}</Text>
          <OnlineStatus profile={profile} />
        </View>
        <Text numberOfLines={2} style={styles.text}>
          {profile.headline}
        </Text>
        <Text style={[styles.text, { color: 'lightgrey' }]}>
          {profile.location.distance / 1000} km
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const createStyles = (isOffline: boolean) => StyleSheet.create({
  tile:
  {
    aspectRatio: 1,
    flex: 1,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  gradient: {
    padding: 4,
  },
  name: {
    marginBottom: 12,
    display: "flex",
    flexDirection: isOffline ? "column" : "row",
    gap: isOffline ? 0 : 4,
    alignItems: isOffline ? "flex-start" : "center",
  },
});

export default User;
