"use client";

import { Code, Wrench, Palette, Server, Layers, Star } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Work", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Subhadeep"
          button={{
            text: "Hire Me",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Full-Stack Developer & Problem Solver"
          description="I create modern, responsive web applications using cutting-edge technologies. Let's build something amazing together."
          tag="Web Developer"
          tagIcon={Code}
          buttons={[
            { text: "View My Work", href: "testimonials" },
            { text: "Get In Touch", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Subhadeep working on web development projects"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="I'm passionate about creating digital experiences that make a difference. With expertise in modern web technologies, I help businesses and individuals bring their ideas to life through clean, efficient code."
          buttons={[
            { text: "Download Resume", href: "https://example.com/resume.pdf" },
            { text: "Learn More", href: "services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Development Services"
          description="Comprehensive web development solutions tailored to your needs"
          tag="Services"
          tagIcon={Wrench}
          features={[
            {
              title: "Frontend Development",
              description: "Modern, responsive user interfaces built with React, Next.js, and cutting-edge CSS frameworks for optimal user experience.",
              icon: Palette,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Backend Development",
              description: "Robust server-side solutions using Node.js, Python, and databases to power your applications with reliability and scalability.",
              icon: Server,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Full-Stack Solutions",
              description: "End-to-end development from concept to deployment, ensuring seamless integration between frontend and backend systems.",
              icon: Layers,
              button: { text: "Learn More", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="What clients say about working with me"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Product Manager",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen profile"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Founder",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez profile"
            },
            {
              id: "3",
              name: "Emily Johnson",
              role: "CTO",
              company: "DataFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990037/pexels-photo-5990037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Johnson profile"
            },
            {
              id: "4",
              name: "David Park",
              role: "CEO",
              company: "WebCraft Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park profile"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Work Together"
          description="Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company (Optional)", required: false },
            { name: "budget", type: "text", placeholder: "Project Budget", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your project...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/6804086/pexels-photo-6804086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern developer workspace"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Frontend Development", href: "services" },
                { label: "Backend Development", href: "services" },
                { label: "Full-Stack Solutions", href: "services" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get In Touch", href: "contact" },
                { label: "View Resume", href: "https://example.com/resume.pdf" }
              ]
            }
          ]}
          copyrightText="© 2025 | Subhadeep - Web Developer"
        />
      </div>
    </ThemeProvider>
  );
}