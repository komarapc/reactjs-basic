const Sidebar = (props: any) => {
  return (
    <div>
      <h4 className="font-weight-normal">Track Lists</h4>
      <ul className="list-group shadow-sm rounded">
        {props.data_track_lists.map((track_list: any, key: number) => {
          return (
            <div key={key}>
              {props.current_track_list === track_list.id ? (
                <li key={key} className="list-group-item active">
                  {track_list.id} - {track_list.track_name}
                </li>
              ) : (
                <li key={key} className="list-group-item">
                  {track_list.is_done ? (
                    <i
                      className="fa fa-check-circle mr-3"
                      style={{ color: "#4CAF50" }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-ban mr-3"
                      style={{ color: "#f44336" }}
                    ></i>
                  )}
                  {track_list.id} - {track_list.track_name}
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
