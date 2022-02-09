import profile from "../images/image-jeremy.png";

const Profile = ({ display, setDisplay }) => {
  const displayData = ["weekly", "monthly", "daily"];
  return (
    <header className="md:row-span-2 row-span-1 rounded-xl bg-secondary-200 overflow-hidden">
      <div className="bg-primary text-white p-4 rounded-x md:block flex justify-between items-center ">
        <img
          src={profile}
          className="border-4 h-16 w-auto border-zinc-50 rounded-full"
          alt=""
        />
        <div className="md:my-7">
          <p className="text-xs text-secondary-50">Report for</p>
          <h2 className="text-3xl">Jeremy Robson</h2>
        </div>
      </div>
      <div className="m-4 text-secondary-50 flex justify-between md:block">
        {displayData.map((data) => (
          <p
            key={data}
            className={
              display === data
                ? "cursor-pointer capitalize text-white"
                : "cursor-pointer capitalize"
            }
            id={data}
            onClick={(e) => {
              setDisplay(e.target.id);
            }}
          >
            {data}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Profile;
