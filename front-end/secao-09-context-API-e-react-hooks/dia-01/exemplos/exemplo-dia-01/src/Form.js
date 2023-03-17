import React, { useState } from 'react';


function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <form>
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={({target}) => setName(target.value)}
          />
        </label>

        <label htmlFor="age">
          Idade
          <input
            type="number"
            id="age"
            name="age"
            value={ age }
            onChange={({target}) => setAge(target.value)}
            />
        </label>

        <label htmlFor="city">
          Cidade
          <input
            type="text"
            id="city"
            name="city"
            value={ city }
            onChange={({target}) => setCity(target.value)}
            />
        </label>
      </fieldset>
      <label htmlFor="module">
        Modulo
        <input
          type="radio"
          id="module"
          name="module"
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={({target}) => setModule(target.value)}
        />
        Fundamentos
        <input
          type="radio"
          id="module"
          name="module"
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({target}) => setModule(target.value)}
        />
        Front-end
        <input
          type="radio"
          id="module"
          name="module"
          value="Back-end"
          checked={module === 'Back-end'}
          onChange={({target}) => setModule(target.value)}
        />
        Back-end
        <input
          type="radio"
          id="module"
          name="module"
          value="CienciaDaComputacao"
          checked={module === 'CienciaDaComputacao'}
          onChange={({target}) => setModule(target.value)}
        />
        Ciencia da Computacao
      </label>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log(name, age, city);
        }}
      >
        Enviar
      </button>
    </form>
   );
}

export default Form;