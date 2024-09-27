import {Grid} from "react-loader-spinner"

const Loader = () => 
{
  return (
    <div
    className="flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center opacity-50">
          <Grid
            height={100}
            width={200}
            radius={10}
            color="gray"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}/>
        </div>
      </div>
  </div>
  )
}

export default Loader