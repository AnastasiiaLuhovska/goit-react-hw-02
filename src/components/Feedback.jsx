const Feedback = ({feedbacks, totalFeedbacks}) => {
    return totalFeedbacks > 0 ? (
        <ul>
            {feedbacks.map(([key, value], index) => (
                <li key={index}>
                    {key}: {value}
                </li>
            ))}
        </ul>
    ) : (
        <p>No feedbacks yet</p>)
};

export default Feedback;