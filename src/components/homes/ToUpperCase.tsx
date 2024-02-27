type Props = {
    text: string
}

const ToUpperCase = ({text}:Props) => {

  let firstLetter = text.charAt(0);
  let remainLetter = text.slice(1);
  let upperCaseText = firstLetter.toUpperCase() + remainLetter;
  
  return (
    <>
        { upperCaseText }
    </>
  )
}

export default ToUpperCase