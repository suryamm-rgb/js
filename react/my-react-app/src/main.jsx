import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './Practice/List.jsx'
import Count from './Practice/Count.jsx'
import Counter from './Practice/useActionState/Counter.jsx'
import TodoList from './Practice/useActionState/TodoList.jsx'
import UseCallBack from './Practice/useCallBack/useCallBack.jsx'
import PreventChildrenRender from './Practice/useCallBack/PreventChidrenRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <List/> */}
    {/* <Count/> */}
    {/* <Counter/> */}
    {/* <TodoList/> */}
    {/* <UseCallBack/> */}
    <PreventChildrenRender/>
  </StrictMode>,
)
