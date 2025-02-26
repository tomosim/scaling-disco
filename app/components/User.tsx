import { ImageBackground, Text, View } from "react-native"
import { FullProfileSchema } from "../schemas"
import { z } from "zod"



const User = (profile: z.infer<typeof FullProfileSchema>) => {
    return <View>
        <ImageBackground source={{uri: profile.picture.url}} />
        <Text>{profile.name}</Text>
    </View>
}

export default User