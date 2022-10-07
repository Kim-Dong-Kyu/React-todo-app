import React, { useCallback, useState } from 'react';
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md'

const TodoInsert = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);


    return (
       <form className='TodoInsert'> 
        <input 
            placeholder='할 일을 입력하세요'
            vlaue = {value}
            onChange = {onChange}
        >
        </input>
        <button type="submit">
            <MdAdd/>
        </button>   
        
       </form>
    );
};

export default TodoInsert;