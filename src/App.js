import React, {useState, useEffect} from 'react';
import tachyons from 'tachyons'
import './App.css';
import axios from 'axios'
import Recipe from './Recipe'
import Header from './Header'
import Footer from './Footer'
import cupcake from './cupcake.png'

const App = () => {
  const API_ID = 'd10d8742'
  const API_KEY = '22ea24374f2b1de2bd64b6e030c1d983'

  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const [excludeOne, setExcludeOne] = useState('')
  const [excludeTwo, setExcludeTwo] = useState('')
  const [excludeThree, setExcludeThree] = useState('')
  const [excludeFour, setExcludeFour] = useState('')
  const [excludeFive, setExcludeFive] = useState('')

  const [queryEx1, setQueryEx1] = useState('')
  const [queryEx2, setQueryEx2] = useState('')
  const [queryEx3, setQueryEx3] = useState('')
  const [queryEx4, setQueryEx4] = useState('')
  const [queryEx5, setQueryEx5] = useState('')

  useEffect(() =>{
    getRecipe()
  }, [query, queryEx1, queryEx2, queryEx3, queryEx4, queryEx5])

  const getRecipe = () =>{
    axios.get(`https://api.edamam.com/search?q=${query}&excluded=${queryEx1}&excluded=${queryEx2}&excluded=${queryEx3}&excluded=${queryEx4}&excluded=${queryEx5}app_id=${API_ID}&app_key=${API_KEY}`)
    .then(response => setRecipe(response.data.hits))
  }

  const getSearch = (event) =>{
    setSearch(event.target.value)
  }

  const getOne = (event) =>{
    setExcludeOne(event.target.value)
  }
  const getTwo = (event) =>{
    setExcludeTwo(event.target.value)
  }
  const getThree = (event) =>{
    setExcludeThree(event.target.value)
  }
  const getFour = (event) =>{
    setExcludeFour(event.target.value)
  }
  const getFive = (event) =>{
    setExcludeFive(event.target.value)
  }

  const updateChange = (event) =>{
    event.preventDefault()
    setQuery(search)
    setSearch('')
    setQueryEx1(excludeOne)
    setExcludeOne('')
    setQueryEx2(excludeTwo)
    setExcludeTwo('')
    setQueryEx3(excludeThree)
    setExcludeThree('')
    setQueryEx4(excludeFour)
    setExcludeFour('')
    setQueryEx5(excludeFive)
    setExcludeFive('')
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={updateChange}>
        <br />
        <div className="searchName col-6">
          <input type="text" className="br-pill serch p-2 pl-3 pr-3 col-10" value={search} onChange={getSearch} placeholder="Explore our collection of delicious recipes." />
          <button type="submit" className="br-pill pl-4 pr-4 pt-2 pb-2 text-white a">
            ➜
          </button><br /><br />
        </div>
        <div className="dropdown col-3">
          <button className="br-pill serch p-2 pl-3 pr-4 pl-4 text-white a">Add dietary restrictions</button>
          <div className="dropdown-content">
            <input type="text" className="serch p-2 pl-3 pr-3 col-12 roundedgetop" value={excludeOne} onChange={getOne} placeholder="Exclude recipes that include..." />
            <input type="text" className="serch p-2 pl-3 pr-3 col-12" value={excludeTwo} onChange={getTwo} placeholder="Exclude recipes that include..." />
            <input type="text" className="serch p-2 pl-3 pr-3 col-12" value={excludeThree} onChange={getThree} placeholder="Exclude recipes that include..." />
            <input type="text" className="serch p-2 pl-3 pr-3 col-12" value={excludeFour} onChange={getFour} placeholder="Exclude recipes that include..." />
            <input type="text" className="serch p-2 pl-3 pr-3 col-12 roundedgebottom" value={excludeFive} onChange={getFive} placeholder="Exclude recipes that include..." />
          </div>
        </div>
        <br /><br /><br /><br />
      </form>
      {recipe.map(e =>(
        <Recipe key={e.recipe.label} title={e.recipe.label} calories={e.recipe.calories} image={e.recipe.image} link={e.recipe.url} servings={e.recipe.yield} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
