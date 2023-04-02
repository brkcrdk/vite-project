import { useMemo, useState } from 'react';

import './App.scss';
import data from '../dummyData.json';

import { SearchInput, ResultCard } from './components';

function App() {
  const [value, setValue] = useState('');

  const filteredResults = useMemo(() => {
    return data.filter(val => val.name.toLowerCase().includes(value.toLowerCase()) || val.policyId.includes(value));
  }, [value]);

  return (
    <header className="header">
      <SearchInput
        onChange={e => setValue(e.target.value)}
        value={value}
        placeholder="SEARCH (Client Name / Policy Number)"
      />
      {value && (
        <nav className="navigation">
          <ul>
            {filteredResults.map((val, index) => (
              <li key={val.policyId}>
                <ResultCard
                  isDark={index % 2 === 0}
                  person={val}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default App;
