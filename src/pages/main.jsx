import React from 'react';
import { useState } from 'react';
import Button from '../components/button';
import Display from '../components/display';




function Main() {

    let [Value, setValue] = useState('')
    const clicked = (e) =>{
        setValue(Value + (e.target.name));
    }

    const equals = ()=>{
        let answer = eval((Value))
        setValue(answer)
    }

    const AC = () =>{
        setValue('')
    }
    return (

    <>
    <Display show={Value}/>

    <div className='buttonContainer'>
    <Button className='spec' click={AC} name = {'AC'} />
    <Button className='spec' click={clicked} name = {'-'} />
    <Button className='spec' click={clicked} name = {'%'} />
    <Button className='spec' click={clicked} name = {'/'} />
    <Button click={clicked} name = {'7'} />
    <Button click={clicked} name = {'8'} />
    <Button click={clicked} name = {'9'} />
    <Button className='spec' click={clicked} name = {'*'} />
    <Button click={clicked} name = {'4'} />
    <Button click={clicked} name = {'5'} />
    <Button click={clicked} name = {'6'} />
    <Button className='spec' click={clicked} name = {'-'} />
    <Button click={clicked} name = {'1'} />
    <Button click={clicked} name = {'2'} />
    <Button click={clicked} name = {'3'} />
    <Button className='spec' click={clicked} name = {'+'} />
    <Button click={clicked} name = {'0'} />
    <Button click={clicked} name = {'.'} />
    <Button click={clicked} name = {''} />
    <Button className='spec' click={equals} name = {'='} />
    
        
    </div>
    </>

     );
}

export default Main;