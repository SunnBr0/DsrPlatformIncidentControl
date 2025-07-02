import type { PropsWithChildren } from 'react';

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
  children,
}: PropsWithChildren<TButtonIconProps>) => {
  return (
    <button className={buttonClassName}>
      {children}
      <figure className={figureClassName}>
        <img src={src} alt={alt} />
      </figure>
    </button>
  );
};
