export async function getAllEvents() {
    const response =  await fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json'); //dummy url, later create real firebase
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });

        return events;
    }
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
  }