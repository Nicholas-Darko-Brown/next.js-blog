import Link from "next/link";
import Image from "next/image";
import Author from "../../components/_child/Author";

const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              className="rounded"
              src={"/image/Characters/Character04.svg"}
              width={500}
              height={400}
              alt="" 
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
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
            <a className="text-xl md:text-xl font-bold text-gray-200 hover:text-gray-700">
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

export default Post;
