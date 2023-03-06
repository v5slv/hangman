import './Keyboard.css';

const alphabet = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];

export const Keyboard = () => {
    return (
        <div className="keyboard">
            <div className="keyboard__row">
            {(alphabet.slice(0,10)).map(letter => {
                return(
                    <button className="keyboard__letter keyboard__letter--default" key={letter}>{letter}</button>
                )
                })
            }
            </div>
            <div className="keyboard__row">
            {(alphabet.slice(10,20)).map(letter => {
                return(
                    <button className="keyboard__letter keyboard__letter--guessed" key={letter}>{letter}</button>
                )
                })
            }
            </div>
            <div className="keyboard__row">
            {(alphabet.slice(20)).map(letter => {
                return(
                    <button className="keyboard__letter keyboard__letter--error" key={letter}>{letter}</button>
                )
                })
            }
            </div>
            
        </div>
    )
}