const button = document.getElementById('generate');
const textIn = document.getElementById('in');
const textOu = document.getElementById('out');

button.onclick = event => {
  const value = textIn.value;
  const array = value.split('\n');
  const code = [];

  array.forEach(string => {
    const newString = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    code.push(`<code>${newString} </code>`);
  });

  textOu.value = code.join('\n');
};
