import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Quiz from '../Quizes/Quizes';


interface announcement {
    _id: string
    title: string
    description: string
}

const Announcement: React.FC = () => {
    const [announcements, setAnnouncements] = useState<announcement[]>([]);
    const AnnouncementURL = 'http://localhost:3000/announcement'
    useEffect(() => {
        const fetchData = async () => {
        try {
        const response = await axios.get(AnnouncementURL)
        setAnnouncements(response.data.announcements);
        } catch (error) {
        console.log(error);
        }
    }
    fetchData();
    }, []);


    return (
        <>
        <div className="col-12 d-md-flex justify-content-between">
            <div className="col-md-8 col-12">
                <div className="align-items-center d-flex justify-content-between border border-dark p-2 rounded">
                    <h5 className='text'>Announcements</h5>
                    <p className='text-primary'>All</p>
                </div>
                {announcements.map((announcement, index) => (
                <div key={announcement._id} className={`card mb-3 mt-1 ${index < announcements.length - 1 ? 'mb-4' : ''}`}>
                    <div className="p-3 row">
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <p className="card-text">{announcement.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div>
                <Quiz/>
            </div>
        </div>
    </>
    );
};

export default Announcement;
