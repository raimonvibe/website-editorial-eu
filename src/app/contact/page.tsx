import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact - Raimonvibe',
  description: 'Get in touch with Raimon for web development projects, collaborations, or general inquiries.',
}

export default function Contact() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Contact" />
          
          <section>
            <header className="main">
              <h1>Contact</h1>
            </header>

            <div className="posts">
              <article>
                <h2>Form</h2>
                <form method="POST" action="https://formspree.io/f/xwplqeky">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" required />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" required />
                    </div>
                    <div className="field">
                      <label htmlFor="category">Reason for Contact</label>
                      <select name="category" id="category" required>
                        <option value="">- Please choose an option -</option>
                        <option value="Landing Page Request">Request a Landing Page</option>
                        <option value="General Inquiry">General Question or Message</option>
                        <option value="Support or Follow-up">Follow-up / Support</option>
                        <option value="Feedback">Give Feedback</option>
                        <option value="Other">Something Else</option>
                      </select>
                    </div>              
                    <div className="field">
                      <label>Priority</label>
                      <div className="field half">
                        <input type="radio" id="priority-low" name="priority" value="Low" defaultChecked />
                        <label htmlFor="priority-low">Low</label>
                      </div>
                      <div className="field half">
                        <input type="radio" id="priority-normal" name="priority" value="Normal" />
                        <label htmlFor="priority-normal">Normal</label>
                      </div>
                      <div className="field half">
                        <input type="radio" id="priority-high" name="priority" value="High" />
                        <label htmlFor="priority-high">High</label>
                      </div>
                    </div>
                    <div className="field">
                      <div className="field half">
                        <input type="checkbox" id="human" name="human" />
                        <label htmlFor="human">I am not a robot</label>
                      </div>                  
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows={5} placeholder="Enter your message" required></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" className="primary" /></li>
                    <li><input type="reset" value="Reset" /></li>
                  </ul>
                </form>
              </article>

              <article>
                <a href="#" className="image">
                  <Image src="/images/pic21.jpg" alt="Illustration of a light bulb being screwed into a lamp shade" width={400} height={300} />
                </a>
                <h2>If you have ideas</h2>
                <p>Collecting feedback from clients is a way to show that I value their opinions. By asking my clients for feedback, I communicate that their opinions are important to me. I involve them in shaping my business, so they feel more connected to my company. By listening to their voices, I can build a sustainable connection with them.</p>
                <p>"We would love to hear from you."</p>
              </article>
            </div>
          </section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
