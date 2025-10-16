import * as React from "react";
import Container from "../components/Container";
import bg from "../assets/image-bg.webp";

const Refund = () => {
  return (
    <div className="payment-policy-page">
      <div
        className="hero-section text-white text-center py-24 px-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Cancellation and Refund Policy </h1>
      </div>

      <Container>
        <div className="shadow-2xl p-5 sm:p-8 my-15 bg-white rounded-xl leading-12">
          <h2 className="text-2xl sm:text-3xl text-center text-[#21bcfe] font-bold leading-snug mb-4">
            Cancellation & Refund Policy of EDUTECH ERA
          </h2>

          <p className="text-base text-center text-[#374151] mb-6">
            Edutech ERA is committed to providing high-quality educational
            content and services to our users. This policy outlines the terms
            and conditions related to the cancellation and refund process for
            purchases made through Edutech ERA.
          </p>

          <div className="text-base leading-relaxed text-black space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">1. Cancellation Policy</h3>
              <hr className="border-0.5 border-gray-300" />
              <div className="mt-4 space-y-4">
                <h4 className="text-xl font-bold">1.1 Customer-Initiated Cancellations</h4>
                <p><strong>Timeframe for Cancellation:</strong><br />
                  Orders for physical products can be cancelled within <strong>24 hours of order placement</strong> or before dispatch.<br />
                  Orders for digital products can only be cancelled if the activation key has not been accessed.
                </p>
                <p><strong>Process:</strong> Submit a written cancellation request via email at <a href="mailto:support@edutechera.com" className="text-blue-600 underline">support@edutechera.com</a> with your order ID and reason for cancellation.</p>
                <p><strong>Non-Cancellable situations:</strong><br />
                  Products that have already been shipped or downloaded.<br />
                  Custom or personalized orders.<br />
                  Digital content where the activation key has been accessed.
                </p>

                <h4 className="text-xl font-bold">1.2 Company-Initiated Cancellations</h4>
                <p>EDUTECH ERA reserves the right to cancel orders due to:<br />
                  Product unavailability.<br />
                  Errors in pricing or technical glitches.<br />
                  Failure to verify customer details.
                </p>
                <p>Customers will receive a full refund within <strong>7 working days</strong> in such cases.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">2. Refund Policy</h3>
              <hr className="border-0.5 border-gray-300" />
              <div className="mt-4 space-y-4">
                <h4 className="text-xl font-bold">2.1 Refund Eligibility</h4>
                <p><strong>Defective or Damaged Products:</strong><br />
                  Notify EDUTECH ERA within <strong>48 hours of receiving the product</strong>.<br />
                  Upon validation, replacements or refunds will be processed.
                </p>
                <p><strong>Digital Content:</strong><br />
                  Refunds are <strong>not applicable</strong> once the activation key is accessed or utilized.<br />
                  Refunds are only considered for technical issues on our end.
                </p>

                <h4 className="text-xl font-bold">2.2 Refund Process</h4>
                <p><strong>Request:</strong> Email <a href="mailto:support@edutechera.com" className="text-blue-600 underline">support@edutechera.com</a> with ID, proof of payment, and reason for the refund.</p>
                <p><strong>Verification:</strong> The team validates requests within <strong>2–3 working days</strong>.</p>
                <p><strong>Processing:</strong> Approved refunds are credited within <strong>7–10 working days</strong>.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">3. Steps for Cancellation and Refund</h3>
              <hr className="border-0.5 border-gray-300" />
              <ol className="list-decimal ml-6 mt-4 space-y-2">
                <li><strong>Submit Request:</strong> Contact us via email at <a href="mailto:support@edutechera.com" className="text-blue-600 underline">support@edutechera.com</a> or call +91 9879791828.</li>
                <li><strong>Provide Details:</strong> Include order ID, product details, and reasons for cancellation or refund.</li>
                <li><strong>Verification:</strong> Allow 2–3 working days for our team to process and verify your request.</li>
                <li><strong>Approval/Disapproval:</strong> You will receive an update via email or call.</li>
                <li><strong>Refund Completion:</strong> Approved refunds will be processed within <strong>7–10 working days</strong>.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">4. Additional Support</h3>
              <hr className="border-0.5 border-gray-300" />
              <p className="mt-4">
                For questions or concerns, reach out to us:<br />
                <strong>Phone:</strong> +91 9879791828<br />
                <strong>Email:</strong> <a href="mailto:support@edutechera.com" className="text-blue-600 underline">support@edutechera.com</a>
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Disclaimer:</strong> EDUTECH ERA reserves the right to amend this policy without prior notice. This policy complies with consumer protection laws and ensures fairness for all parties. Transparency and customer satisfaction are our priorities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Refund;
