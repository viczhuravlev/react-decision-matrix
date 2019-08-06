const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

export default {
  title: 'React Decision Matrix',
  menu: ['Getting Started', 'Components'],
  dest: '/docs',
  base: isProduction ? '/react-decision-matrix/' : '/',
  typescript: true,
  codeSandbox: true,
  notUseSpecifiers: true,
  // filterComponents: files => files.filter(file => /([^d]\.tsx?)$/.test(file)),
  port: 8888,
  themeConfig: {
    colors: {
      primary: '#03a9f4'
    }
  },
}
