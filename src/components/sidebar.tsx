const Sidebar = (props: any) => {
  return (
    <div>
      <h4 className="font-weight-normal">Track Lists</h4>
      <ul className="list-group">
        {props.data_track_lists.map((track_list: any, key: number) => {
          return (
            <div key={key}>
              {props.current_track_list === track_list.id ? (
                <li key={key} className="list-group-item active">
                  {track_list.track_name}
                </li>
              ) : (
                <li key={key} className="list-group-item">
                  {track_list.track_name}
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
