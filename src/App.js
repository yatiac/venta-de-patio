import { useEffect, useState } from 'react';
import './App.css';
import Item from './Item';
import Airtable from 'airtable';
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const airTableToken = process.env.REACT_APP_AIRTABLE_TOKEN;
    const tableName = process.env.REACT_APP_AIRTABLE_TABLE_NAME;
    const base = new Airtable({ apiKey: airTableToken }).base(
      'appb38nBFQxOR03a9'
    );
    const fetch = async function () {
      const result = [];
      await base(tableName)
        .select({
          view: 'Grid view',
        })
        .firstPage(function (err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.get('Name'));
            const name = record.get('Name');
            const price = record.get('Price');
            const images = record.get('Image');
            result.push({ name, price, images });
          });
          setItems(result);
        });
    };
    fetch();
  }, []);
  return (
    <div className="App" style={{ margin: 0 }}>
      <header>
        <h1>Yatiac Vende</h1>
      </header>
      <div className="items">
        {items &&
          items.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              price={item.price}
              image={item.images.length > 0 ? item.images[0].url : ''}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
