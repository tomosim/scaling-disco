import useProfiles from "../useProfiles";
import User from "./User";

const UserList = () => {
  const { profiles } = useProfiles();

  return profiles?.map((profile) => (
    <User
      key={profile.id}
      {...profile}
    />
  ));
};
