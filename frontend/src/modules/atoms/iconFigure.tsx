type TIconFigure = {
  figureClassName?: string;
  src: string;
  alt?: string;
};
export const IconFigure = ({ figureClassName, src, alt = '' }: TIconFigure) => {
  return (
    <figure className={figureClassName}>
      <img src={src} alt={alt} />
    </figure>
  );
};
