import { useCallback, useState } from "react";
import { PencilLine } from "lucide-react";
import { Button, FieldInput } from "../../components";

interface NamesProps{
    fullName: string;
    userName?: string;
}
// userName: initialUserName
const Names = ({fullName:initialFullName}:NamesProps) => {
    const [fullName, setFullName] = useState<string>(initialFullName);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const handleClick = useCallback(() => {
        setOpenEdit(!openEdit);
    },[openEdit])
    
   return (
  <>
    <article className="flex items-center gap-2">
        <p className="font-bold">Full Name:</p>
        <p>{initialFullName}</p>

        <div onClick={handleClick} className="flex flex-col cursor-pointer">        
            <PencilLine size="18" />
            </div>
           </article>
           {openEdit && (
               <form>
                <FieldInput
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value) }}
                    textLabel="Change Full Name"
               />
               <Button type="submit" action={()=>{}} >Update</Button>
                </form>
                   )}
    {/* <article className="flex items-center gap-2">
        <p className="font-bold">Username:</p>
        <p>{userName}</p>
        <div>
            <PencilLine size="18" />
        </div>
    </article> */}
  </>
  )
}

export default Names;
