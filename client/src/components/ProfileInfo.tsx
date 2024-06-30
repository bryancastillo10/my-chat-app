import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { Edit3 } from "lucide-react";
import Button from "./Button";
import FieldInput from "./FieldInput";
import { UpdateNameParams } from "../hooks/useUpdateNames";

interface ProfileInfoProps{
    label: string;
    value: string;
    loading: boolean;
    updateAction: (params: UpdateNameParams) => void;
    field: 'username' | 'fullName';
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
        <div className="flex gap-4 p-1 ">
        <div className="relative flex items-end gap-4 min-w-fit p-2">
            <label>{label}</label>
            <span className="cursor-pointer" onClick={toggleEdit}><Edit3 size="14" /></span>
        </div>
       {openEdit && (<form className="absolute left-20 z-50  w-[300px]
         bg-slate-700/80 rounded-2xl p-1
         flex items-center gap-2 " onSubmit={handleUpdate}>
                <div className="mb-4">
                <FieldInput
                id={label}
                value={newValue}
                onChange={handleInput}  
                type="text"      
                />
            </div>
                <div className="flex flex-col items-center gap-2">
                <Button
                    disabled={loading}
                    type="submit"
                    variant="update"
                >
                    Update
                </Button>
                <Button
                    type="button"
                    action={toggleEdit}
                    variant="cancel-edit"
                >
                    Cancel
                    </Button>
                </div>
            </form>)}
        </div>
  )
}

export default ProfileInfo;
