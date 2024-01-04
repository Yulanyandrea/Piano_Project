import { useState } from 'react';

interface selectorProps {
    valueChange:(value: string) => void;
}

const Selector = ({valueChange}:selectorProps) => {
    const [values, setValue] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       let selectButton = e.target.value;
        setValue((prevValue) => (prevValue === selectButton ? '' : selectButton)); 
        valueChange(selectButton)

    }
    return(
        <form className="flex flex-col text-center items-baseline p-4">

            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="sine">Sine</label>
                <input type="radio" id="sine" name="sine" value="sine" onChange={handleChange} checked={values === 'sine'}/>
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="triangle">Triangle</label>
                <input type="radio" id="triangle" name="triangle" value="triangle" onChange={handleChange} checked={values === 'triangle'}/>
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="square">Square</label>
                <input type="radio" id="square" name="square" value="square" onChange={handleChange} checked={values === 'square'}/>
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="sawtooth">Sawtooth</label>
                <input type="radio" id="sawtooth" name="sawtooth" value="sawtooth" onChange={handleChange} checked={values === 'sawtooth'}/>

            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="piano">Piano</label>
                <input type="radio" id="piano" name="piano" value="piano" onChange={handleChange} checked={values === 'piano'}/>
            </section>
            

            </form>
            
    )

}
export default Selector; 