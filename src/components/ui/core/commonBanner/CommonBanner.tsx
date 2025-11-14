import style from "./CommonBanner.module.css";
const CommonBanner = ({heading, subHeading}:{heading:string,subHeading:string}) => {
  return <div className={`${style.banner} h-70 flex flex-col items-center justify-center` }>

<div className="w-xl text-center space-y-4">
    <h1 className="text-3xl font-bold ">
   {heading}
</h1>
<p>{subHeading}</p>
</div>

  </div>;
};

export default CommonBanner;
