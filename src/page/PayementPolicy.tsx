import * as React from "react";
import Container from "../components/Container";
import bg from "../assets/image-bg.webp";

const PaymentPolicy = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold">Payment Policy </h1>
      </div>

      <Container>
        <div className="shadow-2xl p-5 sm:p-8 my-20 bg-white rounded-xl leading-12">
          <h2 className="text-2xl sm:text-3xl text-center text-[#21bcfe] font-bold leading-snug mb-4">
            EDUTECH ERA – PAYMENT POLICY
          </h2>

          <p className="text-base text-center text-[#374151] mb-6">
            This Payment Policy (“Policy”) governs all payments made towards the
            purchase of the EDUTECH ERA Tablet (“Device”) and subscription to
            associated educational services (“Services”) provided by Virtual
            Filaments Private Limited (“We”, “Us”, “Our”). By proceeding with a
            payment, whether in full or via EMI, the customer acknowledges they
            have read, understood, and agreed to be bound by the terms outlined
            herein.
          </p>

          <div className="text-base leading-relaxed text-black space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                1. Accepted Payment Methods
              </h3>

              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6">
                We accept the following payment modes for purchases and
                renewals:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-[#374151] leading-10">
                <li>Credit Cards (Visa, MasterCard, RuPay, etc.)</li>
                <li>Debit Cards</li>
                <li>UPI (Unified Payments Interface)</li>
                <li>Net Banking</li>
                <li>Mobile Wallets</li>
                <li>EMI (Equated Monthly Installments)</li>
              </ul>
              <p className="mt-2 text-[#374151]">
                All payments must be made in Indian Rupees (INR).
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                2. One-Time Purchase / Full Payment
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151] leading-10">
                <li className="text-base">
                  <span className="text-xl font-bold block">2.1</span>A
                  one-time, upfront payment can be made for the Device, which
                  includes preloaded educational content and standard warranty.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    2.2
                  </span>
                  Additional charges such as taxes, handling fees, or delivery
                  costs (if applicable) will be displayed at checkout.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    2.3
                  </span>
                  The Customer shall have the option to make a one-time full
                  payment in the amount of Rs. 64,990/- (Indian Rupees
                  Sixty-Four Thousand Nine Hundred Ninety Only) for the EduTech
                  ERA tablet.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    2.4
                  </span>
                  Upon the Company’s receipt of the fullבעpayment, and subject
                  to verification, the product shall be delivered to the
                  Customer. Additionally, the content preloaded on the tablet
                  shall be unlocked and remain accessible to the Customer for
                  the duration of the license term, which shall be for lifetime
                  access unless otherwise stated in the applicable license
                  agreement or terms of use.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block">2.5</span>
                  By making the full payment, the Customer acknowledges and
                  agrees to the license terms applicable to the educational
                  content, which remains the exclusive intellectual property of
                  Virtual Filaments Private Limited.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                3. Annual Subscription
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    3.1
                  </span>
                  A one-time, upfront payment can be made for the Device, which
                  includes preloaded educational content and standard warranty.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    3.2
                  </span>
                  Additional charges such as taxes, handling fees, or delivery
                  costs (if applicable) will be displayed at checkout.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    3.3
                  </span>
                  The Customer shall have the option to make a one-time full
                  payment in the amount of Rs. 64,990/- (Indian Rupees
                  Sixty-Four Thousand Nine Hundred Ninety Only) for the EduTech
                  ERA tablet.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    3.4
                  </span>
                  Upon the Company’s receipt of the fullבעpayment, and subject
                  to verification, the product shall be delivered to the
                  Customer. Additionally, the content preloaded on the tablet
                  shall be unlocked and remain accessible to the Customer for
                  the duration of the license term, which shall be for lifetime
                  access unless otherwise stated in the applicable license
                  agreement or terms of use.
                </li>
                <li className="text-base">
                  <span className="text-xl font-bold block">3.5</span>
                  By making the full payment, the Customer acknowledges and
                  agrees to the license terms applicable to the educational
                  content, which remains the exclusive intellectual property of
                  Virtual Filaments Private Limited.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                4. EMI Payment / Installment Payment Option
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6">
                The Customer shall have the option to make the payment for the
                EduTech ERA tablet via an installment plan ("EMI Payment
                Option"), subject to the terms and conditions set forth herein.
                The EMI Payment Option shall consist of the following
                components:
              </p>
              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">
                    4.1 Down Payment
                  </h1>
                  <p className="mb-2 leading-10">
                    The Customer agrees to pay a down payment of Rs. 19,990/-
                    (Nineteen Thousand Nine Hundred Ninety Only), which
                    includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 leading-10">
                    <li>
                      The First EMI installment of Rs. 4,990/- (Four Thousand
                      Nine Hundred Ninety Only).
                    </li>
                    <li>
                      Initial registration and activation charges associated
                      with the product.
                    </li>
                  </ul>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    4.2 Remaining EMI Payments
                  </h1>
                  <p className="mb-2">
                    Following the down payment, the Customer shall pay 11 equal
                    monthly installments of Rs.4, 990/- (Four Thousand Nine
                    Hundred Ninety Only) each.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      The EMI payments are to be made on or before the due date
                      of each subsequent month, starting from the date of
                      purchase.
                    </li>
                    <li>
                      The EMI schedule shall be outlined in a payment schedule
                      provided to the Customer at the time of purchase,
                      detailing the dates and amounts due for each installment.
                    </li>
                  </ul>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    4.3 Total Payable Amount
                  </h1>
                  <p className="mb-2">
                    The total payable amount via the EMI option shall be
                    Rs.74,870/- (Seventy-Four Thousand Eight Hundred Seventy
                    Only), which includes the down payment of Rs. 19,990/- and
                    the 11 monthly installments of Rs. 4,990/- each (Rs.19,990 +
                    11 x Rs.4,990).
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    4.4 Payment Methods
                  </h1>
                  <p className="mb-2">
                    The Customer may make the EMI payments through the following
                    approved methods:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>UPI (Unified Payments Interface)</li>
                    <li>Online Banking</li>
                    <li>Post-Dated Cheques</li>
                    <li>Auto-Debit Facility</li>
                    <li>Or any other mutually agreed payment method</li>
                  </ul>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    4.5 Late Payment & Penalties
                  </h1>
                  <p className="mb-2">
                    If the Customer fails to make a payment by the due date for
                    any EMI, the following shall apply:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      A grace period of 5 calendar days shall be provided from
                      the due date.
                    </li>
                    <li>
                      If the EMI payment is not made within the grace period, a
                      penalty of Rs.250 per missed EMI may be imposed for
                      administrative costs and reconnection charges.
                    </li>
                    <li>
                      In case of repeated non-payment or delayed payments, the
                      Company reserves the right to:
                    </li>
                    <li>
                      I. Lock the educational content on the EduTech ERA tablet
                      until the outstanding EMI is cleared.
                    </li>
                    <li>
                      II. Demand the payment of any missed EMI(s) along with the
                      current month's EMI in the next billing cycle.
                    </li>
                    <li>
                      III. Permanently lock the educational content or initiate
                      legal recovery proceedings as deemed necessary by the
                      Company.
                    </li>
                    <li>
                      IV. The Customer acknowledges and agrees that the Company
                      may take all necessary actions to recover any outstanding
                      dues, including engaging collection agencies or legal
                      action at the sole discretion of the Company.
                    </li>
                  </ul>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    4.6 Cancellation of EMI Option
                  </h1>
                  <p className="mb-2">
                    The Customer may not unilaterally cancel the EMI Payment
                    Option once the initial down payment has been made. Should
                    the Customer default on the EMI payments, the Company
                    reserves the right to cancel the payment arrangement and
                    take action in accordance with the provisions stated in this
                    agreement, including but not limited to suspension of access
                    to content or recovery of dues.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                5. EMI Payment Terms
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6">
                The Customer agrees to make EMI payments through the approved
                modes of payment, which may include, but are not limited to, UPI
                (Unified Payments Interface), online banking, post-dated
                cheques, or auto-debit facilities, or any other mutually agreed
                method of payment as determined by the Company.
              </p>
              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    5.1 Payment Methods
                  </h1>
                  <p className="mb-2">
                    The Customer agrees to make EMI payments through the
                    approved modes of payment, which may include, but are not
                    limited to, UPI (Unified Payments Interface), online
                    banking, post-dated cheques, or auto-debit facilities, or
                    any other mutually agreed method of payment as determined by
                    the Company.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    5.2 Grace Period
                  </h1>
                  <p className="mb-2">
                    A grace period of 5 (five) calendar days shall be granted
                    after each EMI due date. During this grace period, the
                    Customer may still make the payment without incurring
                    penalties. After the expiration of the grace period, the
                    payment shall be considered overdue, and the consequences
                    outlined in this agreement shall apply.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    5.3 Non-Payment or Payment Failure Beyond Grace Period
                  </h1>
                  <p className="mb-2">
                    In the event that the Customer fails to make a payment
                    beyond the grace period or in the case of a payment failure,
                    the following conditions shall apply:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      I. Content Locking: The Company reserves the right to
                      automatically lock the EduTech ERA tablets preloaded
                      educational content, rendering it inaccessible to the
                      Customer until the outstanding EMI payment is cleared in
                      full.
                    </li>
                    <li>
                      II. Outstanding Payment Obligation: The Customer shall be
                      liable to pay the missed EMI along with the current
                      month's EMI in the following billing cycle. The Customer
                      agrees to make full payment of the outstanding amount
                      before content is unlocked.
                    </li>
                    <li>
                      III. Penalty Charges: The Company may impose a penalty of
                      Rs.250 (Two Hundred Fifty Only) for each missed EMI
                      payment. This penalty shall cover administrative and
                      reconnection charges related to missed payments and the
                      process of unlocking the content.
                    </li>
                    <li>
                      IV. Repeated Non-Payment: If the Customer fails to make
                      payments for multiple consecutive months, the Company
                      reserves the right to:
                    </li>
                    <li>
                      a. Permanently lock the educational content on the EduTech
                      ERA tablet, effectively terminating the Customer’s access
                      to the product.
                    </li>
                    <li>
                      b. Initiate legal recovery action to recover any
                      outstanding dues, including but not limited to engaging
                      debt collection agencies or pursuing legal remedies in
                      accordance with applicable laws.
                    </li>
                    <li>
                      c. Cancel or terminate the Customer's EMI Payment Option
                      and demand immediate payment of the full outstanding
                      amount due, including any penalties and overdue amounts.
                    </li>
                  </ul>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    5.4 Termination of Services
                  </h1>
                  <p className="mb-2">
                    In the event that the Customer defaults on payment for an
                    extended period, or if legal recovery actions are pursued,
                    the Company reserves the right to terminate all services
                    related to the EduTech ERA tablet, including but not limited
                    to access to preloaded content, future software updates, and
                    technical support, without any further liability to the
                    Company.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    5.5 Waiver of Grace Period and Penalty
                  </h1>
                  <p className="mb-2">
                    The Company may, at its sole discretion, choose to waive or
                    modify the grace period or penalty provisions in exceptional
                    circumstances, provided that such a waiver or modification
                    is confirmed in writing by the Company and does not
                    constitute a precedent or future obligation.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                6. Payment Confirmation
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <span className="text-xl font-bold block leading-10">
                    6.1
                  </span>
                  A Upon successful payment, a confirmation receipt will be sent
                  via SMS and/or email.
                </li>
                <li className="text-base leading-10">
                  <span className="text-xl font-bold block">6.2</span>
                  If you do not receive confirmation within 24 hours, please
                  contact our customer support (info@virtualfilaments.com).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                7. Pricing & Taxes
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base leading-10">
                  <span className="text-xl font-bold block">7.1</span>A Prices
                  displayed are inclusive of applicable GST and other statutory
                  levies unless stated otherwise.
                </li>
                <li className="text-base leading-10">
                  <span className="text-xl font-bold block">7.2</span>
                  We reserve the right to change pricing or offer discounts at
                  our sole discretion, without prior notice.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                8. Refund & Cancellation Policy
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6 leading-10">
                The Customer shall have the option to make the payment for the
                EduTech ERA tablet via an installment plan ("EMI Payment
                Option"), subject to the terms and conditions set forth herein.
                The EMI Payment Option shall consist of the following
                components:
              </p>
              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">8.1 Devices</h1>
                  <p className="mb-2">
                    No refunds will be processed once the device is activated or
                    used the EduTech ERA tablet and its content are
                    non-refundable and non-returnable except in the case of
                    manufacturing defects under warranty. In case of
                    manufacturing defect, the tablet is covered under a 12-month
                    limited warranty.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">
                    8.2 Subscriptions
                  </h1>
                  <p className="mb-2">
                    No cancellations or refunds will be granted once the
                    subscription is activated.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">8.3</h1>
                  <p className="mb-2">
                    In case of a verified technical fault or service failure on
                    our end, compensation will be handled on a case-by-case
                    basis.
                  </p>
                </li>

                <li className="text-baseleading-10">
                  <h1 className="text-xl font-bold block mb-2">8.4</h1>
                  <p className="mb-2">
                    No cancellation or refund shall be entertained post
                    activation, except as required under applicable consumer
                    protection laws.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                9. Ownership and License
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">9.1 </h1>
                  <p className="mb-2 leading-10">
                    The physical tablet device shall remain the property of the
                    Customer upon delivery and activation.
                  </p>
                </li>

                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">9.2</h1>
                  <p className="mb-2 leading-10">
                    The AI-based educational content is licensed, not sold. All
                    intellectual property rights belong to Virtual Filaments
                    Private Limited.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">9.3</h1>
                  <p className="mb-2 leading-10">
                    The license is non-transferable, non-commercial, and
                    intended solely for personal educational use by the
                    registered students.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                10. Product Delivery and Activation
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">10.1 </h1>
                  <p className="mb-2 leading-10">
                    Delivery of the tablet will be initiated within 7 working
                    days after payment confirmation.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">10.2</h1>
                  <p className="mb-2">
                    Activation of content will be completed at the time of
                    delivery or remotely via secure authentication.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">10.3</h1>
                  <p className="mb-2">
                    For EMI customers, content will be configured for monthly
                    license unlock based on payment status.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                11. Failed or Declined Transactions
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">11.1 </h1>
                  <p className="mb-2 leading-10">
                    Please retry with a different payment method or contact your
                    bank/payment provider. If amount is deducted from your
                    account then wait for 24-78 hours.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">11.2</h1>
                  <p className="mb-2">
                    We are not responsible for failed transactions due to
                    incorrect card details, expired cards, insufficient funds,
                    or system outages.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                12. Legal Provisions
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6 leading-10">
                All disputes arising out of this agreement shall be governed by
                the laws of India. Jurisdiction for any legal proceedings shall
                exclusively lie with the courts in Ahmedabad, Gujarat.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                13. Declaration by Customer
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-6 leading-10">
                By making the payment (full or partial), the Customer confirms
                that:
              </p>

              <ul className="list-disc ml-6 my-3 space-y-4 text-[#374151]">
                <li className="text-base">
                  <h1 className="text-xl font-bold block mb-2">13.1 </h1>
                  <p className="mb-2 leading-10">
                    The details provided are accurate and verifiable.
                  </p>
                </li>

                <li className="text-base leading-10">
                  <h1 className="text-xl font-bold block mb-2">13.2</h1>
                  <p className="mb-2">
                    The Customer understands and agrees to the EMI obligations.
                  </p>
                </li>

                <li className="text-base ">
                  <h1 className="text-xl font-bold block mb-2">13.3</h1>
                  <p className="mb-2">
                    The Customer agrees to the consequences of non-payment,
                    including content lock and recovery action.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                14. Contact & Support
              </h3>
              <hr className="border-0.5  border-gray-300" />

              <p className="text-[#374151] my-4">
                For any billing queries, subscription renewals, EMI assistance,
                or support, reach us through:
              </p>

              <p className="text-[#374151] my-4">
                Email:{" "}
                <a
                  href="support@edutechera.com"
                  target="_blank"
                  className="text-[#004aad]"
                >
                  support@edutechera.com
                </a>
              </p>

              <p className="text-[#374151] my-4">
                Support Ticket: Through the “Technical Support” option in your
                tablet
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentPolicy;
