import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "rgb(0, 189, 255)",
    },
  }}>
    <Stack.Screen name="index" options={{
      title: "Romeo",
    }} />
  </Stack>;
}
