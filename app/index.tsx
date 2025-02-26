import { Text, View } from "react-native";

export default function Index() {
fetch('http://127.0.0.1:3000/api/search').then(res=>console.log(res.json())).catch(err=>console.log(err))


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
