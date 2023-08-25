import { FC } from "react";


interface ViewerAvatarProps {
  image?: string;
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  title?: string
}

const ViewerAvatar: FC<ViewerAvatarProps> = ({size='sm', image, onClick, title}) => {

  return (
    <picture>
    <img src={image} alt={title} />
    </picture>
  );
};

export { ViewerAvatar };