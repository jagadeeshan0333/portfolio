// import React, { useState, useRef, useEffect } from "react";

// // Resume content extracted from the provided PDF
// const resumeContent = `
// JAGADEESHAN D
// FULL-STACK DEVELOPER

// CONTACT
// +919600259870
// jagadeeshanappu0333@gmail.com
// Dharmapuri, Tamil Nadu
// Jagadeeshan D

// EDUCATION
// 2019 - 2023
// PANIMALAR ENGINEERING COLLEGE
// - Bachelor of Engineering
// - CGPA: 8.89

// SKILLS
// BACKEND DEVELOPMENT
// - Node.js
// - Express.js
// - Python
// - MySQL
// - Sequelize
// - Session & Cookie-based Authentication
// - RESTful API Development

// FRONTEND DEVELOPMENT
// - React.js
// - HTML5, CSS3
// - Tailwind CSS
// - JavaScript
// - Vite
// - Lazy Loading Techniques
// - SEO Optimization

// BLOCKCHAIN
// - Smart Contract Integration
// - NFT Issuance
// - IPFS for Decentralized Storage

// AI & AUTOMATION
// - N8n AI Agents
// - Ollama (Local AI Execution on Linux)
// - AI Workflow Automation

// CLOUD & DEVOPS
// - AWS EC2 & S3
// - Server Setup & Management
// - Cloudflare (DDoS Protection & DNS)
// - Linux Server Handling
// - Git, Bitbucket, Jira

// MARKETING & ANALYTICS
// - Google Ads
// - Meta Ads
// - Social Media Marketing (SMM)
// - SEO Best Practices

// PROFILE
// Full-Stack Developer with over 2 years of experience at FABC LLC, specializing in building scalable web applications using React, Node.js, Python, and blockchain technologies. Proficient in integrating smart contracts, optimizing website performance through lazy loading and SEO, and deploying secure cloud infrastructure with AWS and Cloudflare. Adept at leveraging AI tools like N8n and Ollama to enhance productivity and streamline workflows.

// WORK EXPERIENCE
// FABC LLC
// 2023 - PRESENT
// Full-stack Developer
// Learning Management System (LMS)
// Developed a blockchain-based LMS backend with Node.js and MySQL, implementing user authentication, course management, and NFT certificate issuance. Optimized API response time by 30% using sequelize ORM and lazy loading techniques.
// Recruiter Management System (RMS)
// Developed the backend for a blockchain-based recruitment platform with a skill marketplace, NFT-based CVs, LMS, integrated DNA skill mapping, and secure user validation.
// ICO Projects
// Contributed to the development and implementation of multiple Initial Coin Offering (ICO) projects.
// Healthcare Web Apps (IPFS Storage)
// Developed and maintained healthcare-focused websites, integrating IPFS for secure storage of sensitive patient data such as medical and DNA reports.
// Real-Time Troubleshooting
// Mitigated a major DDoS attack by configuring Cloudflare's security settings, ensuring 99.9% uptime.

// PROJECTS
// AI-Driven Productivity
// Utilized N8n AI agents to automate repetitive tasks, reducing manual workload by 20%. Ran Ollama on a Linux system to support local AI model testing, improving development efficiency.
// E-Commerce Platform
// Developed a full-stack e-commerce platform using React, Node.js, and MySQL with Sequelize ORM. Implemented lazy loading and SEO, improving page load time by 35% and search ranking by 20%. Deployed on AWS EC2 with S3 for media storage.
// Applicant Tracking System (ATS)
// Developed a custom ATS to streamline hiring processes using Node.js, React, and MySQL; implemented keyword parsing, resume ranking, and smart filtering to assist HR workflows.
// SEO & Marketing
// Enhanced website visibility by implementing SEO best practices, achieving a 15% increase in organic traffic. Managed Google Ads and Meta Ads campaigns, boosting user engagement by 10%.
// Automated Garbage Collector
// Engineered an IoT and RFID-based system for automated garbage collection, reducing operational costs by 15%.
// Self-Driving Car using OpenCV and Machine Learning
// Developed a prototype self-driving car using computer vision and machine learning algorithms.

