const Options = ({feedbackKeys, handleClick, totalFeedbacks, handleReset}) => {

    return (
        <ul className='button-list'>
            {feedbackKeys.map((key, index)=> {
                return(
                    <li key={index}>
                        <button onClick={()=>handleClick(key)}>{key}</button>
                    </li>)})
            }
            {totalFeedbacks > 0 ?
                <li>
                    <button onClick={handleReset}>Reset</button>
                </li> : ''}
        </ul>

    );
};

export default Options