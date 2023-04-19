import { Header } from './components/Header'
import { Releases } from './components/Releases'
import { Bilheteria } from './components/Bilheteria'
import { TabelaFilmes } from './components/TabelaFilmes'
import './styles/App.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <Releases />
                <Bilheteria />
                <TabelaFilmes />
            </main>
        </>
    )
}

export default App