import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs"; 

function PrivacyPolicy() {
  // Replace placeholders with your actual information
  const contactEmail = 'textevolve@gmail.com';
  const effectiveDate = 'May 25, 2025';
  const websiteName = 'TextEvolve';
  const companyInfo = 'Team Dynamic Dreamers'; // Adjust as needed

  return (
    <div className='pb-6 px-4 md:px-0'>

      {/* Back button */}
      <div className="flex justify-between px-12 mt-4 mb-6">
        <Link to="/" className="flex items-center text-base text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
          <BsArrowLeftShort className='text-xl mt-0.5' /> Back
        </Link>

        <p className='text-orange-500 text-xl font-bold ml-4'>
          TextEvolve
        </p>
      </div>

      <div className="p-6 md:p-6 max-w-4xl mx-auto my-2 text-gray-700 text-sm leading-relaxed border border-gray-300 rounded-lg shadow-md bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="mb-4"><strong>Effective Date:</strong> {effectiveDate}</p>

        <p className="mb-4">
          This Privacy Policy describes how {websiteName} ("we," "us," or "our"), operated by {companyInfo},
          collects, uses, and shares information about you when you use our website ({window.location.origin} or linked app URL)
          and the services offered through it (collectively, the "Service").
        </p>
        <p className="mb-6">By using the Service, you agree to the collection, use, and sharing of your information as described in this Privacy Policy.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Information We Collect</h2>
        <p className="mb-2">We collect information you provide directly to us, information we collect automatically, and information from third parties.</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>
            <strong>Personal Information:</strong> When you register for an account (if applicable), contact us, or use certain features, we may collect information like your name, email address, and any other information you choose to provide.
          </li>
          <li>
            <strong>Uploaded Content:</strong> We collect the documents and images you upload to the Service for processing (digitization, transcription, translation). We handle this content as described in Section 3 ("How We Use Information") and Section 5 ("Data Storage and Security").
          </li>
          <li>
            <strong>Usage Information:</strong> We automatically collect information about your interaction with the Service, such as your IP address, browser type, operating system, pages viewed, dates/times of access, and referring URLs. We may use cookies and similar tracking technologies for this.
          </li>
          <li>
            <strong>Information from Third-Party APIs:</strong> When processing your documents, data is sent to third-party services like Google Vision API, Azure Vision OCR API, Amazon Textract, Google Gemini API, and Google Translate API. These services process the data according to their own privacy policies. We receive the processed text output back from these services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. How We Use Information</h2>
        <p className="mb-2">We use the information we collect to:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>Provide, operate, and maintain the Service.</li>
          <li>Process your uploaded documents as requested (OCR, polishing, translation).</li>
          <li>Improve and personalize the Service.</li>
          <li>Communicate with you, including responding to inquiries and sending service-related notifications.</li>
          <li>Analyze usage trends and monitor the effectiveness of the Service.</li>
          <li>Detect, prevent, and address technical issues and security vulnerabilities.</li>
          <li>Comply with legal obligations.</li>
          <li><strong>[CRUCIAL - Customize/Remove if not applicable]:</strong> We may use anonymized or aggregated data derived from usage patterns or processed content (but not your original documents or identifiable personal information without explicit consent) to improve our AI models and service performance. We will seek separate explicit consent if we intend to use your specific uploaded content for model training purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. How We Share Information</h2>
        <p className="mb-2">We do not sell your personal information. We may share information in the following circumstances:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>
            <strong>With Third-Party Service Providers:</strong> We share information (including uploaded content for processing) with third-party vendors and service providers that help us operate the Service, such as cloud hosting (e.g., Hostinger VPS), analytics providers, and the core AI/OCR/Translation APIs (Google, Microsoft Azure, Amazon AWS). These providers only have access to the information necessary to perform their functions and are obligated to protect it.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose information if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of {websiteName}, our users, or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred.
          </li>
          <li>
            <strong>[Community Feature - Add details if implemented]:</strong> If you choose to share documents or insights via the Community feature, information you designate as public will be visible to other users according to the feature's settings and terms.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Data Storage and Security</h2>
        <p className="mb-2">
          We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, use, or disclosure. Your data, including uploaded documents during processing, may be stored and processed on servers located [Specify Region, e.g., within India, or mention specific cloud provider regions like Hostinger VPS location].
        </p>
        <p className="mb-4">
          However, no electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. Uploaded documents are typically [State retention policy - e.g., stored only temporarily during processing and then deleted, or stored in user accounts until deleted by the user]. We will retain usage data and account information as long as necessary for the purposes outlined in this policy or as required by law.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Your Rights and Choices</h2>
        <p className="mb-2">Depending on your location (especially under the Indian Digital Personal Data Protection Act, 2023), you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>The right to access the personal information we hold about you.</li>
          <li>The right to correct inaccurate personal information.</li>
          <li>The right to request the erasure of your personal information.</li>
          <li>The right to withdraw consent previously given for processing your information.</li>
          <li>The right to nominate another person to exercise rights on your behalf in case of death or incapacity.</li>
          <li>The right to grievance redressal.</li>
        </ul>
        <p className="mb-4">To exercise these rights, please contact us at {contactEmail}. We may need to verify your identity before processing your request.</p>
        <p className="mb-4">You can typically manage cookie preferences through your browser settings.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Children's Privacy</h2>
        <p className="mb-4">The Service is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Third-Party Links & Services</h2>
        <p className="mb-4">The Service relies on third-party APIs (Google, Azure, AWS). Your use of these underlying services may be subject to their respective terms and privacy policies. We are not responsible for the privacy practices of these third parties.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. If we make material changes, we will notify you by [Specify method - e.g., posting the new policy on the website, sending an email notification] with a new effective date. Your continued use of the Service after the effective date constitutes your acceptance of the revised policy.</p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, or wish to exercise your rights, please contact our Grievance Officer at:</p>
        <p>Email: <a href={`mailto:${contactEmail}`} className="text-orange-600 hover:underline">{contactEmail}</a></p>


        <div className="text-center text-gray-500 text-xs mt-6 mb-4">
          &copy; {new Date().getFullYear()} {websiteName}. All rights reserved.
        </div>
      </div>

    </div>
  );
}

export default PrivacyPolicy;