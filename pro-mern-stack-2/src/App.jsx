const continents = ['Africa', 'Antarctica', 'Asia', 'Australia', 'North America', 'South America'];
const helloContinents = Array.from(continents, c => `Hello ${c}`);
const continentsList = helloContinents.map(hc => <li key={hc}>{hc}</li>);
const continentsElem = (
    <div title="helloDiv" className="colorBlue">
        <h1>Hello to the {helloContinents.length} Continents</h1>
        <br></br>
        <ul>
            {continentsList}
        </ul>
    </div>
);
ReactDOM.render(continentsElem, document.getElementById('root'));