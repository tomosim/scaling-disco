import { FlatList } from "react-native";
import useProfiles from "../hooks/useProfiles";
import User from "./User";

const UserList = () => {
	const { profiles } = useProfiles();

	return (
		<FlatList
			numColumns={2}
			data={profiles}
			renderItem={({ item }) => {
				return <User profile={item} />;
			}}
		/>
	);
};

export default UserList;
