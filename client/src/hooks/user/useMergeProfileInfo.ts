import { userData } from "../../store/useConversation";
import { profileInfoData } from "../../store/useUpdateProfileModal";
import useGetConversations from "../messages/useGetConversations";
import useGetAllProfileInfo from "./useGetAllProfileInfo";

const useMergeProfileInfo = () => {
  const { conversations } = useGetConversations();
  const { allProfileInfo } = useGetAllProfileInfo();

  const mergeProfileInfo = conversations.map((convo: userData) => {
    const profileInfo = allProfileInfo.find(
      (info: profileInfoData) => info._id === convo?.profileInfo
    );
    return { ...convo, profileInfo };
  });
  return { mergeProfileInfo };
};

export default useMergeProfileInfo;
