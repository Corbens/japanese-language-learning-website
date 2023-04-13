import { useState } from 'react'
import axios from 'axios'

import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import Game from "../components/kanji/Game"
import { getKanji } from '../utilities/Kanji'
import { useAuthContext } from '../hooks/useAuthContext'


const Kanji = () => {

    const { user } = useAuthContext()
    // Consider when things don't need to be state, useRef might work fine too. Should check this throughout all your code
    const [active, setActive] = useState(false)
    const [kanji, setKanji] = useState(getKanji())
    const [currentKanji, setCurrentKanji] = useState(0)
    const [played, setPlayed] = useState(false) 
    const [results, setResults] = useState([false, false, false, false, false])

    const callback = (correct) => {
        let tempResults
        tempResults = results
        if(correct){
            tempResults[currentKanji] = true
            setResults(tempResults)
        }
        if(currentKanji !==4){ 
            setCurrentKanji(currentKanji+1)
        }else{
            setCurrentKanji(0)
            setActive(false)
            handleResultsOpen()
            setPlayed(true)
            axios.post("user/addhistory", { 
                email: user.email,
                type: "Kanji",
                score: (tempResults.filter(Boolean).length / 5)*100
            }).then((response) => {
            }).catch((error) => {
            })
            // maybe have a button to go to the lessons page if you are struggling with kanji. can also learn elsewhere?
        }
    }

    const startGame = () => {
        let kanjiSet = getKanji()
        for(let i = kanjiSet.length -1; i > 0; i--){ // shuffle the kanji. once have more than 5 kanji make sure to setKanji to only the first 5 kanji (after shuffling).
            let j = Math.floor(Math.random() * (i + 1))
            var temp = kanjiSet[i]
            kanjiSet[i] = kanjiSet[j]
            kanjiSet[j] = temp
        }
        setKanji(kanjiSet)
        setActive(true)
    }

    const [showResults, setShowResults] = useState(false)
    const handleResultsOpen = () => {
        setShowResults(true)
    }
    const handleResultsClose = () => {
        setShowResults(false)
    }

    const getIcon = (score) => {
        if(score > 75){
            return ["💮", "This white flower can be used to signify celebration, praise or success on a job well done!"] 
        }else if(score > 50){
            return ["🈴️", "This emoji features the kanji symbolizing a passing grade or passing an exam!"]
        }else if(score > 25){
            return ["🉐️", "This emoji is used regarding a gain or sometimes a loss. In this case it symbolizes the opportunity to work hard and improve!"]
        }else{
            return ["❌", "Fail!"] 
        }
    }

    return(
        <div className="KanjiPage">
            { active ? 
                <Game key={currentKanji} theKanji={kanji[currentKanji]} kanjiNum={currentKanji} callback={callback}/>
                :
                <div className="preKanji">
                    <div className="preKanjiTitle">
                        <h1>Kanji Composition Game</h1>
                    </div>
                    <div className="preKanjiContents">
                        <h2>In this game, you are tasked with selecting which components are used to make up the given Kanji. There are 5 Kanji for you to work through. The Kanji is displayed in English, but you have a set of hints to help you, one of which shows you the Kanji. Work through this game to help aid your Kanji comprehension skills, helping you figure out the slight differences between Kanji that can look all too indistinguishable to untrained eyes!</h2>
                        <Button variant="outlined" onClick={() => startGame()}>{!played ? "Start Game" : "Play Again"}</Button>
                        { played && <Button variant="outlined" onClick={() => handleResultsOpen()}>Show Results</Button>}
                    </div>

                    <Modal open={showResults} onClose={handleResultsClose} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div className="resultsModal">
                            <Stack spacing={1}> 
                                <h1>Results</h1>
                                <Tooltip title={getIcon((results.filter(Boolean).length / 5)*100)[1]}>
                                    <h3>{getIcon((results.filter(Boolean).length / 5)*100)[0]}</h3>
                                </Tooltip>
                                <h2>Score - {(results.filter(Boolean).length / 5)*100}</h2>
                                {results.map((value, index) => (
                                    <Stack key="index" direction="row" spacing = {1} alignItems="center" justifyContent="center" >
                                        { value ?               
                                            <Tooltip title="This circle is used similarly to a tick in western countries indicating something that is correct. However, a tick in Japan can often be used to indicate that something is incorrect!">
                                                <h1>⭕</h1>
                                            </Tooltip>
                                            :
                                            <Tooltip title="This cross is used similarly to how it is used in western countries, indicating that an answer is incorrect.">
                                                <h1>❌</h1>
                                            </Tooltip>
                                        }
                                        <h2>{kanji[index].kanji} ({kanji[index].english})</h2>
                                    </Stack>
                                ))}
                                <br/>
                                <Button variant="outlined" onClick={() => handleResultsClose()}>Close</Button>
                            </Stack>
                        </div>
                    </Modal>
                </div>
            }
        </div>
    )
}

export default Kanji