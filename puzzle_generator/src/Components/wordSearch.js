import React, {Component} from 'react'

// TO DO List
// create wordsearch class *DONE*
//     Attributes of WORDSEARCH class
//       name, size , alphabet, puzzle
//     FUNCTIONS FOR WORDSEARCH class
//       Initialize Array of arrays to hold the puzzle "X by X"
//       Add a word to the puzzle (Horizontally, virtically, diagonal Up , Diagonal Down)
//       Delete word
//       Check to make sure words don't conflict
//       Fill in Empty space
//       View completed puzzle 


class WordSearch extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            size: "",
            alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            puzzle: []
        }
    }
        
}