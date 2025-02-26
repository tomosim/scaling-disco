import { useEffect, useState } from "react";
import { FullProfileSchema, ProfileSchema, SearchSchema, PaginationStructureSchema } from "./schemas";
import z from "zod";

const SearchResponseSchema = PaginationStructureSchema.extend({items: SearchSchema.array()})
const ProfileResponseSchema = z.array(ProfileSchema)

const useProfiles = () => {
    const [profiles, setProfiles] = useState<z.infer<typeof FullProfileSchema>[]>();

    useEffect(() => {

    const fetchProfiles = async () =>
    {
        try {
            const searchResponse = await fetch('http://127.0.0.1:3000/api/search');
            const searchData = SearchResponseSchema.parse(await searchResponse.json()).items;

            

            const ids = searchData.map((item) => item.id);

const profilesURL = `http://127.0.0.1:3000/api/profiles?${ids.map(el=>`ids=${el}`).join('&')}`

            const profilesResponse = await fetch(profilesURL)

            const profilesData = ProfileResponseSchema.parse(await profilesResponse.json())

            const mergedById = searchData.map((item) => {
                const profile = profilesData.find((p) => p.id === item.id);
                if (profile === undefined) {
                    throw new Error("Profile not found");
                }
                return { ...item, ...profile };
              });


              setProfiles(mergedById);


          } catch (error) {
            console.error(error);
          }
    }
       
    
    }, [])

    return {
        profiles,
    };
};

export default useProfiles;