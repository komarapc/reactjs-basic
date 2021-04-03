const Sidebar = (props: any) => {
  return (
    <div>
      <h4 className="font-weight-normal">Track Lists</h4>
      <ul className="list-group shadow-sm rounded">
        {props.data_track_lists.map((track_list: any, key: number) => {
          return (
            <div key={key}>
              {props.current_track_list === track_list.id ? (
                <li
                  key={key}
                  className="list-group-item"
                  style={{ color: "#fff", backgroundColor: "#66BB6A" }}
                >
                  {track_list.id} - {track_list.track_name}
                </li>
              ) : (
                <li key={key} className="list-group-item ">
                  <div>
                    <small>
                      {track_list.id} - {track_list.track_name}
                    </small>
                    {track_list.is_done && track_list.is_success
                      ? [
                          <div className="badge badge-success badge-sm p-1 ml-2">
                            Success
                          </div>,
                        ]
                      : track_list.is_done && !track_list.is_success
                      ? [
                          <div className="badge badge-danger badge-sm p-1 ml-2">
                            Failed
                          </div>,
                        ]
                      : !track_list.is_done && !track_list.is_success
                      ? [
                          <div className="badge badge-secondary badge-sm p-1 ml-2">
                            Waiting
                          </div>,
                        ]
                      : [""]}
                  </div>
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
