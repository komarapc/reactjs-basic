const Sidebar = (props: any) => {
  return (
    <div>
      <h4 className="font-weight-normal">Track Lists</h4>
      <ul className="list-group shadow-sm rounded">
        {props.data_track_lists.map((track_list: any, key: number) => {
          return props.current_track_list === track_list.id ? (
            <li key={track_list.id} className="list-group-item active">
              {track_list.id} - {track_list.track_name}
            </li>
          ) : (
            <li key={track_list.id} className="list-group-item ">
              <div key={track_list.id}>
                <small>
                  {track_list.id} - {track_list.track_name}
                </small>
                {track_list.is_done && track_list.is_success
                  ? [
                      <i
                        key={track_list.id}
                        className="fa fa-check-circle ml-2 text-success"
                      ></i>,
                    ]
                  : track_list.is_done && !track_list.is_success
                  ? [
                      <div
                        key={track_list.id}
                        className="badge badge-danger badge-sm p-1 ml-2"
                      >
                        Failed
                      </div>,
                    ]
                  : !track_list.is_done && !track_list.is_success
                  ? [
                      <div
                        key={track_list.id}
                        className="badge badge-secondary badge-sm p-1 ml-2"
                      >
                        Waiting
                      </div>,
                    ]
                  : [""]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
