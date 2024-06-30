import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { Edit3, Check,X } from "lucide-react";
import Button from "./Button";
import FieldInput from "./FieldInput";
import { UpdateNameParams } from "../hooks/useUpdateNames";

interface ProfileInfoProps{
    label: string;
    value: string;
    loading?: boolean;
    updateAction: (params: UpdateNameParams) => void;
    field: 'username' | 'fullName'| 'birthday'| 'hobbies' | 'motto';
}

const ProfileInfo = ({label,value,loading,updateAction,field}:ProfileInfoProps) => {
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [newValue, setNewValue] = useState<string>(value);

    const toggleEdit = useCallback(() => {
        setOpenEdit(!openEdit);
    }, [openEdit]);



    const handleUpdate = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updateParams: UpdateNameParams = { [field]: newValue };
        updateAction(updateParams);
        toggleEdit();
    }, [updateAction,newValue, field, toggleEdit]);

    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
    }, []);

    return (
        <div className="flex ">
        <div className="relative flex items-end gap-2 min-w-fit p-2">
            <div className="flex flex-col gap-0">
                <label className="text-sm">{label}</label>
                <p className="font-bold">{value}</p>
            </div>        
            <span className="cursor-pointer hover:text-amber-500" onClick={toggleEdit}><Edit3 size="14" /></span>
        </div>
       {openEdit && (<form className="absolute left-28 z-50  w-[300px]
         bg-slate-700/80 rounded-2xl p-1
         flex items-center gap-2" onSubmit={handleUpdate}>
                <div className="flex px-1 py-2">
                <FieldInput
                id={label}
                value={newValue}
                onChange={handleInput}  
                type="text"      
                />
            </div>
                <div className="flex items-center gap-1 px-1 py-2">
                <Button
                    disabled={loading}
                    type="submit"
                    variant="update"
                >
                    <Check size="14" />
                </Button>
                <Button
                    type="button"
                    action={toggleEdit}
                    variant="cancel-edit"
                >
                    <X size="14"/>
                    </Button>
                </div>
            </form>)}
        </div>
  )
}

export default ProfileInfo;
