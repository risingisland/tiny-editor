export const createButton = (commandId, title, children, clickHandler) => {
  const button = document.createElement('button');
  button.dataset.commandId = commandId;
  button.className = '__toolbar-item';
  button.title = title;
  button.insertAdjacentElement('afterbegin', children);
  button.addEventListener('click', () => clickHandler(commandId));

  return button;
};