function createElement(type, props = {}, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.flat().map(child =>
          typeof child === 'object'
            ? child
            : createTextElement(child)
        )
      }
    };
  }
  
  function createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    };
  }
  
  // Example usage:
  const vdom = createElement(
    'div',
    { id: 'container' },
    createElement('h1', null, 'Hello, Virtual DOM!'),
    createElement('p', null, 'This is a paragraph.')
  );
  
  console.log(vdom);
  