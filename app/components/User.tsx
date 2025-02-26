import { ImageBackground, Text, StyleSheet } from "react-native";
import type { FullProfileSchema } from "../utils/schemas";
import type { z } from "zod";
import OnlineStatus from "./OnlineStatus";

const User = ({ profile }: { profile: z.infer<typeof FullProfileSchema> }) => {
  return (
    <ImageBackground
      source={{
        uri: profile.picture?.url ?? "https://placedog.net/500x500",
      }}
      style={styles.tile}
    >
	 <Text style={[styles.text, {marginBottom: 12, fontSize: 20}]}>{profile.name}</Text>
      <Text numberOfLines={2} style={styles.text}>
        {profile.headline}
      </Text>
      <Text style={styles.text}>
        {profile.location.distance / 1000} km
      </Text>
	  <OnlineStatus profile={profile} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
   tile: 
	{
        aspectRatio: 1,
        flex: 1,
        overflow: "hidden",
		justifyContent: "flex-end",
		padding: 4,
      },
  text: {
    color: "white",
	fontWeight: "bold",
  },
});

export default User;
