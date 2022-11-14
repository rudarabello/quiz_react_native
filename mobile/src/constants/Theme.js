import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  Branco: '#FFFFFF',
  Cinza_claro: '#EBEBEB',
  Cinza_escuro: '#676767',
  Verde: '#61E8A7',
  Vermelho: '#E86161',
  sucesso: '#00C851',
  erro: '#ff4444',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
export const STYLES = {
  heading: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  subHeading: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  body: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  quiz: {
    backgroundColor: COLORS.Cinza_claro,
    borderRadius: '4px',
    height: '67px',
  },
  completedQuiz: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: COLORS.Cinza_escuro,
    paddingLeft: 30,
    marginLeft: 20,
    height: 35,
    borderRadius: 4,
    width: 213,
  },
  items: {
    marginTop: 30,
  },
  item: {
    backgroundColor: COLORS.Cinza_claro,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circle: {
    backgroundColor: COLORS.Verde,
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 20,
    marginRight: 15,
  },
  itemText: {
    flexDirection: 'row',
    color: COLORS.Cinza_escuro,
  },
};
