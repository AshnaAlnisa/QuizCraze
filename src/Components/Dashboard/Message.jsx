import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./message.css";

const Message = () => {
  return (
    <>
      <Sidebar />
      <section id="content">
        <main>
          <section id="section-wrapper">
            <div className="box-wrapper">
              <div className="form-wrap">
                <form action="#" method="POST">
                  <h2 className="form-title">Send us a message</h2>
                  <div className="form-fields">
                    <div className="form-group">
                      <input
                        type="text"
                        className="fname"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="lname"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="email"
                        placeholder="Mail"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id
                        placeholder="Write your message"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="submit-button"
                  />
                </form>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Message;
