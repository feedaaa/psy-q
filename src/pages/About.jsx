import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Psy-Q
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Empowering students to excel in competitive exams with comprehensive support and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PSYQ Learning envisions a world where psychological
                understanding is a part of everyday life - where education is
                inclusive, mental health is prioritized, and emotional intelligence
                shapes the future. We aspire to make mental health education
                accessible to all-teachers, students, and communitiesbreaking barriers of stigma and misunderstanding. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to nurture emotionally intelligent individuals who think critically,
                act compassionately, and lead with awareness. By integrating modern psychology with real-life application, 
                PSYQ aims to build an inclusive, mindful society that values human connection, emotional well-being, and lifelong learning as the true measures
                of progress and success.
              </p>
            </div>
            <div className="h-32" style={{ borderRadius: '60px 0px 60px 0px', overflow: 'hidden' }}>
              <img 
                src="/images/mission-image.png" 
                alt="Psy-Q Mission - Empowering students through education"
                className="w-full h-full object-cover"
                style={{ borderRadius: '60px 0px 60px 0px' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Our experienced faculty provides personalized guidance tailored to each student's needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Psychological Support</h3>
              <p className="text-gray-600">We provide counseling services to help students manage stress and build confidence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Learning</h3>
              <p className="text-gray-600">Our dynamic modules and webinars make learning engaging and effective.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 lg:p-12 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                  <span style={{ color: '#1e3a8a' }}>The Story of</span>{' '}
                  <span style={{ color: '#be185d' }}>PSYQ Learning</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  PSYQ Learning started as a student-led initiative in Kerala, founded by a group
                  of psychology proffesionals who passionate about mental health and
                  education. What began as a digital classroom soon grew into a platform
                  connecting learners, counsellors, and educators.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The goal was simple — to make psychology relevant, reachable, and rooted in
                  real experiences. Over time, PSYQ developed a range of programs focusing on
                  skill-building, awareness, and practical application. Today, it stands as a
                  growing community dedicated to bringing professionalism and purpose into
                  psychological education.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xs aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="/images/story-graphic.png" 
                    alt="PSYQ Learning Story - Arrows representing direction and growth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 lg:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have achieved their goals with Psy-Q's comprehensive support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to="/signup" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link> */}
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
