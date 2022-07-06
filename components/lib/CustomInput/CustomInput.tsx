import { ICustomInput } from './customInput.model';

const customInput = (props: ICustomInput) => {

    const { 
        type = 'text',
        backgroundColor = 'red-900',
        textColor = 'black',
        width = 7
    }= props;

  return (
    <>
        <input
            type={type}
            className={
                `bg-${backgroundColor}
                text-${textColor}
                w-${width}`
            }
        />
    </>
  )
}

export default customInput;