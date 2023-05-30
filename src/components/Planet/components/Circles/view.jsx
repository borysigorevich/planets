import './styles.css'

export const Circles = ({count = 0}) => {

    return (
        <>
            {Array(count).fill(0).map((_, index) => (
                <div
                    key={index}
                    className='circle'
                    style={{
                        '--index': index,
                    }}
                />
            ))}
        </>
    );
};