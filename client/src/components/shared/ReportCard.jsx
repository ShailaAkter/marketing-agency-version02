
const ReportCard = ({title, content1, number1, content2, number2, bgColor}) => 
{
  const formattedTaskCount1 = number1 < 10 ? `0${number1.toLocaleString()}` : number1.toLocaleString();
  const formattedTaskCount2 = number2 < 10 ? `0${number2}` : number2;
  return (
    <div className={`rounded-2xl ${bgColor} py-5 px-4 flex-1 shadow-md shadow-secondary`} >
      <div className="flex mb-5 justify-start items-start gap-2">
        <h1 className="text-lg font-medium text-white">{title}</h1>
      </div>

      <div className="flex justify-between items-end">
        <div className='flex justify-start items-end gap-1'>
          <h2 className="text-4xl font-semibold text-white">{formattedTaskCount1}</h2>
          <h2 className="text-sm font-medium text-white">{content1}</h2>
        </div>

        <div className='flex justify-start items-end gap-1'>
          <h2 className="text-sm font-medium text-secondary-lighter">{formattedTaskCount2}</h2>
          <h2 className="text-sm font-light text-secondary-lighter">{content2}</h2>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
