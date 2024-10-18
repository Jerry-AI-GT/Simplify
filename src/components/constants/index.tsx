import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "./profile-pictures/user1.jpg";
import user2 from "./profile-pictures/user2.jpg";
import user3 from "./profile-pictures/user3.jpg";
import user4 from "./profile-pictures/user4.jpg";
import user5 from "./profile-pictures/user5.jpg";
import user6 from "./profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Michael S",
    company: "Junior Developer",
    image: "./profile-pictures/user1.jpg",
    text: "Simplify helped me identify my weak points in coding. JERRY AI's instant feedback and personalized suggestions have been invaluable in sharpening my skills!",
  },
  {
    user: "Emma R",
    company: "Full-Stack Engineer",
    image: "./profile-pictures/user2.jpg",
    text: "The diversity of problem sets and JERRY AI's insightful code optimization tips have taken my programming to the next level. It's like having a personal mentor!",
  },
  {
    user: "James T",
    company: "Front-End Developer",
    image: "./profile-pictures/user3.jpg",
    text: "JERRY AI's real-time feedback has made learning so much easier. I used to struggle with debugging, but now I fix my mistakes in minutes and understand them better.",
  },
  {
    user: "Ronee Brown",
    company: "College Student",
    image: "./profile-pictures/user4.jpg",
    text: "The interactive problem explanations are a game-changer. JERRY AI breaks down complex problems step-by-step, making it easy to learn new concepts quickly",
  },
  {
    user: "Ethan W",
    company: "Backend Developer",
    image: "./profile-pictures/user5.jpg",
    text: "Simplify has completely transformed how I approach coding problems. JERRY AI's detailed feedback and debugging tips have helped me write cleaner, more efficient code.",
  },
  {
    user: "Olivia M",
    company: "Mobile App Developer",
    image: "./profile-pictures/user6.jpg",
    text: "I appreciate how JERRY AI adapts to my learning pace. The platform not only challenges me but also helps me grow as a programmer with its tailored guidance and problem sets.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Instant Code Feedback",
    description:
      "Receive real-time insights on your code. Identify errors, optimize performance, and understand best practices as you code.",
  },
  {
    icon: <Fingerprint />,
    text: "Interactive Problem Solving",
    description:
      "Engage in hands-on coding challenges designed to test and enhance your skills. Get immediate feedback and learn through practice.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Starter Code",
    description:
      "Jumpstart your coding journey with pre-written code templates. These templates provide a strong foundation for tackling programming challenges, allowing you to focus on solving problems rather than setting up boilerplate code.",
  },
  {
    icon: <BatteryCharging />,
    text: "Test Cases",
    description:
      "Ensure your code is rock-solid with comprehensive test cases.",
  },
  {
    icon: <PlugZap />,
    text: "AI-Powered Code Recommendations",
    description:
      "Leverage AI to get smart code suggestions and improvements. Write cleaner, more efficient code with JERRY AI's guidance.",
  },
  {
    icon: <GlobeLock />,
    text: "In-Depth Code Analysis",
    description:
      "Receive detailed feedback on your code's structure, logic, and efficiency. JERRY AI's thorough analysis helps you refine your skills and write better code with each challenge.",
  },
];

export const checklistItems = [
  {
    title: "Diverse Problem Sets",
    description:
      "Solve a variety of problems across multiple programming languages and domains.",
  },
  {
    title: "Code Optimization Tips",
    description:
      "Learn how to write more efficient and optimized code with JERRY AI's recommendations.",
  },
  {
    title: "Error Debugging Assistance",
    description:
      "Get detailed explanations and solutions for common coding errors.",
  },
  {
    title: "Interactive Problem Explanations",
    description:
      "Learn with step-by-step problem breakdowns and code walkthroughs by JERRY AI.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
