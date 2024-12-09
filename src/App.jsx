import Header from './Header'
import { languages } from './languages'

export default function Hangman() {
  const languagesChips = languages.map(({backgroundColor, color, name}) => 
    <div key={name} className="chips"style={{backgroundColor,color}}>
       {name}
    </div>
)
    return (
        <main>
           <Header />
           <section>
                <p>You Win </p>
                <span>Well Done</span>
            </section>
            <section className="container-chips">
              {languagesChips}
            </section>
        </main>
    )
}