// KEY ACHIEVEMENTS
// - Improved website performance by 35% by implementing lazy loading and hosting assets on AWS S3 buckets for efficient content delivery.
// - Secured user authentication by implementing cookies and session management, ensuring robust access control in web applications.
// - Boosted productivity by 20% by creating AI agents in N8n to automate repetitive tasks and streamline workflows.
// - Enhanced API response time by 30% through the integration of Sequelize ORM methods in Node.js applications.
// `;

// const GEMINI_API_KEY = "AIzaSyBkeVPYl_X9AkKvx_FDlQZ-Y_idcIuEkBo"; 
// const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// const TypingLoader = () => (
//   <div style={{ display: "flex", alignItems: "center", height: 24 }}>
//     <span
//       style={{
//         display: "inline-block",
//         width: 6,
//         height: 6,
//         margin: "0 2px",
//         background: "var(--chat-accent)",
//         borderRadius: "50%",
//         animation: "typing-bounce 1s infinite alternate",
//       }}
//     />
//     <span
//       style={{
//         display: "inline-block",
//         width: 6,
//         height: 6,
//         margin: "0 2px",
//         background: "var(--chat-secondary)",
//         borderRadius: "50%",
//         animation: "typing-bounce 1s 0.2s infinite alternate",
//       }}
//     />
//     <span
//       style={{
//         display: "inline-block",
//         width: 6,
//         height: 6,
//         margin: "0 2px",
//         background: "var(--chat-primary)",
//         borderRadius: "50%",
//         animation: "typing-bounce 1s 0.4s infinite alternate",
//       }}
//     />
//     <style>
//       {`
//         @keyframes typing-bounce {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-7px); }
//         }
//       `}
//     </style>
//   </div>
// );

