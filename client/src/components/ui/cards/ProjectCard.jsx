

const ProjectCard = ({image, title, description}) => 
{
  return (
    <>
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
          src={image}
          width={500}
          height={300}
          alt={title}
          layout="responsive"
          className="rounded-lg"/>
      </div>
          
      <div className="p-6 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>


      </div>
    </>
  )
}

export default ProjectCard