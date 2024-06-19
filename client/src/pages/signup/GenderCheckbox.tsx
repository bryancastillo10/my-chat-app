const GenderCheckbox = () => {
  return (
    <div className="flex justify-start gap-6">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <input
            type="checkbox"
            className="checkbox checkbox-warning border-slate-900"
          />
          <span className="label-text text-amber-500">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <input
            type="checkbox"
            className="checkbox checkbox-warning border-slate-900"
          />
          <span className="label-text text-amber-500">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
