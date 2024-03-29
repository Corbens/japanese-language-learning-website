import { useState, useRef } from 'react'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'

import { getDecks } from '../../../utilities/Vocabulary'

const VocabularySettings = ({ callback }) => {

    const [selectedDecks, setSelectedDecks] = useState({"countries": true, "food": false, "numbers": false});
    const [onePlusDecks, setOnePlusDecks] = useState(true)
    const cardsRef = useRef(5)

    // checks that at least one deck has been selected
    const checkDecks = () => { 
        let selected = false
        for(let deck in selectedDecks){
            if(selectedDecks[deck]){
                selected = true
                break
            }
        }
        setOnePlusDecks(selected)
    }

    // updates relevant states and variables if countries checkbox is toggled
    const handleChangeCountries = () => {
        let tDeck;
        tDeck = selectedDecks
        tDeck['countries'] = !selectedDecks['countries']
        setSelectedDecks(tDeck)
        checkDecks()
    }

    // updates relevant states and variables if food checkbox is toggled
    const handleChangeFood = () => {
        let tDeck;
        tDeck = selectedDecks
        tDeck['food'] = !selectedDecks['food']
        setSelectedDecks(tDeck)
        checkDecks()
    }

    // updates relevant states and variables if food checkbox is toggled
    const handleChangeNumbers = () => {
        let tDeck;
        tDeck = selectedDecks
        tDeck['numbers'] = !selectedDecks['numbers']
        setSelectedDecks(tDeck)
        checkDecks()
    }

    // starts the game and passes relevant data to parent 
    const startGame = async () => {
        callback(getDecks(selectedDecks), cardsRef.current) 
    }

    return (
        <div className="vocabSettings">
            <h3>Vocabulary Settings</h3>
            <p>This vocabulary game mode involves matching Japanese words to English words. Choose what decks you wish to test your knowledge on and how many cards to be tested on! </p>
            <FormGroup sx={{display: "inline"}}>
                <FormControlLabel control={<Checkbox defaultChecked onChange={handleChangeCountries}/>} label="Countries" />
                <FormControlLabel control={<Checkbox onChange={handleChangeFood} />} label="Food" />
                <FormControlLabel control={<Checkbox onChange={handleChangeNumbers} />} label="Numbers" />
            </FormGroup>
            <Box sx={{ width: 300 }}>
                <h4>Number of Cards</h4>
                <Slider
                    aria-label="Cards"
                    defaultValue={5}
                    step={null}
                    marks={[
                        {value: 3, label: "3"},
                        {value: 4, label: "4"},
                        {value: 5, label: "5"},
                        {value: 6, label: "6"},
                        {value: 7, label: "7"},
                        {value: 8, label: "8"}]}
                    min={3}
                    max={8}
                    onChange={(e, value) => cardsRef.current = value}
                />
            </Box>
            <Button
                variant = "outlined"
                disabled = {!onePlusDecks}
                onClick={startGame}>
                Start Game
            </Button>
        </div>
    )
}

export default VocabularySettings