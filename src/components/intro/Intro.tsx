export const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__title">
                <h1>Hangman.</h1>
            </div>
            <div className="intro__text">
                <p>&gt; guess the word before you die!</p>
                <p>&gt; choose your langage:</p>
                <select name="langage" id="">
                    <option value="en">english</option>
                    <option value="fr">french</option>
                </select>
            </div>
        </div>
    )
}