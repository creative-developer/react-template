import { Colors } from '~/styles/colors';

type CSSProperties = Required<React.CSSProperties>;

export type CustomColors = {
  [Property in keyof typeof Colors]: CSSProperties['color'];
};