// const FloatingChat = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hey there! What's up? I'm Jagadeeshan D, happy to chat. Ask me anything about my skills, experience, or projects! 😎" },
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     if (open && chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, open, typing]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { from: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");
//     setTyping(true);

//     try {
//       const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: `You are a portfolio chatbot speaking as Jagadeeshan D, a Full-Stack Developer. Use "I" to refer to Jagadeeshan and start every response with "Hey there! What's up? I'm Jagadeeshan D, happy to chat." Adopt a professional yet fun and friendly tone, like chatting with a colleague. When asked about skills, projects, or achievements, provide answers in a structured format with **bold category headings** and bullet points, exactly like this example:

// Example for skills:
// Hey there! What's up? I'm Jagadeeshan D, happy to chat. Here's a breakdown:
// **Backend Development:** Node.js, Express.js, Python, MySQL, Sequelize, RESTful API Development, Session & Cookie-based Authentication.
// **Frontend Development:** React.js, HTML5, CSS3, Tailwind CSS, JavaScript, Vite, Lazy Loading Techniques, SEO Optimization.
// **Blockchain:** Smart Contract Integration, NFT Issuance, IPFS for Decentralized Storage.
// **AI & Automation:** N8n AI Agents, Ollama (Local AI Execution on Linux), AI Workflow Automation.
// **Cloud & DevOps:** AWS EC2 & S3, Server Setup & Management, Cloudflare (DDoS Protection & DNS), Linux Server Handling, Git, Bitbucket, Jira.
// **Marketing & Analytics:** Google Ads, Meta Ads, Social Media Marketing (SMM), SEO Best Practices.
// Let me know if you'd like to know more about any specific area!

// Base all responses solely on the resume content below, and keep them concise and engaging. If the query is unrelated to my professional background, politely say you can only answer about my skills, experience, or projects, like: "Hey there! What's up? I'm Jagadeeshan D, happy to chat. I can only talk about my skills, experience, or projects, so hit me with one of those! 😄"

// Resume Content:
// ${resumeContent}

// User Query: ${input}`,
//                 },
//               ],
//             },
//           ],
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch response from Gemini API");
//       }

//       const data = await response.json();
//       const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Hey there! What's up? I'm Jagadeeshan D, happy to chat. I can only talk about my skills, experience, or projects, so hit me with one of those! 😄";

//       setMessages([...newMessages, { from: "bot", text: botResponse }]);
//     } catch (error) {
//       console.error("Error fetching Gemini API:", error);
//       setMessages([
//         ...newMessages,
//         { from: "bot", text: "Oops, my code’s having a coffee break! 😅 Try asking about my skills or projects!" },
//       ]);
//     } finally {
//       setTyping(false);
//     }
//   };

//   const handleInputKeyDown = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           position: "fixed",
//           bottom: "30px",
//           right: "30px",
//           background: "linear-gradient(135deg, var(--chat-primary), var(--chat-secondary), var(--chat-accent))",
//           color: "#fff",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
//           fontSize: "28px",
//           cursor: "pointer",
//           zIndex: 1000,
//         }}
//         aria-label="Open chat"
//       >
//         💬
//       </button>
//       {open && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "100px",
//             right: "30px",
//             width: "340px",
//             background: "#fff",
//             borderRadius: "18px",
//             boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
//             padding: "0",
//             zIndex: 1000,
//             display: "flex",
//             flexDirection: "column",
//             overflow: "hidden",
//             border: "2px solid #f8e71c",
//           }}
//         >
//           <div
//             style={{
//               background: "linear-gradient(135deg, #ff6b6b, #f8e71c, #50e3c2)",
//               color: "#fff",
//               padding: "16px",
//               fontWeight: "bold",
//               fontSize: "18px",
//               letterSpacing: 1,
//             }}
//           >
//             Chat with Me!
//             <button
//               onClick={() => setOpen(false)}
//               style={{
//                 float: "right",
//                 background: "transparent",
//                 border: "none",
//                 color: "#fff",
//                 fontSize: "20px",
//                 cursor: "pointer",
//                 marginTop: "-2px",
//               }}
//               aria-label="Close chat"
//             >
//               ×
//             </button>
//           </div>
//           <div
//             style={{
//               flex: 1,
//               padding: "16px",
//               background: "#f9f9f9",
//               overflowY: "auto",
//               maxHeight: "260px",
//               minHeight: "120px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//             }}
//           >
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
//                   background:
//                     msg.from === "user"
//                       ? "linear-gradient(135deg, var(--chat-accent), var(--chat-secondary))"
//                       : "var(--chat-bot-bg)",
//                   color: msg.from === "user" ? "var(--chat-user-color)" : "var(--chat-bot-color)",
//                   borderRadius: "14px",
//                   padding: "8px 14px",
//                   marginBottom: 2,
//                   boxShadow:
//                     msg.from === "user"
//                       ? "0 2px 8px rgba(80,227,194,0.08)"
//                       : "0 2px 8px rgba(255,107,107,0.08)",
//                   fontSize: "15px",
//                   maxWidth: "80%",
//                   wordBreak: "break-word",
//                 }}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             {typing && <TypingLoader />}
//             <div ref={chatEndRef} />
//           </div>
//           <div
//             style={{
//               padding: "12px 16px",
//               borderTop: "1px solid #eee",
//               background: "#fff",
//               display: "flex",
//               gap: "8px",
//             }}
//           >
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleInputKeyDown}
//               placeholder="Ask me about my skills, experience, or projects! 😎"
//               style={{
//                 flex: 1,
//                 padding: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid #eee",
//                 fontSize: "15px",
//                 outline: "none",
//               }}
//               disabled={typing}
//             />
//             <button
//               onClick={handleSend}
//               disabled={typing || !input.trim()}
//               style={{
//                 background: "linear-gradient(135deg, #ff6b6b, #50e3c2)",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 padding: "0 18px",
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 cursor: typing || !input.trim() ? "not-allowed" : "pointer",
//                 opacity: typing || !input.trim() ? 0.6 : 1,
//                 transition: "opacity 0.2s",
//               }}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FloatingChat;



