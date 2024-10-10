export const Hero = (props: any) => {
  return (
    <section>
      <h1>{props.blok.headline}</h1>
      <p>{props.blok.content}</p>
    </section>
  );
};