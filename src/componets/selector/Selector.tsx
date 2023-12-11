const Selector = () => {
    return(
        <section className="flex flex-col text-center items-baseline">

            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="sine">Sine</label>
                <input type="radio" id="sine" name="sine" value="sine" />
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="triangle">Triangle</label>
                <input type="radio" id="triangle" name="triangle" value="triangle" />
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="square">Square</label>
                <input type="radio" id="square" name="square" value="square" />
            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="sawtooth">Sawtooth</label>
                <input type="radio" id="sawtooth" name="sawtooth" value="sawtooth" />

            </section>
            
            <section className="flex flex-row-reverse gap-2 justify-center">
                <label htmlFor="piano">Piano</label>
                <input type="radio" id="piano" name="piano" value="piano" />
            </section>

            </section>
            
    )

}
export default Selector; 