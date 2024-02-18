// pages/terms-of-service.js

import Head from 'next/head';

const TermsOfService = () => {
  return (
    <>
      <div className="alt-spacer"></div>
      <div className="alt-spacer"></div>
      <Head>
        <title>Terms of Service - Student Support Net</title>
      </Head>
      <div className="container mx-auto text-center">
        <h1 className="page-header mb-4">Terms of Service</h1>
        <div className="terms-content text-left mb-8">
          <p className="mb-4">
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Student Support Net's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>
          <p className="mb-4">
            The term 'Student Support Net' or 'us' or 'we' refers to the owner of the website whose registered office is 1313 S. 67th Avenue Omaha, NE 68182. The term 'you' refers to the user or viewer of our website.
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
            </li>
            <li className="mb-2">
              <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
            </li>
            <li className="mb-2">
              <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
            </li>
            <li className="mb-2">
              <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
            </li>
            <li className="mb-2">
              <p>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</p>
            </li>
            <li className="mb-2">
              <p>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</p>
            </li>
            <li className="mb-2">
              <p>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>
            </li>
            <li className="mb-2">
              <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of United States.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="alt-spacer"></div>
    </>
  );
};

export default TermsOfService;