import React, { useState, useRef, useEffect } from "react";
import "./FloatingChat.css";

const resumeContent = `
JAGADEESHAN D
FULL-STACK DEVELOPER

CONTACT
+919600259870
jagadeeshanappu0333@gmail.com
Dharmapuri, Tamil Nadu
Jagadeeshan D

EDUCATION
2019 - 2023
PANIMALAR ENGINEERING COLLEGE
- Bachelor of Engineering
- CGPA: 8.89

SKILLS
BACKEND DEVELOPMENT
- Node.js
- Express.js
- Python
- MySQL
- Sequelize
- Session & Cookie-based Authentication
- RESTful API Development

FRONTEND DEVELOPMENT
- React.js
- HTML5, CSS3
- Tailwind CSS
- JavaScript
- Vite
- Lazy Loading Techniques
- SEO Optimization

BLOCKCHAIN
- Smart Contract Integration
- NFT Issuance
- IPFS for Decentralized Storage

AI & AUTOMATION
- N8n AI Agents
- Ollama (Local AI Execution on Linux)
- AI Workflow Automation

CLOUD & DEVOPS
- AWS EC2 & S3
- Server Setup & Management
- Cloudflare (DDoS Protection & DNS)
- Linux Server Handling
- Git, Bitbucket, Jira

MARKETING & ANALYTICS
- Google Ads
- Meta Ads
- Social Media Marketing (SMM)
- SEO Best Practices

PROFILE
Full-Stack Developer with over 2 years of experience at FABC LLC, specializing in building scalable web applications using React, Node.js, Python, and blockchain technologies. Proficient in integrating smart contracts, optimizing website performance through lazy loading and SEO, and deploying secure cloud infrastructure with AWS and Cloudflare. Adept at leveraging AI tools like N8n and Ollama to enhance productivity and streamline workflows.

WORK EXPERIENCE
FABC LLC
2023 - PRESENT
Full-stack Developer
Learning Management System (LMS)
Developed a blockchain-based LMS backend with Node.js and MySQL, implementing user authentication, course management, and NFT certificate issuance. Optimized API response time by 30% using sequelize ORM and lazy loading techniques.
Recruiter Management System (RMS)
Developed the backend for a blockchain-based recruitment platform with a skill marketplace, NFT-based CVs, LMS, integrated DNA skill mapping, and secure user validation.
ICO Projects
Contributed to the development and implementation of multiple Initial Coin Offering (ICO) projects.
Healthcare Web Apps (IPFS Storage)
Developed and maintained healthcare-focused websites, integrating IPFS for secure storage of sensitive patient data such as medical and DNA reports.
Real-Time Troubleshooting
Mitigated a major DDoS attack by configuring Cloudflare's security settings, ensuring 99.9% uptime.

PROJECTS
AI-Driven Productivity
Utilized N8n AI agents to automate repetitive tasks, reducing manual workload by 20%. Ran Ollama on a Linux system to support local AI model testing, improving development efficiency.
E-Commerce Platform
Developed a full-stack e-commerce platform using React, Node.js, and MySQL with Sequelize ORM. Implemented lazy loading and SEO, improving page load time by 35% and search ranking by 20%. Deployed on AWS EC2 with S3 for media storage.
Applicant Tracking System (ATS)
Developed a custom ATS to streamline hiring processes using Node.js, React, and MySQL; implemented keyword parsing, resume ranking, and smart filtering to assist HR workflows.
SEO & Marketing
Enhanced website visibility by implementing SEO best practices, achieving a 15% increase in organic traffic. Managed Google Ads and Meta Ads campaigns, boosting user engagement by 10%.
Automated Garbage Collector
Engineered an IoT and RFID-based system for automated garbage collection, reducing operational costs by 15%.
Self-Driving Car using OpenCV and Machine Learning
Developed a prototype self-driving car using computer vision and machine learning algorithms.

KEY ACHIEVEMENTS
- Improved website performance by 35% by implementing lazy loading and hosting assets on AWS S3 buckets for efficient content delivery.
- Secured user authentication by implementing cookies and session management, ensuring robust access control in web applications.
- Boosted productivity by 20% by creating AI agents in N8n to automate repetitive tasks and streamline workflows.
- Enhanced API response time by 30% through the integration of Sequelize ORM methods in Node.js applications.
`;

