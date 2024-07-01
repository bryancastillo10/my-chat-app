export interface HobbyOption {
  label: string;
  value: string;
}
const fetchHobbyOptions = async (): Promise<HobbyOption[]> => {
    try {
        const res = await fetch(`/api/profileinfo/hobby-options`);
        if (!res.ok) {
            throw new Error("Failed to fetch the hobby options");
        }
        const data: HobbyOption[] = await res.json();
        return data;
    } catch (error) {
        console.error("Something went wrong on fetching hobby options", error);
        return [];
    }
}

export default fetchHobbyOptions;