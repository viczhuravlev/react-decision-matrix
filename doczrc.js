const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

export default {
  typescript: true,
  title: 'React Decision Matrix',
  menu: ['Getting Started', 'Components'],
  dest: '/docs',
  base: isProduction ? '/react-decision-matrix/' : '/',
}