const GEMINI_API_KEY = "AIzaSyBkeVPYl_X9AkKvx_FDlQZ-Y_idcIuEkBo";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const TypingLoader = () => (
  <div className="typing-loader">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey there! What's up? I'm Jagadeeshan D, happy to chat. Ask me anything about my skills, experience, or projects! 😎",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, typing]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setTyping(true);

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a portfolio chatbot speaking as Jagadeeshan D, a Full-Stack Developer. Use "I" to refer to Jagadeeshan and start every response with "Hey there! What's up? I'm Jagadeeshan D, happy to chat." Adopt a professional yet fun and friendly tone, like chatting with a colleague. When asked about skills, projects, or achievements, provide answers in a structured format with **bold category headings** and bullet points, exactly like this example:

Example for skills:
Hey there! What's up? I'm Jagadeeshan D, happy to chat. Here's a breakdown:
**Backend Development:** Node.js, Express.js, Python, MySQL, Sequelize, RESTful API Development, Session & Cookie-based Authentication.
**Frontend Development:** React.js, HTML5, CSS3, Tailwind CSS, JavaScript, Vite, Lazy Loading Techniques, SEO Optimization.
**Blockchain:** Smart Contract Integration, NFT Issuance, IPFS for Decentralized Storage.
**AI & Automation:** N8n AI Agents, Ollama (Local AI Execution on Linux), AI Workflow Automation.
**Cloud & DevOps:** AWS EC2 & S3, Server Setup & Management, Cloudflare (DDoS Protection & DNS), Linux Server Handling, Git, Bitbucket, Jira.
**Marketing & Analytics:** Google Ads, Meta Ads, Social Media Marketing (SMM), SEO Best Practices.
Let me know if you'd like to know more about any specific area!

Base all responses solely on the resume content below, and keep them concise and engaging. If the query is unrelated to my professional background, politely say you can only answer about my skills, experience, or projects, like: "Hey there! What's up? I'm Jagadeeshan D, happy to chat. I can only talk about my skills, experience, or projects, so hit me with one of those! 😄"

Resume Content:
${resumeContent}

User Query: ${input}`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from Gemini API");
      }

      const data = await response.json();
      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Hey there! What's up? I'm Jagadeeshan D, happy to chat. I can only talk about my skills, experience, or projects, so hit me with one of those! 😄";

      setMessages([...newMessages, { from: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error fetching Gemini API:", error);
      setMessages([
        ...newMessages,
        {
          from: "bot",
          text: "Oops, my code’s having a coffee break! 😅 Try asking about my skills or projects!",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="floating-chat-container">
      <button
        onClick={() => setOpen(!open)}
        className="chat-toggle-button"
        aria-label="Open chat"
        style={{
          // position: "fixed",
          // bottom: "30px",
          // right: "30px",
          // background: "linear-gradient(135deg, var(--chat-primary), var(--chat-secondary), var(--chat-accent))",
          // color: "#fff",
          // border: "none",
          // borderRadius: "50%",
          // width: "60px",
          // height: "60px",
          // boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          // fontSize: "28px",
          // cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <svg
          className="chat-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {open && (
        <div className="chat-window"
        style={{
        
          zIndex: 1000,
        }}
        >
          <div className="chat-header">
            <h3>Chat with Jagadeeshan!</h3>
            <button
              onClick={() => setOpen(false)}
              className="close-button"
              aria-label="Close chat"
            >
              <svg
                className="close-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.from === "user" ? "user-message" : "bot-message"}`}
              >
                <span>{msg.text}</span>
              </div>
            ))}
            {typing && <TypingLoader />}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Ask about my skills or projects! 😎"
              className="chat-input"
              disabled={typing}
            />
            <button
              onClick={handleSend}
              disabled={typing || !input.trim()}
              className="send-button"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;



