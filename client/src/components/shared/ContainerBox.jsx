
const ContainerBox = ({children}) => 
{
  return (
    <div className="max-w-full md:max-w-4xl lg:max-w-4xl xl:max-w-7xl mx-auto px-8 md:px-20 py-5 md:py-6 lg:py-6 xl:py-4">
      {children}
    </div>
  )
}

export default ContainerBox