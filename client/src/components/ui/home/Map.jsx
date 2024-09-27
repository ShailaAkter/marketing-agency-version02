import ContainerBox from "@/components/shared/ContainerBox"



const Map = () => {
  return (
    <ContainerBox>
      {/* Google Map Section */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full xl:h-96 h-56 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.919003661663!2d144.963280015604!3d-37.81400007975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774a1d03e7ab0!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1618372939335!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </ContainerBox>
  )
}

export default Map