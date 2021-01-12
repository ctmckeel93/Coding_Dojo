
import './App.css';
import {useState} from 'react'
import Tabheader from "./components/Tabheader"
function App() {

    const [tab, setTab] = useState([
        {
            index: 0,
            title: "Tab 1",
            content: "This is the first tab",
            selected: true
        },

        {
            index: 1,
            title: "Tab 2",
            content: "This is the second tab",
            selected: false
        },

        {
            index: 2,
            title: "Tab 3",
            content: "This is the third tab",
            selected: false
        }]
        
    )

    const clickedHandler = item => {
      const editTab = tab[item]
      const myTabs = [...tab]
      myTabs.forEach((item,i) => item.selected = false)
      editTab.selected = true
      setTab([...tab.slice(0,item), editTab, ...tab.slice(item+1)])
    }
  return (
    
    <div className="App">
      {
      tab.map(item => {
      return <Tabheader tabItem={item} isClicked={ clickedHandler }/>
      })
      }

      {
        tab.map((t, i) => {
          return t.selected ? <h3>{t.content}</h3> : ""
        })
      }
      
    </div>
    
    
  );
}

export default App;
