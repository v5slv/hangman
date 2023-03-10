import { useState } from 'react';
import './Hangman.css';

export const Hangman = () => {
    const [errCount, setErrCount] = useState(0);

    return (
        <div className="hangman">
            <svg className='hangman__svg' width="260" height="320" viewBox="0 0 337 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="317" x2="334" y2="317" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <line x1="31.1349" y1="315" x2="31.1349" y2="6" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <line x1="4.55164" y1="3" x2="271.631" y2="3" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <line x1="232.635" y1="4" x2="232.635" y2="74" stroke="black" stroke-width="6" stroke-linecap="round"/>
                <ellipse cx="232.262" cy="97" rx="22.4035" ry="21" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="233.129" y1="120" x2="233.129" y2="196" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="-3" x2="47.1069" y2="-3" transform="matrix(-0.574862 0.818251 -0.850937 -0.525267 230.129 132)" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="-3" x2="48.7562" y2="-3" transform="matrix(0.556543 0.830819 -0.861808 0.507235 230.129 133)" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="-3" x2="85.5786" y2="-3" transform="matrix(-0.349274 0.937021 -0.950331 -0.311242 230.129 196)" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="3" y1="-3" x2="85.2117" y2="-3" transform="matrix(0.338633 0.940919 -0.953466 0.301501 230.129 197)" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="70.0186" y1="4.23806" x2="31.2381" y2="46.8028" stroke="black" stroke-width="6" stroke-linecap="round"/>
            </svg>
            <div className="hangman__infos">
                <div className="hangman__err-count">
                    <p className='hangman__number'>{errCount}</p>
                </div>
                <button onClick={() => setErrCount(errCount + 1)}>1 erreur de plus</button>
                <div className="hangman__err-txt">
                    <p>Ok</p>
                </div>
            </div>
        </div>
    )
}