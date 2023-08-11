import './CategoryBox.css'


const CategoryBox = ({label, iconUrl, isActive, onClick}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 opacity-75
       hover:opacity-100 cursor-pointer dark:text-white dark:opacity-50 ${
        isActive ? "active-category" : "not-active"
      }`}
      onClick={onClick}
    >
      <img className="w-8 dark:bg-slate-400 dark:text-white" src={iconUrl} alt="" />
      <div className="text-sm font-medium text-center">{label}</div>
    </div>
  );
}

export default CategoryBox;