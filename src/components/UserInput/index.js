import {UserInputItem, UserEnteredDetails} from './style'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInput