import './Word.css';
const word = "Tartiflette";

export const Word = () => {
    return (
        <div className='word'>
            {(word.split("").map((letter: string, index: number) =>
                <div className='word__letter-cont' key={index}>
                    <span className='word__letter word__letter--hidden'>{letter}</span>
                    <div className='word__red-line'></div>
                </div>
            ))
            }
        </div>
    )
}