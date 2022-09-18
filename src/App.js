import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost/AddPost';
import EditPost from './Components/EditPost/EditPost';
import FilterPost from './Components/FilterPost/FilterPost';
import ResponsiveAppBar from './Components/Navbar/Navabar';
import PostList from './Components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>

    <Route path="/" element={<div>  <FilterPost/> <PostList/> </div>}/> 
    <Route path="/addpost" element={  <AddPost/>   }/> 
    <Route path="/editpost/:id" element={<EditPost/> }/> 
      </Routes> 
    </div>
  );
}

export default App;
