import useProfiles from "../useProfiles"
import User from "./User"

const UserList = () => {
    const {profiles} = useProfiles()

    return profiles.map(profiles => <User key={profiles.id} {...profiles}/>)
}