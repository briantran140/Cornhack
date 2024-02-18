"use client";
import Chart from "./components/chart";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="spacer"></div>
        <div className="medium-text">
          1 in 100 college students attempts to commit suicide.
        </div>
        <div className="medium-text">
          Only 30% of students actually reaches out for help from a licensed
          therapist or counselor.
        </div>
        <div className="big-text">END THE STIGMA</div>
        <div className="big-text">BEAT THE ODDS</div>
      </div>
      <div className="content">
        <div className="separator"></div>
        <div className="stat-box">
          <div className="blurb">
            Mental health holds paramount significance, particularly among
            college students, as it profoundly influences overall well-being and
            academic success. The provided data, revealing high prevalence rates
            of major depression, anxiety disorders, and other mental health
            challenges, underscores the pressing need for comprehensive support
            systems within educational institutions. The profound impact of
            mental health on cognitive function and emotional resilience
            directly implicates academic performance, interpersonal
            relationships, and long-term life outcomes. The concerning
            prevalence of mental health issues among college students elucidates
            the imperative for heightened awareness, destigmatization, and
            robust mental health infrastructure within academic settings. By
            recognizing and addressing these challenges, institutions can foster
            an environment that not only prioritizes academic achievement but
            also nurtures the holistic well-being of their student populace.
          </div>
          <div className="chart">
            <Chart />
          </div>
        </div>
        <div className="separator"></div>
        <div className="mission">
          <h3 className="head">Our Mission</h3>
          <p>
            Student Support Net empowers individuals to thrive in their mental
            health journey. In a challenging world, our supportive online
            platform offers solace, connection, and resources for college
            students facing mental health struggles. By fostering empathy,
            understanding, and resilience within our community, we aim to break
            down barriers, challenge stigma, and inspire hope. Together, we
            create a space where each individual feels valued, supported, and
            equipped with the tools to overcome adversity and embrace their full
            potential.
          </p>
        </div>
        <div className="separator"></div>
      </div>
    </>
  );
}
