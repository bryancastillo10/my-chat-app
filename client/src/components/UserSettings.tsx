import { LucideIcon } from "lucide-react";

interface UserSettingsProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  loading?: boolean;
}

const UserSettings = ({
  label,
  onClick,
  icon: Icon,
  loading,
}: UserSettingsProps) => {
  return (
    <div
      className="px-4 py-2
       text-white/80 font-semibold hover:bg-amber-500/80 rounded-xl transition duration-500 ease-out "
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        {loading ? <span className="loading loading-spinner"></span> : <Icon />}
        <p className="text-center">{label}</p>
      </div>
      <div className="divider my-0 py-0" />
    </div>
  );
};

export default UserSettings;
