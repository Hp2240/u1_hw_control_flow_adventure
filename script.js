let firstName = prompt('What is your first name?')
let lastName = prompt('What is your last name?')

const adventureGame = () => {
  let year = prompt(
    `Nice to meet you, ${firstName} ${lastName}. What year would you like to go to? (YYYY)`
  )

  if (year >= 2015) {
    let biffGiff = prompt(
      "I see you your're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)"
    )
    if (biffGiff === 'B' || biffGiff === 'b') {
      let standAndRun = prompt(
        'Hmm, interesting. Biff is angry and has a cane. Ho you stand and fight, or run away like a coward? (S/R)'
      )
      if (standAndRun === 'S' || standAndRun === 's') {
        alert(
          'Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.'
        )
      } else if (standAndRun === 'R' || standAndRun === 'r') {
        alert(
          "You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice."
        )
      } else {
        alert("I don't understand your answer.")
      }
    } else if (biffGiff === 'G' || biffGiff === 'g') {
      let inAndOut = prompt(
        'Griff is asking you of you are in, or out. What do you say? (I/O)'
      )
      if (inAndOut === 'I' || inAndOut === 'i') {
        alert(
          'Bad call. Griff and his cronies rob the Hill Valley bank and fram you for it. No more time travel for you.'
        )
      } else if (inAndOut === 'O' || inAndOut === 'o') {
        alert(
          'Cood call. You deck  Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a iole of manure.'
        )
      }
    }
  } else if (year < 2015) {
    let n = prompt(
      "I see you're a fan of Back to the FUture 1. Your future Mon has just asked you to the Enchantment Udner the Sea dance. What do you do? (1/2/3)"
    )
    switch (n) {
      case '1':
        alert(
          "Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955."
        )
        break
      case '2':
        alert(
          'Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.'
        )
        break
      case '3':
        alert(
          'Interesting. You set up an selaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.'
        )
        break
      default:
        alert("I don't understand your answer.")
    }
  }
}

adventureGame()

let playAgain = prompt('Do you want to play the game again? Y/N')
if (playAgain === 'Y' || 'y') {
  adventureGame()
}
