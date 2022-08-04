import Post from "../../helpers/Post/Post"

const SecondSection = () => {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </section>
  )
}

export default SecondSection