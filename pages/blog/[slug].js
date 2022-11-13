import { useRouter } from "next/router";
import Error from "next/error";
import Layout from "../../components/Layout";

const data = [{
  slug: "yazi1",
  title: "Yazı 111",
  text: `1 It is a long established fact that a reader will be distracted by the
  readable content of a page when looking at its layout. The point of using
  Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
  opposed to using 'Content here, content here', making it look like readable
  English. Many desktop publishing packages and web page editors now use Lorem
  Ipsum as their default model text, and a search for 'lorem ipsum' will
  uncover many web sites still in their infancy. Various versions have evolved
  over the years, sometimes by accident, sometimes on purpose`
  },
  {
    slug: "yazi2",
    title: "Yazı 222",
    text: `2 It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English. Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem ipsum' will
    uncover many web sites still in their infancy. Various versions have evolved
    over the years, sometimes by accident, sometimes on purpose`
  }
]

export default () => {
  const router = useRouter()
  const {slug} = router.query
  let outcome = data.find((dataItem) =>  dataItem.slug === slug);

  if (!outcome) {
    return <Error statusCode={404} />
  }

  return (
    <Layout title={outcome?.title}>
    <h3>slug: {slug}</h3>
    <p>{outcome?.text}</p>
  </Layout>
  )
};