// import React, { useState, useRef, useEffect } from "react";


// const WEBHOOK_URL = "https://beetle-sharing-pug.ngrok-free.app/webhook/portfoli";


// const TypingLoader = () => (
//   <div className="flex items-center space-x-1 p-3">
//     <div className="flex space-x-1">
//       <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
//       <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//       <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//     </div>
//     <span className="text-xs text-gray-500 ml-2">Typing...</span>
//   </div>
// );

// const FloatingChat = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hey there! What's up? I'm Jagadeeshan D, happy to chat. Ask me anything about my skills, experience, or projects! 😎" },
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     if (open && chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, open, typing]);

// const handleSend = async () => {
//   if (!input.trim()) return;

//   const newMessages = [...messages, { from: "user", text: input }];
//   setMessages(newMessages);
//   setInput("");
//   setTyping(true);

//   try {
//     const response = await fetch(WEBHOOK_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: input }),
//     });

//     if (!response.ok) {
//       throw new Error(`Webhook error: ${response.status}`);
//     }

//     const data = await response.json();
//     const botResponse =
//       data?.[0]?.output?.trim() ||
//       "Hey there! What's up? I'm Jagadeeshan D, happy to chat. Something went wrong, so let's try again! 😄";

//     setMessages([...newMessages, { from: "bot", text: botResponse }]);
//   } catch (error) {
//     console.error("Error fetching webhook:", error);
//     setMessages([
//       ...newMessages,
//       {
//         from: "bot",
//         text:
//           "Oops, my code's having a coffee break! 😅 Try asking about my skills or projects!",
//       },
//     ]);
//   } finally {
//     setTyping(false);
//   }
// };


//   const handleInputKeyDown = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
//         .chat-widget {
//           font-family: 'Poppins', sans-serif;
//         }
        
//         .chat-button {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           width: 60px;
//           height: 60px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           border: none;
//           border-radius: 50%;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 24px;
//           color: white;
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
//           transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           z-index: 1001;
//           animation: pulse 2s infinite;
//         }
        
//         .chat-button:hover {
//           transform: scale(1.1) translateY(-2px);
//           box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
//         }
        
//         .chat-button:active {
//           transform: scale(0.95);
//         }
        
//         @keyframes pulse {
//           0% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4); }
//           50% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6), 0 0 0 10px rgba(102, 126, 234, 0.1); }
//           100% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4); }
//         }
        
