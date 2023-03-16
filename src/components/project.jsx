
const Project = ({title, children, image=null, reverse=false}) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center gap-8 pb-0 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      { image !== null ?
        <>
        <div className="basis-1/2 flex flex-col items-start space-y-2">
          <div className="text-lg font-semibold">
            {title}
          </div>
            {children}
        </div>
        <div className="basis-1/2 w-full bg-gray-200 rounded-lg">
          <img src={image} />
        </div>
        </>
      :
        <div className="md:w-4/5 lg:w-2/3 flex flex-col items-start space-y-2">
          <div className="text-lg font-semibold">
            {title}
          </div>
            {children}
        </div>
      }
    </div>
  );
}

export default Project;