import {
  DOMAIN,
  DEVELOPER_DOMAIN,
  APP_NAME,
  MANAGER_NAME,
  DEVELOPER_NAME,
  DEVELOPER_STREET,
  DEVELOPER_CITY,
  DEVELOPER_POSTAL_CODE,
  DEVELOPER_COUNTRY,
} from "../../../constants";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service - ${APP_NAME}`,
  description: `Terms of Use for ${APP_NAME}.`,
};

export default function TermsOfService() {
  return (
    <div className="bg-body background-color text-body color p-5">
      <main className="container mx-auto">
        <h1 className="mb-6 text-4xl font-bold">
          {APP_NAME}&apos;s Terms of Service
        </h1>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">Introduction</h2>
          <p className="mb-4 text-lg">
            These terms and conditions outline the rules and regulations for the
            use of {APP_NAME}&apos;s Website, located at&nbsp;
            <Link
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${DOMAIN}`}
            >
              {DOMAIN}
            </Link>
            .
          </p>

          <p className="mb-4 text-lg">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use {APP_NAME} if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">
            Ownership of Website, Content, and Trademarks
          </h2>
          <p className="mb-4 text-lg">
            The website located at {DOMAIN} (&quot;Our Website&quot;) is owned
            and operated by {MANAGER_NAME} and {DEVELOPER_NAME} (&quot;We,&quot;
            &quot;Us,&quot; or &quot;Our&quot;). All materials featured on Our
            Website, including but not limited to text, graphics, information,
            content, images, illustrations, designs, icons, photographs, video
            clips, sounds, music, artwork, and computer code (collectively, the
            &quot;Content&quot;), as well as all copyrights, trademarks, trade
            dress, and other intellectual property rights associated with the
            Content (the &quot;Intellectual Property&quot;), are owned,
            controlled, or licensed by Us. No Content or Intellectual Property
            may be used, reproduced, or exploited in any manner without Our
            express written consent.
          </p>
          <p className="mb-4 text-lg">
            The Website and Website Content are intended solely for personal,
            non-commercial use. You may download or copy the Website Content and
            other downloadable materials displayed on the Website for your
            personal use only. No right, title or interest in any downloaded or
            copied Website Content is transferred to you as a result of any such
            downloading or copying. You may not reproduce (except as noted
            above), publish, transmit, distribute, display, perform, alter,
            modify, create derivative works from, sell or exploit or otherwise
            use any of the Website Content or the Website for any public or
            commercial purpose.
          </p>
          <p className="mb-4 text-lg">
            Certain trademarks, trade names, service marks, and logos used or
            displayed on this Website are registered and unregistered
            trademarks, trade names, and service marks owned by {MANAGER_NAME}{" "}
            and {DEVELOPER_NAME} or our affiliates. Additionally, other
            trademarks, trade names, and service marks used or displayed on this
            Website may be the registered and unregistered trademarks, trade
            names, and service marks of their respective third-party owners.
            Nothing contained on this Website should be construed as granting,
            by implication, estoppel, or otherwise, any license or right to use
            any trademarks, trade names, service marks, or logos displayed
            herein without the express written permission of {MANAGER_NAME} and{" "}
            {DEVELOPER_NAME} or such third-party owner.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">Your use of our website</h2>
          <p className="mb-4 text-lg">
            You may use our Website only as permitted by the Terms and only in a
            manner consistent with all applicable federal and
            provincial/territorial laws, rules and regulations, and generally
            accepted practices or guidelines in relevant jurisdictions,
            including any laws governing the export of data to or from your
            country.
          </p>
          <p className="mb-4 text-lg">
            You agree not to use any “deep-link”, “robot”, or other automatic or
            manual device, software, program, code, algorithm or methodology, to
            access, copy or monitor any portion of the Website or Website
            Content, or in any way reproduce or circumvent the navigational
            structure or presentation of the Website or Website Content, or
            obtain or attempt to obtain any materials or information through any
            means not purposely made available by us through the Website. We
            reserve the right to take measures to prevent any such activity.
          </p>
          <p className="mb-4 text-lg">
            You agree not to gain or attempt to gain unauthorized access to any
            portion or feature of the Website, or any other system or network
            connected to the Website or to any of our business partners&apos;
            servers, systems or networks, by hacking, “password-mining” or using
            any other illegitimate method of accessing data.
          </p>
          <p className="mb-4 text-lg">
            You agree not to probe, scan or test the vulnerability of the
            Website or any network connected to the Website, nor breach the
            security or authentication measures on the Website or any network
            connected to the Website. You agree to not reverse look-up, trace or
            seek to trace any information on any other visitor to any Website,
            or any other customer of {MANAGER_NAME} and {DEVELOPER_NAME},
            including any account that is not held by you, in any way where the
            purpose is to discover materials or information, including but not
            limited to Personal Information or other information that reasonably
            could be used to connect non-Personal Information to Personal
            Information.
          </p>
          <p className="mb-4 text-lg">
            You agree not to take any action that would cause an unreasonably or
            disproportionately large load on the infrastructure of the Website
            or our systems or networks, or any systems or networks connected to
            the Website or to us in an attempt to overwhelm our systems to
            create a “Denial of Service” or similar attack.
          </p>
          <p className="mb-4 text-lg">
            You agree not to use any device, technology or method to interfere
            or attempt to interfere with the proper functioning or features of
            the Website or any transaction occurring on the Website, or with any
            other person&apos;s use of the Website.
          </p>
          <p className="mb-4 text-lg">
            You agree not to forge headers or otherwise manipulate identifiers
            in order to disguise the origin of any message or transmittal you
            send to us on or through the Website or any service offered on or
            through the Website. You agree not to impersonate or pretend that
            you are any other person or falsely claim you represent another
            person.
          </p>
          <p className="mb-4 text-lg">
            You may use the Website for the purposes of using any features and
            services purposely provided by us on the Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">
            User Communications and User Content
          </h2>
          <p className="mb-4 text-lg">
            We value your feedback on our website, products, and services.
            However, it is our policy to not accept unsolicited creative ideas,
            suggestions, proposals, plans, or materials unless we have
            specifically requested them, such as through a contest or
            promotional event. This policy is in place to prevent potential
            misunderstandings or disputes when something we develop may seem
            similar to someone else&apos;s idea. Any communication you transmit
            or post to the website, other than personal information covered by
            our Privacy Policy, will be considered non-confidential and
            non-proprietary.
          </p>
          <p className="mb-4 text-lg">
            By transmitting any form of User Communication, you grant us the
            right to use it for any purpose, without any obligation to
            compensate you or maintain its confidentiality. We may use,
            reproduce, modify, and distribute your User Communication at our
            discretion. We also reserve the right to remove any User
            Communication that we deem inappropriate.
          </p>
          <p className="mb-4 text-lg">
            When you submit, upload, or post User Content, you grant us and our
            service providers a perpetual, irrevocable, royalty-free right to
            use your User Content as we see fit, including for marketing and
            promotional purposes. You acknowledge that your User Content may be
            processed in regions with different data protection laws, and you
            waive any rights to review, use, or compensation for such User
            Content.
          </p>
          <p className="mb-4 text-lg">
            You represent and warrant that any of the User Content you submit or
            otherwise provide to {MANAGER_NAME} & {DEVELOPER_NAME} is original
            to you, that you own all applicable legal rights in the User
            Content, and that the User Content does not and will not infringe
            upon the rights of any other person or entity and all “moral rights”
            that you may have in such User Content have been voluntarily waived
            by you. You warrant, certify and represent that any individuals
            depicted in any User Content, have reached the age of majority in
            their respective jurisdiction of residence; and you grant{" "}
            {MANAGER_NAME} & {DEVELOPER_NAME} the right to copy, edit, change,
            revise, display, perform, publish, distribute the likenesses of
            those individuals and that you have the authority to attest to this
            release on their behalf. If any of the individuals depicted in any
            User Content are minors in their respective jurisdiction of
            residence, you certify, warrant and represent that you are the
            parent or legal guardian of each such individual and you grant the
            use of the media containing his/her depiction in accordance with the
            Terms. By submitting User Content, and subject to our privacy policy
            in respect of personal information, you: (i) grant to {MANAGER_NAME}{" "}
            & {DEVELOPER_NAME} a world-wide, perpetual, irrevocable,
            transferable, sub-licensable, royalty-free, non-exclusive, and
            unrestricted license to copy, reproduce, adapt, transmit, edit,
            modify, or otherwise use, publicly display, distribute, translate
            and create compilations and derivative works from, any and all User
            Content (in any format or media) that you post on, upload or
            otherwise submit to or through, the Website; and (ii) waive all
            moral rights in and to all User Content that you post on, upload or
            otherwise submit to or through, the Website in favour of
            {MANAGER_NAME} & {DEVELOPER_NAME}. For greater certainty, this means
            that, among other things, {MANAGER_NAME} & {DEVELOPER_NAME} has the
            right to use any and all ideas you submit (including ideas about our
            products, services, publications or advertising campaigns) in any
            manner that we choose, without any notice or obligation to you
            whatsoever.
          </p>
          <p className="mb-4 text-lg">
            In addition to the User Content Rules set forth in Section below,
            you are prohibited from posting or transmitting any unlawful,
            threatening, defamatory, libelous, obscene, pornographic or profane
            material or any material that could constitute or encourage conduct
            that would be considered a criminal offense or give rise to civil
            liability, or otherwise violate any law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">User Content Rules</h2>
          <p className="mb-4 text-lg">
            If you encounter any violations of our User Content Rules or other
            unacceptable behavior by any user, please report such activity to us
            by emailing: DMCA@{DEVELOPER_DOMAIN}.
          </p>
          <p className="mb-4 text-lg">
            As a user, you are solely responsible for the User Content you post
            on our Website or transmit to other users. You agree not to hold
            {MANAGER_NAME} & {DEVELOPER_NAME} responsible for any User
            Communication or User Content from other users that you access on
            the Website. We reserve the right to remove any User Content at our
            discretion.
          </p>
          <p className="mb-4 text-lg">
            The following categories illustrate, but are not exhaustive, what
            constitutes prohibited User Content. You agree not to post or
            transmit to other users any content that:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>Is defamatory, abusive, obscene, profane, or offensive.</li>
            <li>Is known by you to be false, inaccurate, or misleading.</li>
            <li>
              Infringes on another party&apos;s intellectual property rights,
              right of publicity, or right of privacy.
            </li>
            <li>Violates any law, statute, ordinance, or regulation.</li>
            <li>
              Is threatening, harassing, or promotes racism, bigotry, hatred, or
              violence.
            </li>
            <li>Is inaccurate, false, or misleading in any way.</li>
            <li>Is illegal or promotes illegal activities.</li>
            <li>
              Promotes illegal or unauthorized copying of another person&apos;s
              copyrighted work.
            </li>
            <li>
              Contains viruses or any other computer code designed to disrupt
              the functionality of any software or hardware.
            </li>
            <li>
              Contains advertising, promotional materials, or any other form of
              unsolicited solicitation.
            </li>
          </ul>
          <p className="mb-4 text-lg">
            When using the Website, you will be exposed to User Content from
            various sources, and we are not responsible for the accuracy,
            usefulness, safety, or intellectual property rights of or relating
            to such User Content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">Additional Assistance</h2>
          <p className="mb-4 text-lg">
            If you have any questions or concerns about the Terms, please use
            our Contact section or write to us at:
            <br />
            <strong>{DEVELOPER_NAME}</strong>
            <br />
            {DEVELOPER_STREET}
            <br />
            {DEVELOPER_CITY}
            <br />
            {DEVELOPER_POSTAL_CODE}
            <br />
            {DEVELOPER_COUNTRY}
          </p>
          <p className="mb-4 text-lg">
            Please be assured that any Personal Information that you provide in
            communications to the above email and postal address will not be
            used to send you promotional materials.
          </p>
        </section>
      </main>
    </div>
  );
}
