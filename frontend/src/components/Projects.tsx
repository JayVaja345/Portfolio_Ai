import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "PromptVerse - AI Chatbot",
    description:
      "Dual-model AI chatbot with dynamic API switching between OpenAI and Gemini",
    longDescription:
      "A sophisticated AI chatbot that seamlessly switches between OpenAI and Gemini models. Features clean UI with real-time message rendering and robust error handling for API calls.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "OpenAI API", "Gemini API", "Tailwind CSS"],
    github: "https://github.com",
    features: [
      "Dynamic API switching between OpenAI and Gemini",
      "Real-time message rendering",
      "Error-safe API calls",
      "Clean, responsive UI",
    ],
  },
  {
    id: 2,
    title: "OCR CLI Tool",
    description: "Tesseract-based OCR pipeline achieving 90%+ accuracy",
    longDescription:
      "Command-line tool for extracting text from images using Tesseract OCR. Implements advanced preprocessing techniques including grayscale conversion and thresholding for maximum accuracy.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Tesseract", "OpenCV", "CLI"],
    github: "https://github.com",
    features: [
      "90%+ accuracy through preprocessing",
      "Grayscale and thresholding techniques",
      "Exception handling for reliability",
      "Modular architecture",
    ],
  },
  {
    id: 3,
    title: "NavRasiya - Garba Platform",
    description: "Digital platform for Garba events with payment integration",
    longDescription:
      "Comprehensive digital platform for Garba events featuring Razorpay payment integration, admin dashboard, and user management system.",
    image: "/api/placeholder/600/400",
    technologies: ["MERN Stack", "Razorpay", "Socket.io", "JWT"],
    github: "https://github.com/JayVaja345/Navrasiya",
    features: [
      "Razorpay payment integration",
      "Admin dashboard for content upload",
      "User management system",
      "Event analytics and reporting",
    ],
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Built during MERN Stack Internship at Codec Technologies",
    longDescription:
      "Real-time collaboration platform with live sync functionality. Implemented during internship at Codec Technologies with focus on user authentication and state management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/JayVaja345/SlateSync",
    features: [
      "Real-time collaboration with Socket.io",
      "JWT authentication",
      "Live document sync",
      "Efficient state management",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen bg-gray-950 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work spanning AI chatbots, OCR tools, and
            full-stack applications. Each project reflects my commitment to
            clean code and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all hover:transform hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-linear-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-800 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400">{selectedProject.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image */}
              <div className="h-64 bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-400"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
