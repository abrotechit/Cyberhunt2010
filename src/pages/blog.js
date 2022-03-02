import "../styles/blog.scss";
import axios from "axios";
import { useEffect } from "react";
import PageFooter from "../componentParts/footer";
import TopNav from "../componentParts/topNav";
import { useRouteMatch, Link } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { blogId, getBlogs } from "../states/blog";
import { fetching } from "../states/home";
import { imageUrl } from "../services/axios";
import { Image } from "antd";

function Blog(props) {
  const { url } = useRouteMatch();
  const [loading, setloading] = useRecoilState(fetching);
  // const setBlogId = useSetRecoilState(blogId)
  const data = useRecoilValueLoadable(getBlogs);
  const blogs =
    data.state === "hasValue" && data.contents ? data.contents.data : [];

  const dateFormater = (theDate) => {
    const dateobj = new Date(theDate);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dateobj.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (data.contents && data.contents.data) {
      setloading(false);
    }
  }, [data]);

  const blogsBackup = [
    {
      id: 1,
      image_url: "/blogPic.png",
      title: "PAYMENT SOLUTION",
      short_content: "Register, Login and Transact with your Phone number",
      updated_at: "2020-03-21",
    },
    {
      id: 2,
      image_url: "/blogPic.png",
      title: "EASY TO USE",
      short_content: "Add Bank card / setup Bank account and start transacting",
      updated_at: "2020-03-21",
    },
    {
      id: 3,
      image_url: "/blogPic.png",
      title: "EASY TO TRANSACT",
      short_content:
        "Link Your BVN, Top up your Wallet, Request for Payment, Accept payment, Transfer money, Pay for Subscriptions and Services, with just few clicks.",
      updated_at: "2020-03-21",
    },
    {
      id: 4,
      image_url: "/blogPic.png",
      title: "PAYMENT OPTIONS",
      short_content:
        "Transact, and Receive payments with or without Internet access with our multiple payment options.",
      updated_at: "2020-03-21",
    },
    {
      id: 5,
      image_url: "/blogPic.png",
      title: "QR CODE",
      short_content:
        "Scan and make payments, Send QR code to customers/contact list and get paid in minutes.",
      updated_at: "2020-03-21",
    },
    {
      id: 6,
      image_url: "/blogPic.png",
      title: "CHAT, CALL, TRANSACT",
      short_content:
        "Get in touch with your loved ones, send them pictures and videos, make free video and audio calls, and send them money",
      updated_at: "2020-03-21",
    },
    {
      id: 7,
      image_url: "/blogPic.png",
      title: "SOCIALIZE",
      short_content:
        "Meet new people, Post pictures and videos, create groups, advertise your products, follow people and synchronize with your other social media accounts",
      updated_at: "2020-03-21",
    },
  ];

  return (
    <div>
      <TopNav />
      <div id="blog" style={{ backgroundImage: "url(/radial.png)" }}>
        <div className="blog-jumbotron pb-4 mb-4">
          <div className="py-4 text-center">
            <div className="pt-4 mt-4">
              <h1 className="">Blog</h1>
              <p className="">
                The latest updates, stories, ideas and guides from the Waya
                team.
              </p>
            </div>
          </div>
        </div>
        <div className={`${loading ? "showing" : "hiding"} loading`}>
          <img src="/fading.gif" />
        </div>
        <div className={`${loading ? "hiding" : "showing"}`}>
          <div className="blogs pb-4">
            {blogsBackup.map((el) => {
              return (
                <div className="card blog-card" key={el.id}>
                  <Image
                    className="card-img-top"
                    preview={false}
                    src={el.image_url}
                    alt="Blog Image"
                    placeholder={
                      <Image
                        src={`${imageUrl}${el.image_url}`}
                        preview={false}
                      />
                    }
                  />
                  <div className="card-body">
                    <div className="row justify-content-between">
                      <p className="col">{dateFormater(el.updated_at)}</p>
                      {/* <p className='col-sm-4'>{`${el.read_time ? `${el.read_time} mins read` : 'few mins read'}`}</p> */}
                    </div>
                    <h6 className="card-title">{el.title}</h6>
                    <p className="card-text">{el.short_content}</p>
                    <button className="orange">
                      <Link
                        to={{
                          pathname: `${url}/${el.id}`,
                          state: `${el.id}`,
                        }}
                      >
                        Read More
                      </Link>
                      <span>
                        <img src="/rightArr.png" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div aria-label="Page  navigation example">
          <ul className="justify-content-center pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <img src="/left.png" />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                <img src="/dot.png" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <img src="/darkDot.png" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <img src="/darkDot.png" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <img src="/right.png" />
              </a>
            </li>
          </ul>
        </div>
        <PageFooter />
      </div>
    </div>
  );
}

export default Blog;
