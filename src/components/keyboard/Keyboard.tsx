import './Keyboard.css';

const alphabet = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
const rowIndexes = [{start:0,end:10},{start:10,end:20},{start:20}];

export const Keyboard = () => {
    return (
        <div className="keyboard">
            {rowIndexes.map(({start,end}): any => {
                return(
                    <div className="keyboard__row">
                        {(alphabet.slice(start,end)).map((letter : string) => {
                            return(
                                <button className="keyboard__letter keyboard__letter--default" key={letter}>{letter}</button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}