//         .chat-container {
//           position: fixed;
//           bottom: 90px;
//           right: 20px;
//           width: 350px;
//           max-width: calc(100vw - 40px);
//           background: white;
//           border-radius: 20px;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
//           z-index: 1000;
//           overflow: hidden;
//           transform-origin: bottom right;
//           animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }
        
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px) scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         .chat-header {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
//           color: white;
//           padding: 16px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
        
//         .chat-title {
//           font-weight: 600;
//           font-size: 16px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
        
//         .online-dot {
//           width: 8px;
//           height: 8px;
//           background: #4ade80;
//           border-radius: 50%;
//           animation: blink 1.5s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0.3; }
//         }
        
//         .close-btn {
//           background: none;
//           border: none;
//           color: white;
//           font-size: 20px;
//           cursor: pointer;
//           width: 30px;
//           height: 30px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.2s ease;
//         }
        
//         .close-btn:hover {
//           background: rgba(255, 255, 255, 0.2);
//           transform: rotate(90deg);
//         }
        
//         .messages-container {
//           height: 300px;
//           overflow-y: auto;
//           padding: 16px;
//           background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }
        
//         .messages-container::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .messages-container::-webkit-scrollbar-track {
//           background: transparent;
//         }
        
//         .messages-container::-webkit-scrollbar-thumb {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border-radius: 2px;
//         }
        
//         .message {
//           max-width: 85%;
//           padding: 10px 14px;
//           border-radius: 18px;
//           font-size: 14px;
//           line-height: 1.4;
//           word-wrap: break-word;
//           animation: messageIn 0.3s ease-out;
//         }
        
//         @keyframes messageIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .user-message {
//           align-self: flex-end;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           border-bottom-right-radius: 4px;
//         }
        
//         .bot-message {
//           align-self: flex-start;
//           background: white;
//           color: #374151;
//           border: 1px solid #e5e7eb;
//           border-bottom-left-radius: 4px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//         }
        
//         .input-container {
//           padding: 16px;
//           background: white;
//           border-top: 1px solid #e5e7eb;
//           display: flex;
//           gap: 8px;
//           align-items: flex-end;
//         }
        
//         .message-input {
//           flex: 1;
//           padding: 12px 16px;
//           border: 2px solid #e5e7eb;
//           border-radius: 25px;
//           font-size: 14px;
//           outline: none;
//           resize: none;
//           font-family: inherit;
//           background: #f9fafb;
//           transition: all 0.2s ease;
//           min-height: 20px;
//           max-height: 100px;
//         }
        
//         .message-input:focus {
//           border-color: #667eea;
//           background: white;
//           box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
//         }
        
//         .send-button {
//           width: 44px;
//           height: 44px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border: none;
//           border-radius: 50%;
//           color: white;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 16px;
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//         }
        
//         .send-button:hover:not(:disabled) {
//           transform: scale(1.05);
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
//         }
        
//         .send-button:active {
//           transform: scale(0.95);
//         }
        
//         .send-button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//           transform: none;
//         }
        
//         /* Mobile Responsiveness */
//         @media (max-width: 480px) {
//           .chat-container {
//             width: calc(100vw - 20px);
//             right: 10px;
//             bottom: 80px;
//           }
          
//           .chat-button {
//             right: 15px;
//             bottom: 15px;
//             width: 55px;
//             height: 55px;
//           }
          
//           .messages-container {
//             height: 250px;
//             padding: 12px;
//           }
          
//           .message {
//             max-width: 90%;
//             font-size: 13px;
//           }
          
//           .input-container {
//             padding: 12px;
//           }
//         }
        
//         @media (max-width: 360px) {
//           .chat-container {
//             width: calc(100vw - 10px);
//             right: 5px;
//           }
          
//           .messages-container {
//             height: 200px;
//           }
//         }
        
//         /* Landscape Mobile */
//         @media (max-height: 500px) and (orientation: landscape) {
//           .chat-container {
//             height: 90vh;
//             max-height: 400px;
//           }
          
//           .messages-container {
//             height: calc(100% - 140px);
//           }
//         }
//       `}</style>
      
//       <div className="chat-widget">
//         {/* Chat Toggle Button */}
//         <button
//           className="chat-button"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle chat"
//         >
//           {open ? '✕' : '💬'}
//         </button>

//         {/* Chat Container */}
//         {open && (
//           <div className="chat-container">
//             {/* Header */}
//             <div className="chat-header">
//               <div className="chat-title">
//                 <span>💬 Chat with Me!</span>
//                 <div className="online-dot"></div>
//               </div>
//               <button
//                 className="close-btn"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close chat"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="messages-container">
//               {messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`message ${msg.from === "user" ? "user-message" : "bot-message"}`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//               {typing && <TypingLoader />}
//               <div ref={chatEndRef} />
//             </div>

//             {/* Input */}
//             <div className="input-container">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleInputKeyDown}
//                 placeholder="Ask me about my skills, experience, or projects! 😎"
//                 className="message-input"
//                 disabled={typing}
//               />
//               <button
//                 onClick={handleSend}
//                 disabled={typing || !input.trim()}
//                 className="send-button"
//                 aria-label="Send message"
//               >
//                 {typing ? '⏳' : '➤'}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default FloatingChat;
