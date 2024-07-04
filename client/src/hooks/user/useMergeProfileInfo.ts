import { userData } from "../../store/useConversation";
import { profileInfoData } from "../../store/useUpdateProfileModal";
import useGetConversations from "../messages/useGetConversations";
import useGetAllProfileInfo from "./useGetAllProfileInfo";

export type MergedProfileInfo = Omit<
  NonNullable<userData>,
  "profileInfo" | "__v" | "createdAt" | "updatedAt"
> & {
  profileInfo: profileInfoData;
};

const useMergeProfileInfo = () => {
  const { conversations } = useGetConversations();
  const { allProfileInfo } = useGetAllProfileInfo();

  const mergeProfileInfo: MergedProfileInfo[] = conversations
    .filter((convo): convo is NonNullable<userData> => convo !== null)
    .map((convo) => {
      const profileInfo = allProfileInfo.find(
        (info) => info._id === convo.profileInfo
      );

      if (!profileInfo) {
        throw new Error(`Profile info not found for those users ${convo._id}`);
      }

      return {
        _id: convo._id,
        fullName: convo.fullName,
        gender: convo.gender,
        profilePic: convo.profilePic,
        username: convo.username,
        profileInfo: profileInfo,
      };
    });

  return mergeProfileInfo;
};

export default useMergeProfileInfo;
