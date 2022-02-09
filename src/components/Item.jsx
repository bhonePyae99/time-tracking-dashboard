import work from "../images/icon-work.svg";
import ellipsis from "../images/icon-ellipsis.svg";

const Item = ({ itemData, display }) => {
  let bgColor = "bg-work";
  let previousDisplayString = `Last Week - ${itemData.timeframes.weekly.previous}hrs`;
  let currentDisplayString = itemData.timeframes.weekly.current + "hrs";
  switch (itemData.title.toLowerCase()) {
    case "work":
      bgColor = "bg-work";
      break;
    case "play":
      bgColor = "bg-play";
      break;
    case "study":
      bgColor = "bg-study";
      break;
    case "exercise":
      bgColor = "bg-exercise";
      break;
    case "social":
      bgColor = "bg-social";
      break;
    case "self care":
      bgColor = "bg-selfCare";
      break;
    default:
      bgColor = "bg-work";
  }
  if (display === "daily") {
    currentDisplayString = itemData.timeframes.daily.current + "hrs";
    previousDisplayString = `Last Day - ${itemData.timeframes.daily.previous}hrs`;
  } else if (display === "monthly") {
    currentDisplayString = itemData.timeframes.monthly.current + "hrs";
    previousDisplayString = `Last Month - ${itemData.timeframes.monthly.previous}hrs`;
  } else {
    currentDisplayString = itemData.timeframes.weekly.current + "hrs";
    previousDisplayString = `Last Week - ${itemData.timeframes.weekly.previous}hrs`;
  }
  return (
    <div className={"rounded-xl overflow-hidden " + bgColor}>
      <div className="flex justify-end overflow-hidden">
        <img src={work} alt="" className="md:w-12 w-16 h-auto mr-2 -my-2" />
      </div>
      <div className="bg-secondary-200 hover:bg-secondary-100 w-full text-white p-3 rounded-t-xl">
        <div className="flex justify-between items-center">
          <small>{itemData.title}</small>
          <img src={ellipsis} className="h-1 cursor-pointer" alt="" />
        </div>
        <h2 className="text-4xl mt-4">{currentDisplayString}</h2>
        <p className="text-xs my-3 text-secondary-50">
          {previousDisplayString}
        </p>
      </div>
    </div>
  );
};

export default Item;
