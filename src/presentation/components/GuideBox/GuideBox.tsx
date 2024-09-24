import { GuideBoxContainer } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import star from '@/presentation/assets/star.png';

interface IGuideBoxProps {
  image: string;
  location: string;
  title: string;
  lowestTourPrice: number;
  score: number;
  profileUrl: string;
}

export const GuideBox: React.FC<IGuideBoxProps> = ({
  image,
  location,
  title,
  lowestTourPrice,
  score,
  profileUrl,
}) => {
  return (
    <Link href={profileUrl}>
      <GuideBoxContainer.Container>
        <GuideBoxContainer.Content>
          <Image src={image} alt={title} width={150} height={200} />
          <GuideBoxContainer.Description>
            <span>{location}</span>
            <div>
              <h1>{title}</h1>
              <p>{`A partir de R$ ${lowestTourPrice.toFixed(2)}`}</p>
              <small>
                {score.toFixed(1)}{' '}
                <Image src={star} alt="star" width={10} height={10} />
              </small>
            </div>
          </GuideBoxContainer.Description>
        </GuideBoxContainer.Content>
      </GuideBoxContainer.Container>
    </Link>
  );
};
