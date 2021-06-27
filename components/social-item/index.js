const Item = ({ icon, label, href }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <div className="bg-gray-700 border-gray-500 hover:scale-101 transition  rounded-full w-min py-1 px-4 flex flex-row items-center gap-2">
        {icon && (
          <div className="w-5 h-5">
            <img className="w-full" src={icon} />
          </div>
        )}
        <p className="text-gray-200">{label}</p>
      </div>
    </a>
  );
};

export default Item;
