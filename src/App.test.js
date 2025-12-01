import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold">Suman Yadav</h1>
        <p className="text-lg mt-2">Software Engineer | Java & Spring Boot Developer</p>
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <a href="https://www.linkedin.com/in/suman-yadav-83b076346/" className="underline">LinkedIn</a>
          <a href="https://github.com/sumany-code" className="underline">GitHub</a>
          <a href="mailto:sumanyadav56671@gmail.com" className="underline">Email</a>
        </div>
      </header>

      {/* Summary */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow mb-8 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold mb-3">Summary</h2>
        <p>
          Software Engineer with 3+ years of experience building scalable backend systems using Java,
          Spring Boot, Microservices, and Azure. Skilled in performance tuning, containerization,
          distributed system design, and writing clean, test-driven code.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow mb-8 text-sm">
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Java", "J2EE","XML/JSON","Spring Boot", "System Design","Data Structures & Algorims","Microservices Architecture","OOPs","RESTAPI","Design Patterns","SQL", "PostgreSQL", "Azure", "Kafka", "Docker", "Kubernetes","Agile Methodology","SDLC", "CI/CD","JUnit","Mockito"].map(skill => (
            <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow mb-8 text-sm">
        <h2 className="text-xl font-semibold mb-3">Projects</h2>

        <div className="mb-5">
          <h3 className="font-semibold">Log Monitoring Application</h3>
          <p className="mt-1">Full‑stack real‑time log monitoring tool using Spring Boot & React (100GB+ file support).</p>
          <a href="https://github.com/sumany-code/LogMonitor" className="underline text-blue-600">GitHub</a>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold">Expense Tracker</h3>
          <p className="mt-1">SpringBoot‑based expense tracker with CRUD features,job scheduling,alert generation.</p>
          <a href="https://github.com/sumany-code/expense-tracker-project" className="underline text-blue-600">GitHub</a>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold">OTP Authentication Microservice</h3>
          <p className="mt-1">Spring Boot microservice integrating Plivo & Exotel with Circuit Breaker for reliability.</p>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow mb-8 text-sm">
        <h2 className="text-xl font-semibold mb-3">Experience</h2>
        <h3 className="font-semibold">Software Engineer – HCLTech</h3>
        <p className="text-gray-600 text-xs">Aug 2022 – Present | Hyderabad</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Migrated monolithic architecture to microservices using DDD.</li>
          <li>Improved API performance by 40% through query optimization.</li>
          <li>Integrated Kafka for asynchronous workflows.</li>
          <li>Deployed containerized services on Azure AKS using Helm.</li>
        </ul>
      </section>

      {/* Education */}
      <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-sm mb-12">
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <p><strong>NIT Rourkela</strong> — B.Tech (2018–2022)</p>
      </section>
    </div>
  );
}
