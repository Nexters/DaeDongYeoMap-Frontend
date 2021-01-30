import AreaEmoji from './AreaEmoji';
import AreaFilter from './AreaFilter';
import AreaForm from './AreaForm';
import Title from './Title';
import * as $ from './SpotGeneratorView';
import type { PopupChildProps } from '~/@types/popup.d';

export type Props = PopupChildProps & {
  placeId: string;
};

const SpotGenerator: React.FC<Props> = ({
  placeId,
  zIndex,
  onClickCloseButton,
}) => {
  console.log(placeId);

  return (
    <$.SpotGenerator zIndex={zIndex}>
      <Title onClickCloseButton={onClickCloseButton} />
      <$.Inner>
        <$.AreaText>
          <$.HelpTitle>스티커를 원하는 장소에 붙여보세요</$.HelpTitle>
          <$.HelpText>
            무드 탭을 선택해 스티커로 장소의 무드를 표현해보세요
          </$.HelpText>
        </$.AreaText>
        <AreaFilter />
        <AreaEmoji />
        <AreaForm />
      </$.Inner>
    </$.SpotGenerator>
  );
};

export default SpotGenerator;
