import { profileInfoData } from "../store/useUpdateProfileModal";
import formatDate from "../utils/formatDate";
interface ShowProfileInfoProps {
  information: profileInfoData;
  lastIndex: boolean;
}

const ShowProfileInfo = ({ information, lastIndex }: ShowProfileInfoProps) => {
  return (
    <div className="chat-bubble-accent rounded-xl my-4">
      {formatDate(information.birthday)}
      {information.motto}
      {lastIndex}
    </div>
  );
};

export default ShowProfileInfo;
