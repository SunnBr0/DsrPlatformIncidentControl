import addMetric from '../../../assets/main/userProfile/addMetric.svg';
import { IconFigure } from '../../atoms/iconFigure';
import { local } from '../../lang/lang';
import { ButtonClick } from '../../atoms/button/buttonClick';

type TAddMetric ={
  onClick:()=>void;
}

export const AddMetric = ({onClick}:TAddMetric) => {
  return (
    <article className="metric-add">
      <IconFigure figureClassName="metric-add__figure" src={addMetric} />
      <p>{local.userProfile.metric.add.title}</p>
      <ButtonClick onClick={onClick} buttonClassName="metric-add__button">
        {local.userProfile.metric.add.button}
      </ButtonClick>
    </article>
  );
};
