import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs"; 


function TermsOfService() {
  const effectiveDate = 'May 25, 2025';
  const websiteName = 'TextEvolve';
  const companyInfo = 'Team Dynamic Dreamers';
  const governingLaw = 'India';
  const jurisdiction = 'Coimbatore, Tamil Nadu';
  const contactEmail = 'textevolve@gmail.com';


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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="mb-4"><strong>Effective Date:</strong> {effectiveDate}</p>

        <p className="mb-4">
          Welcome to {websiteName}! These Terms of Service ("Terms") govern your use of the {websiteName} website
          ({window.location.origin} or linked app URL) and the services offered through it (collectively, the "Service"),
          operated by {companyInfo} ("we," "us," or "our").
        </p>
        <p className="mb-6">
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the Service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Description of Service</h2>
        <p className="mb-4">
          {websiteName} provides an AI-powered platform designed to digitize historical handwritten documents using Optical Character Recognition (OCR), enhance the extracted text, provide translation capabilities, and allow users to query the content and export it in various formats. The Service utilizes third-party APIs and custom machine learning models. You acknowledge that AI and OCR technologies may not be 100% accurate and results may contain errors or require review.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. User Accounts</h2>
        <p className="mb-4">
          [Include if you have user registration:] To access certain features, you may need to register for an account. You agree to provide accurate information and keep your account credentials confidential. You are responsible for all activities that occur under your account.
        </p>
        <p className="mb-4">
          [Include if no user accounts:] Currently, user accounts may not be required for basic functionality. If accounts are introduced, these terms will apply.
        </p>


        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. User Content and Responsibility</h2>
        <p className="mb-2">
          You are solely responsible for the documents, images, and any other content you upload or submit to the Service ("User Content").
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>
            <strong>Ownership:</strong> You retain ownership of your original User Content and the resulting digitized text generated specifically for you by the Service.
          </li>
          <li>
            <strong>License to Us:</strong> By uploading User Content, you grant {websiteName} a limited, worldwide, non-exclusive, royalty-free license to use, reproduce, modify (e.g., process through APIs), display, and distribute your User Content solely for the purpose of providing and improving the Service as requested by you. This license terminates when you delete your User Content or account [Adjust if content is stored differently or used for training with consent].
          </li>
          <li>
            <strong>Permissions and Rights:</strong> You represent and warrant that you have all necessary rights, licenses, consents, and permissions to upload your User Content and grant us the license described above. You agree that your User Content will not infringe upon any third party's rights, including copyright, trademark, privacy, publicity, or other personal or proprietary rights.
          </li>
          <li>
            <strong>Prohibited Content:</strong> You agree not to upload any User Content that is illegal, harmful, infringing, defamatory, obscene, or otherwise objectionable.
          </li>
          <li>
            <strong>Indemnification:</strong> You agree to indemnify and hold harmless {websiteName} and {companyInfo} from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to your User Content or your violation of these Terms.
          </li>
          <li>
              <strong>[Community Feature - Add details if implemented]:</strong> If you choose to share User Content via the Community feature, you grant additional licenses as specified in the Community guidelines, and you remain responsible for ensuring you have the rights to share that content publicly.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Acceptable Use</h2>
        <p className="mb-2">You agree not to use the Service:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li>In any way that violates any applicable local, state, national, or international law or regulation.</li>
          <li>To engage in any fraudulent activity or purpose.</li>
          <li>To transmit spam or other unsolicited communications.</li>
          <li>To interfere with or disrupt the servers or networks connected to the Service.</li>
          <li>To attempt to gain unauthorized access to the Service or user accounts.</li>
          <li>To reverse engineer, decompile, or disassemble any portion of the Service.</li>
        </ul>


        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of {websiteName} / {companyInfo} and its licensors. The Service is protected by copyright, trademark, and other laws of both {governingLaw} and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Third-Party Services</h2>
        <p className="mb-4">
          The Service integrates with and relies upon third-party APIs (including but not limited to Google Cloud Vision, Google Translate, Google Gemini, Microsoft Azure Vision, Amazon Textract). Your use of the Service is also subject to the terms and conditions and privacy policies of these third-party providers. We are not responsible for the performance, accuracy, or practices of these third-party services.
        </p>


        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Disclaimers</h2>
        <p className="mb-4">
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE RESULTS OBTAINED FROM THE USE OF THE SERVICE (INCLUDING OCR ACCURACY, TRANSLATIONS, OR AI-GENERATED INSIGHTS) WILL BE ACCURATE, RELIABLE, COMPLETE, OR ERROR-FREE. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Limitation of Liability</h2>
        <p className="mb-4">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {websiteName}, {companyInfo}, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE (INCLUDING INACCURACIES IN PROCESSED DATA); AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
        </p>
        {/* Optional: Add a cap on direct damages if desired/required by law */}

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account [if applicable], you may simply discontinue using the Service or follow account deletion procedures if provided.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10. Governing Law and Dispute Resolution</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of {governingLaw}, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in {jurisdiction} to resolve any legal matter arising from these Terms.
        </p>
        {/* Consider adding an arbitration clause if preferred */}

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">11. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least [e.g., 15 or 30] days' notice prior to any new terms taking effect, likely by posting on the website or via email [Specify method]. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12. Contact Us</h2>
        <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
        <p>Email: <a href={`mailto:${contactEmail}`} className="text-orange-600 hover:underline">{contactEmail}</a></p>
        

        <div className="text-center text-gray-500 text-xs mt-6 mb-4">
          &copy; {new Date().getFullYear()} {websiteName}. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;