import axios from 'axios'
import React, { useState } from 'react'

function Content() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")



    const sendMessage = async () => {
        const newMessage = {
            "name": name,
            "email": email,
            "phone": phone,
            "subject": subject,
            "message": message,
        }

        await axios.post('https://localhost:7267/api/Message', newMessage)
            .catch(error => {
                console.error('İstek hatası:', error);
            });

    }


    return (
        <main className="page-content section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-sm-12">
                        <div className="contact-form">
                            <div className="contact-form-info">
                                <div className="contact-title">
                                    <h3>TELL US YOUR PROJECT</h3>
                                </div>
                                <div
                                    id="contact-form"

                                >
                                    <div className="contact-page-form">
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input value={name} onChange={(e) => setName(e.target.value)} name="con_name" type="text" placeholder="Name *" />
                                            </div>
                                            <div className="contact-inner">
                                                <input
                                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                                    name="con_email"
                                                    type="email"
                                                    placeholder="Email *"
                                                />
                                            </div>
                                            <div className="contact-inner">
                                                <input value={phone} onChange={(e) => setPhone(e.target.value)} name="con_phone" type="text" placeholder="Phone *" />
                                            </div>
                                            <div className="contact-inner">
                                                <input
                                                    value={subject} onChange={(e) => setSubject(e.target.value)}
                                                    name="con_subject"
                                                    type="text"
                                                    placeholder="Subject *"
                                                />
                                            </div>
                                            <div className="contact-inner contact-message">
                                                <textarea
                                                    value={message} onChange={(e) => setMessage(e.target.value)}
                                                    name="con_message"
                                                    placeholder="Message *"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="contact-submit-btn">
                                            <button onClick={() => sendMessage()} className="submit-btn">
                                                Send Email
                                            </button>
                                            <p className="form-messege" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="contact-infor">
                            <div className="contact-title">
                                <h3>CONTACT US</h3>
                            </div>
                            <div className="contact-dec">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                                    nam ex odio expedita, officia temporibus ipsum, placeat magni
                                    quibusdam sint, atque distinctio{" "}
                                </p>
                            </div>
                            <div className="contact-address">
                                <ul>
                                    <li>Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                    <li>Email: Infor@Ruiztheme.com</li>
                                    <li>Phone: 0(1234) 567 890</li>
                                </ul>
                            </div>
                            <div className="work-hours">
                                <h5>Working hours</h5>
                                <p>
                                    <strong>Monday – Saturday</strong>: &nbsp;08AM – 22PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Content