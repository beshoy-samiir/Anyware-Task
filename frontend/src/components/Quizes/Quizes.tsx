import axios from 'axios'
import React, { useEffect, useState } from 'react';


interface quiz {
    _id: string
    title: string
    question: string
}

const Quiz: React.FC = () => {
    const [quizzes, setQuizzes] = useState<quiz[]>([]);


const QuizesURL = 'http://localhost:3000/quiz'

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(QuizesURL)
            setQuizzes(response.data.quizzes);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
    }, []);
    
    return (
        <>
        <div className="align-items-center d-flex justify-content-between border border-dark p-2 rounded">
            <h5 className='text'>Quizzes</h5>
            <p className='text-primary'>All</p>
        </div>
        {quizzes.map((quiz) => (
            <div key={quiz._id} className="card mb-3 mt-1">
                <div className="row g-0 ps-4 p-3">
                    <div className="col-md-12"></div>
                </div>
            </div>
        ))}
    </>
    );
};


export default Quiz;
