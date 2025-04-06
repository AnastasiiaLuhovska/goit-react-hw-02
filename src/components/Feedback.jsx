const Feedback = ({feedbacks}) => {
    return  (
        <ul>
            {feedbacks.map(([key, value], index) => (
                <li key={index}>
                    {key}: {value}
                </li>
            ))}
        </ul>
    )
};

export default Feedback;