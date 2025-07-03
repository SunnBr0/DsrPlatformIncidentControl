type TTitleText={
  header:string,
  className:string,
  title:string,
  placeWork?:string,
}

export const TitleText = ({header,title,placeWork,className}:TTitleText) => {
  return (
    <section className={className}>
      <h2>{header}</h2>
      <p>{title} {placeWork}</p>
    </section>
  );
};
