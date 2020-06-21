module.exports = {
  template: template,
  svgProps: {
    fill: 'currentColor'
  },
  dimensions: false,
  svgoConfig: {
    plugins: []
  }
};

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
}
