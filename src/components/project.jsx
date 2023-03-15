
const Project = ({title, children, image=null, reverse=false}) => {
  return (
    <div className={`w-full flex flex-col items-center gap-8 pb-8 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="basis-1/2 flex flex-col items-start space-y-2">
        <div className="text-lg font-semibold">
          {title}
        </div>
          {children}
      </div>
      {image !== null ? 
        <div className="basis-1/2 w-full bg-gray-200 rounded-lg">
          <img src={image} />
        </div>
      : null
      }
    </div>
  );
}

export default Project;