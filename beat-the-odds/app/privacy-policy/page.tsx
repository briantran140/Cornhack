import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="alt-spacer"></div>
      <div className="alt-spacer"></div>
      <Head>
        <title>Privacy Policy - Student Support Net</title>
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <div className="max-w-lg mx-auto">
          <p className="mb-4 text-center">
            This Privacy Policy describes how Student Support Net ("we", "us", or "our") collects, uses, and shares personal information when you use our website.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Information We Collect</h2>
            <p className="list-disc pl-6 text-center">
              We may collect personal information such as your name, email address, and browsing activity when you interact with our website.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">How We Use Your Information</h2>
            <p className="list-disc pl-6 text-center">
                We use the information we collect to provide and improve our services, communicate with you, and personalize your experience on our website.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Information Sharing</h2>
            <p className="list-disc pl-6 text-center">
                We may share your personal information with third-party service providers that assist us in operating our website and providing our services.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Security</h2>
            <p className="list-disc pl-6 text-center">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Changes to This Privacy Policy</h2>
            <p className="list-disc pl-6 text-center">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Contact Us</h2>
            <p className="list-disc pl-6 text-center">
                If you have any questions or concerns about our Privacy Policy, please contact us at help@stusupportnet.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
