var md = require('markdown-it')(),
    mk = require('@area403/markdown-it-mathjax');
    md.use(mk);

export default (content: string) => {
  if (typeof content !== 'string') return ''
  return  md.render(content)
}
