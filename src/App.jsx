
import Chat from './components/Chat'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SideComponent from './components/SideComponent'
function App() {

  return (
    <div className='' >
      <div className='sm:mr-0'>
      <Header />
      <SearchBar />
      <Chat name="Nikhil" message="HI how are you" />
      <Chat name="Parvez" message="what are you dng" />
      <Chat name="Anil" message="Hello My name is something" />
      <Chat name="Vishnu" message="Where are you??" />
      <Chat name="Nikhil" message="HI how are you" />
      <Chat name="Parvez" message="what are you dng" />
      <Chat name="Anil" message="Hello My name is something" />
      <Chat name="Vishnu" message="Where are you??" />
      <Chat name="Nikhil" message="HI how are you" />
      </div>

    </div>
  )
}

export default App
