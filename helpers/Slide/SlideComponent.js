import Image from "next/image";
import Link from "next/link";
import Author from "../../components/_child/Author";

const SlideComponent = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image
              src={"/image/Characters/Character02.svg"}
              width={600}
              height={600}
              alt=""
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-500 hover:text-gray-400"> - July 3, 2022</a>
          </Link>
        </div>

        <div className="title">
          <Link href={"/"}>
            <a className="text-4xl md:text-6xl font-bold text-gray-200 hover:text-gray-700">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>

        <p className="text-gray-400 py-3">
          My name is Nicholas. I am 25 years old. I am a Ghanaian by birth. I
          work at Amalitech gGmbh. I am a Frontend Developer by profession
        </p>

        <Author></Author>
      </div>
    </div>
  );
};

export default SlideComponent;
