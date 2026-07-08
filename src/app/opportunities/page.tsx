import { Metadata } from 'next'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Opportunities - Raimonvibe',
  description: 'Explore career opportunities and collaborations with Raimon.',
}

export default function Opportunities() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title="Opportunities" />
          
								<section>
									<header className="main">
            						<h1>My Professional Journey and Perspectives</h1>
									</header>

<span className="image main">
  <Image
    src="/images/pic22.jpg"
    alt=""
    width={800}
    height={400}
    style={{ width: "100%", height: "auto" }}
  />
</span>



            <p>Throughout my career, I have gained valuable perspectives by connecting with a range of renowned companies across various industries. These opportunities have come from organizations that value innovation, technology, and creative problem-solving—qualities that align with my professional goals.</p>
            <h1>Discover the Companies I Have Engaged With:</h1>

									<hr className="major" />

<div className="link-container">
      <ul className="link-list">
        <li className="link-item">
          <a href="https://commercetools.com/" target="_blank" rel="noopener noreferrer">Commercetools</a>
        </li>
        <li className="link-item">
          <a href="https://payever.careers/" target="_blank" rel="noopener noreferrer">Payever</a>
        </li>
        <li className="link-item">
          <a href="https://www.tcs.com/careers" target="_blank" rel="noopener noreferrer">Tata Consultancy Services</a>
        </li>
        <li className="link-item">
          <a href="https://careers.cognizant.com/nl/nl" target="_blank" rel="noopener noreferrer">Cognizant</a>
        </li>
        <li className="link-item">
          <a href="https://q-logic.nl/" target="_blank" rel="noopener noreferrer">Qlogic</a>
        </li>
        <li className="link-item">
          <a href="https://www.alten.nl/" target="_blank" rel="noopener noreferrer">Alten</a>
        </li>
        <li className="link-item">
          <a href="https://avanceservices.com/" target="_blank" rel="noopener noreferrer">Avance Consulting</a>
        </li>
        <li className="link-item">
          <a href="https://akkodis.com/" target="_blank" rel="noopener noreferrer">Akkodis</a>
        </li>
        <li className="link-item">
          <a href="https://www.parallelconsulting.com/" target="_blank" rel="noopener noreferrer">Parallel Consulting</a>
        </li>
        <li className="link-item">
          <a href="https://vitas.nl/young-talent" target="_blank" rel="noopener noreferrer">VITAS Young Talent</a>
        </li>
        <li className="link-item">
          <a href="https://cloudstaff.com/" target="_blank" rel="noopener noreferrer">Cloudstaff</a>
        </li>
        <li className="link-item">
          <a href="https://vividresourcing.com/" target="_blank" rel="noopener noreferrer">Vivid Resourcing</a>
        </li>
        <li className="link-item">
          <a href="https://www.telusdigital.com/" target="_blank" rel="noopener noreferrer">Telus Digital</a>
        </li>
        <li className="link-item">
          <a href="https://www.foxtekrs.com/" target="_blank" rel="noopener noreferrer">Foxtekrs</a>
        </li>
      </ul>
    </div>
            <p>These perspectives have helped me further develop my professional skills by gaining insights into various industries. From e-commerce to IT consulting, and from cross-platform development to talent development, these opportunities have guided me on a path of continuous learning and skill development. Each opportunity has contributed to refining my expertise and adapting to new challenges in the ever-evolving technological landscape.</p>

            <p>I am grateful for the opportunities to connect with companies that recognize my abilities and potential. These perspectives have not only fostered my professional growth but have also brought a sense of fulfillment and satisfaction. It is inspiring to collaborate with organizations that share my passion for technology and innovation, and this has brought a great deal of professional fulfillment. These opportunities have enabled me to make meaningful contributions while growing alongside leading companies in the industry.</p>

            <p>The environment shaped by these perspectives is one of dynamic growth and potential. As I navigated these opportunities, I encountered challenges that pushed me to innovate and think critically. The paths laid out by these companies have led me through diverse sectors, each with its own complexities and rewards. This journey has created an ecosystem of continuous improvement, where each new challenge becomes a stepping stone to further success. The diversity in these opportunities has not only enriched my skillset but has also broadened my perspective, allowing me to see the interconnectedness of different fields and how they contribute to the larger landscape of technology and development.</p>

            <p><em>Please note that while I have engaged with these companies through various opportunities, this page does not imply any formal endorsement or partnership.</em></p>

									<hr className="major" />

            <p>The opportunities to apply reflect the diverse range of skills and experiences I bring to the table. I am constantly inspired by the innovations in these industries and look forward to further opportunities to contribute and grow.</p>

		

					
								</section>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
