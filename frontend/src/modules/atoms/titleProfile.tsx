type TTitleProfile={
  header:string,
  className:string,
  title:string,
  placeWork:string,
}

export const TitleProfile = ({header,title,placeWork,className}:TTitleProfile) => {
  return (
    <section className={className}>
      <h2>{header}</h2>
      <p>{title} {placeWork}</p>
    </section>
  );
};
