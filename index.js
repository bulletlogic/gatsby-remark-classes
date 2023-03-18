import { selectAll } from 'unist-util-select';

const applyClassesToNode = (node, classes) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.data.hProperties.className.push(classes);

  return node;
};

export default ({ markdownAST }, { classMap = {} }) => {
  Object.keys(classMap).forEach((selector) => {
    const nodes = selectAll(selector, markdownAST);

    nodes.forEach((node) => {
      node = applyClassesToNode(node, classMap[selector]);
    });
  });
};
