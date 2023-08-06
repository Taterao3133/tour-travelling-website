import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import useApiFetch from '../../hooks/userFetch';
import { BASE_URL } from '../../utils/config';

const Featuredtourlist = () => {
  const url = `${BASE_URL}/tour/search/getFeaturedTours`;
    const { data: featuredTours, loading, error } = useApiFetch(url);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            {featuredTours.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
};

export default Featuredtourlist;
