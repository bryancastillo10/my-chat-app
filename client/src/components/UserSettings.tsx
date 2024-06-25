import { LucideIcon } from "lucide-react";


interface UserSettingsProps{
    icon: LucideIcon;
    label: string;
    onClick: () => void;
}

const UserSettings = ({label,onClick,icon:Icon}:UserSettingsProps) => {
  return (
      <div
        className="px-4 py-2 text-white/80 font-semibold hover:bg-amber-500/80 rounded-xl transition duration-500 ease-out "
          onClick={onClick}>
          <div className="flex items-center gap-4">
            <Icon/>
            <p className="text-center">{label}</p>
          </div>
        <div className="divider my-0 py-0"/>
    </div>
  )
}

export default UserSettings;
