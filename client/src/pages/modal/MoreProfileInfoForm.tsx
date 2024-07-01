import { Button,FieldInput, FieldSelect } from "../../components";

const MoreProfileInfoForm = () => {
  return (
     <div className="absolute z-10 border-none bg-slate-500/40 rounded-xl p-4">
          <h1>Share more information about you</h1>
          <form className="flex flex-col gap-2">
            <div className="flex gap-4">
              <FieldInput
                textLabel="Birthday"
                id="birthday"
                value="birthday"
                type="date"
                onChange={() => {}}
              />
              <FieldInput
                textLabel="Motto"
                id="motto"
                value=" "
                type="text"
                onChange={() => {}}
              />
            </div>
            <FieldSelect
              // textLabel="Hobbies"
              // id="hobbies"
              // value="hobbies"
              // type="text"
              // onChange={() => {}}
            />
            <Button type="submit" variant="accept">
              Add Profile Info
            </Button>
          </form>
        </div>
  )
}

export default MoreProfileInfoForm;
