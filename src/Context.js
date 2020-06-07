import {createContext} from 'react'

const URLContext = createContext(['http://localhost:3000/book/',() => {}]);

const closeModalContext = createContext([false, () => {}])

export default URLContext