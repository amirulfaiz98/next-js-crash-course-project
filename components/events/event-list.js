import EventItem from "./event-item";
import classess from "./event-list.module.css";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={classess.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          name={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
