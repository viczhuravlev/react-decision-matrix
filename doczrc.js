const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

export default {
  title: 'React Decision Matrix',
  menu: ['Getting Started', 'Components'],
  dest: '/docs',
  base: isProduction ? '/react-decision-matrix/' : '/',
  typescript: true,
  port: 8888,
  themeConfig: {
    showMarkdownEditButton: false,
    showPlaygroundEditor: false,
    showDarkModeSwitch: false,
    colors: {
      primary: '#03a9f4'
    }
  }
};
