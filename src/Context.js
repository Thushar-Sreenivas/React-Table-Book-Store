import {createContext} from 'react'

const URLContext = createContext(['http://localhost:3000/book/',() => {}]);

export default URLContext