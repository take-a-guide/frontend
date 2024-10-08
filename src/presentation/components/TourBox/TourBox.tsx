import { StaticImageData } from 'next/image';
import { TourBoxStyles } from './styles';
import Image from 'next/image';
import Link from 'next/link';

interface ITourBoxProps {
  category: string;
  image: StaticImageData;
  url: string;
}

export const TourBox: React.FC<ITourBoxProps> = ({ category, image, url }) => {
  return (
    <Link href={url}>
      <TourBoxStyles.Container>
        <Image src={image} alt="Tours" />
        <TourBoxStyles.RightSide>
          <span>
            {category}
            <p>
              Passeios urbanos, conheça a cidade de uma forma diferente conheça
              a cidade de uma forma diferente. conheça a cidade de uma forma
              diferente.
            </p>
          </span>
        </TourBoxStyles.RightSide>
      </TourBoxStyles.Container>
    </Link>
  );
};
