import { Text, StyleSheet } from "react-native";
import type { FullProfileSchema } from "../utils/schemas";
import type { z } from "zod";
import { parseISO, formatDistanceToNow } from "date-fns";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const OnlineStatus = ({
  profile,
}: {
  profile: z.infer<typeof FullProfileSchema>;
}) => {
  const timePeriod = formatDistanceToNow(parseISO(profile.last_login));
  const time = `${timePeriod} ago`;

  if (profile.online_status === "OFFLINE") {
    return <Text style={styles.text}>{time}</Text>;
  }

  return <FontAwesome name="circle" size={16} color="greenyellow" />
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default OnlineStatus;
