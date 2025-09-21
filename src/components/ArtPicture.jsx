import Title from "./Title";
import Image from "./Image";
import Paragraph from "./Paragraph";
import MyButton from "./MyButton";

function ArtPicture({ picture }) {
  const { paintingName, imgURL, author, authorDescription } = picture;

  return (
    <article>
      <Title>{paintingName}</Title>
      <Image imgURL={imgURL} paintingName={paintingName} />
      <Paragraph>Author: {author}</Paragraph>
      <MyButton authorDescription={authorDescription}>{author}</MyButton>
    </article>
  );
}
export default ArtPicture;
