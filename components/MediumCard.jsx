import Image from "next/image"

const MediumCard = ({img, title}) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
        <div className="relative h-80 w-80">
        <Image  src={img} layout='fill' className="rounded-xl" alt="live anywhere"/>
        </div>
<h3 className="text-2xl mt-3 text-black">{title}</h3>
    </div>
  )
}

export default MediumCard