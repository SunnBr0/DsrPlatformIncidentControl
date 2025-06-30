type TButtonIconProps = {
  buttonClassName: string;
  figureClassName: string;
  src: string;
  alt?: string;
};

export const ButtonIcon = ({
  buttonClassName,
  figureClassName,
  src,
  alt = '',
}: TButtonIconProps) => {
  return (
    <button className={buttonClassName}>
      <figure className={figureClassName}>
        <img src={src} alt={alt} />
      </figure>
    </button>
  );
};
