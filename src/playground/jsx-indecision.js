console.log('app.js is running');

const app = {
  title: 'Indecision App!!!',
  subtitle: 'This is some info',
  options: []
};

const clearItems = () => {
  app.options = [];
  renderAgain();
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderAgain();
  }
};

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderAgain = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled= {app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
      <button onClick={clearItems}>Clear options</button>

      {app.options.length > 0 && (
        <ol>
          {app.options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ol>
      )}

      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderAgain();
