import { useEffect, useState } from 'react';

import MeetupList from "../components/meetups/MeetupList";
// eslint-disable-next-line
import MeetupItem from "../components/meetups/MeetupItem"; 


function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetup-2026e-default-rtdb.firebaseio.com/meetups.json'
      ).then((response) => {
        return response.json();
    }).then((data) => {
      // firebase에서 배열을 가져오기 위한 데이터 변환
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
    
  }, []);

    if (isLoading) {
      return (
      <section>
        <p>Loading...</p>
      </section>
      )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    )
}

export default AllMeetupsPage;