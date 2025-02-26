import { ImageBackground, Text, View } from "react-native";
import type { FullProfileSchema } from "../utils/schemas";
import type { z } from "zod";

const User = ({ profile }: { profile: z.infer<typeof FullProfileSchema> }) => {
	return (
		<ImageBackground
			source={{
				uri: profile.picture?.url ?? "https://placedog.net/500x500",
			}}
			style={{
				aspectRatio: 1,
				flex: 1,
				overflow: "hidden",
			}}
		>
			<Text
				style={{
					color: "white",
				}}
			>
				{profile.name}
			</Text>
		</ImageBackground>
	);
};

export default User;
