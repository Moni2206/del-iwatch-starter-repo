import Button from "./Button";

const Text = () => {
  return (
    <div>
      <div className="max-w-xl ">
        <h1 className=" text-2xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white leading-tight">The Perfect Moment</h1>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black/70 dark:text-white/80 mt-4">Between Past And Future.</h2>
      </div>
      <Button />
    </div>
  );
};

export default Text;
