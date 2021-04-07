import { ChangeEvent, Fragment, useState } from "react";
import { useHistory, withRouter } from "react-router";

import ButtonComponent from "../../components/atoms/button-component";
import author_list from "../../data/author";
import slugify from "slugify";

const BlogCreate = (props: any) => {
  /**
   * interface typedata
   */
  interface dataForm {
    id: number | null;
    title: string;
    slug: string;
    author: string;
    body: string;
  }

  /***
   * variable declaration
   */
  const history = useHistory();
  const url: string = "http://localhost:8000/blogs/";
  const method: string = "POST";

  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [data, setData] = useState<any>({});
  const [message, setMessage] = useState<string>("");
  /**
   * variable function
   * @param value
   */
  const handleKeyUpInput = (value: any) => {
    setTitle(value);
    setSlug(slugify(value, "-"));
  };

  const handleSubmitForm = () => {
    const slug_title = slugify(title, "-");
    setSlug(slug_title);
    const data_form_tmp: dataForm = {
      id: null,
      title: title,
      slug: slug,
      author: author,
      body: body,
    };

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_form_tmp),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setMessage("Data berhasil disimpan");
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  /**
   * Render
   * @element
   */
  return (
    <Fragment>
      <div>
        <h1 className="display-4">Create Blog</h1>
        <hr />
        {message !== "" ? (
          <Fragment>
            <div className="alert alert-success">{message}</div>
          </Fragment>
        ) : (
          ""
        )}
        <div className="mt-5">
          <form id={"form-post-blog"}>
            {/* author */}
            <div className="form-group">
              <label htmlFor="">Author</label>
              <select
                name="author"
                id={"select-author"}
                className="form-control"
                onChange={(e) => setAuthor(e.target.value)}
                required
              >
                <option value="">--Pilih--</option>
                {author_list.map((author: any, key: number) => {
                  return (
                    <option value={author.author_name} key={key}>
                      {author.author_name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* title blog */}
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input
                id={"input-title"}
                type="text"
                name="title"
                // value={title}
                className="form-control"
                placeholder={"Title"}
                autoComplete={"off"}
                onKeyUp={(e) =>
                  handleKeyUpInput((e.target as HTMLInputElement).value)
                }
                required
              />
            </div>
            {/* content body */}
            <div className="form-group">
              <label htmlFor="">Body</label>
              <textarea
                name="body"
                id="body-content"
                cols={30}
                rows={8}
                className="form-control"
                placeholder={"Content Body"}
                onKeyUp={(e) => setBody((e.target as HTMLInputElement).value)}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <ButtonComponent
                action={props.history.goBack}
                button_name="Kembali"
                class={"btn btn-sm btn-secondary mr-1"}
              />
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleSubmitForm}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(BlogCreate);
