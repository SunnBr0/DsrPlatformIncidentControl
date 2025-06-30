import addMetric from '../../assets/addMetric.svg';
import { IconFigure } from '../atoms/iconFigure';
import { local } from '../lang/lang';
import { ButtonClick } from '../atoms/buttonClick';

export const AddMetric = () => {
  return (
    <article className="metric-add">
      <IconFigure figureClassName="metric-add__figure" src={addMetric} />
      <p>{local.userProfile.metric.add.title}</p>
      <ButtonClick buttonClassName="metric-add__button">
        {local.userProfile.metric.add.button}
      </ButtonClick>
    </article>
  );
};
