"use client";
import React from "react";

export default function UserAgreement() {
  return (
    <main className="bg-[#111] text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Use of Playverse</h1>

        <section>
          <h2 className="text-xl font-semibold">1. General Provisions</h2>
          <p>
            1.1. Direct Cursus Technology L.L.C, UAE, Dubai, Trade Center Second,
            The Offices 5, Unit No. FLR06-06.04-1, P.O. Box 29095 (the «Company»)
            invites an Internet user (the «User») to use Playverse gaming
            platform available at:{" "}
            <a
              href="https://playverse.com/"
              className="text-green-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://playverse.com/
            </a>{" "}
            (the «Service»).
          </p>
          <p>
            1.2 In all cases not provided for by these Terms, the relations
            between the Company and the User in connection with the use of the
            Service shall be governed by the:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              License agreement for users (
              <a
                href="https://playverse.com/license"
                className="text-green-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://playverse.com/license
              </a>
              );
            </li>
            <li>
              Privacy Policy (
              <a
                href="https://playverse.com/confidential"
                className="text-green-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://playverse.com/confidential
              </a>
              ).
            </li>
          </ul>
          <p>
            1.3. By starting to use the Service/its certain functions, the User is
            deemed to have accepted these Terms and terms of the above documents,
            in full, without any reservations and exceptions. If the User
            disagrees with any of the provisions of the said documents, the User
            may not use the Service.
          </p>
          <p>
            1.4. These Terms may be amended by Company without any prior
            notification, the new version of the Terms shall become effective upon
            its posting on the Internet at the address specified in this
            paragraph, unless otherwise provided in the new version of the Terms.
            The current version of the Terms is always available at:{" "}
            <a
              href="https://playverse.com/termsofuse"
              className="text-green-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://playverse.com/termsofuse
            </a>
            .
          </p>
          <p>
            1.5. If Company makes any amendments to these Terms in the manner
            provided for by section 1.4. of these Terms, to which the User does
            not agree, he/she shall stop using the Service.
          </p>
          <p>
            1.6. By using the Service, the User consents to receiving informational
            notices. The User may unsubscribe from the notices by using relevant
            functions of the Service or following instructions specified in a
            message received.
          </p>
        </section>

        {/* You will continue adding the other sections (2, 3, 4, 5) in the same way */}
        {/* Example snippet below for next section */}

        <section>
          <h2 className="text-xl font-semibold">
            2. User registration / authorization. User account.
          </h2>
          <p>
            2.1. In order to use some functions of the Service, the User must go
            through the registration / authorization procedure using the partner
            platforms of the Service. As a result of registration the User will
            get a unique account on the Service.
          </p>
          <p>
            2.2. During or after registration, the User can upload an image for the
            account, as well as customize the name that represent the User within
            the use of the Service. The image of the account and the customized
            name of User must comply with the requirements of paragraphs 3.7.1 —
            3.7.6 of these Terms.
          </p>
          <p>
            2.3. The User’s data received when using the Service is processed under
            the conditions specified in the Privacy Policy published at:{" "}
            <a
              href="https://playverse.com/confidential"
              className="text-green-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://playverse.com/confidential
            </a>
            .
          </p>
          {/* ... Continue with full content ... */}
        </section>

        {/* Footer links inside the page */}
        <div className="text-green-500 text-sm flex gap-6 flex-wrap mt-10 mb-6">
          <a
            href="/user-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            User agreement
          </a>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
          <a
            href="/technical-support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technical Support
          </a>
          <a
            href="/digital-services-act"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Services Act
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          Date of publication: 01.09.2023
          <br />
          © 2022—2025 Direct Cursus Technology L.L.C, UAE, Dubai, Trade Center
          Second, The Offices 5, Unit No. FLR06-06.04-1, P.O. Box 29095
        </p>
      </div>
    </main>
  );
}










